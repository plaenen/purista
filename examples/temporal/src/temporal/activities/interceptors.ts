import type { EventBridge, Logger } from '@purista/core'
import { Context } from '@temporalio/activity'
import type { ActivityExecuteInput, ActivityInboundCallsInterceptor, Next } from '@temporalio/worker'

/** An Activity Context with an attached logger */
export interface ContextWithLoggerAndEventBride extends Context {
  logger: Logger
  eventBridge: EventBridge
  invoke: <Payload = unknown, Parameter extends Record<string, unknown> = Record<string, unknown>, Output = unknown>(
    serviceName: string,
    serviceVersion: string,
    serviceTarget: string,
    payload: Payload,
    parameter: Parameter,
  ) => Promise<Output>
}

/** Get the current Activity context with an attached logger */
export function getContext(): ContextWithLoggerAndEventBride {
  return Context.current() as ContextWithLoggerAndEventBride
}

/** Logs Activity executions and their duration */
export class ActivityInboundPuristaInterceptor implements ActivityInboundCallsInterceptor {
  public readonly logger: Logger
  public readonly eventBridge: EventBridge

  constructor(ctx: Context, logger: Logger, eventBridge: EventBridge) {
    this.logger = logger.getChildLogger({
      serviceName: ctx.info.workflowType,
      serviceTarget: ctx.info.activityType,
    })

    this.eventBridge = eventBridge

    // Set a logger instance on the current Activity Context to provide
    // contextual logging information to each log entry generated by the Activity.
    ;(ctx as ContextWithLoggerAndEventBride).logger = this.logger
    ;(ctx as ContextWithLoggerAndEventBride).eventBridge = this.eventBridge
    ;(ctx as ContextWithLoggerAndEventBride).invoke = <
      Payload = unknown,
      Parameter extends Record<string, unknown> = Record<string, unknown>,
      Output = unknown,
    >(
      serviceName: string,
      serviceVersion: string,
      serviceTarget: string,
      payload: Payload,
      parameter: Parameter,
    ) => {
      return eventBridge.invoke<Output>({
        sender: {
          serviceName: ctx.info.workflowType,
          serviceVersion: '1',
          serviceTarget: ctx.info.activityType,
          instanceId: eventBridge.instanceId,
        },
        receiver: {
          serviceName,
          serviceVersion,
          serviceTarget,
        },
        payload: {
          payload,
          parameter,
        },
        contentEncoding: 'application/json',
        contentType: 'utf-8',
      })
    }
  }

  async execute(input: ActivityExecuteInput, next: Next<ActivityInboundCallsInterceptor, 'execute'>): Promise<unknown> {
    let error: any
    const startTime = process.hrtime.bigint()
    try {
      return await next(input)
    } catch (err: any) {
      error = err
      throw err
    } finally {
      const durationNanos = process.hrtime.bigint() - startTime
      const durationMs = Number(durationNanos / 1_000_000n)
      if (error) {
        this.logger.error({ err: error, durationMs }, 'activity failed')
      } else {
        this.logger.debug({ durationMs }, 'activity completed')
      }
    }
  }
}
