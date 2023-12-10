import type { ContentType } from './ContentType.js'

/**
 * Emits the given payload as custom message with the given event name.
 *
 * @example ```typescript
 * await emit('my-custom-event-name', { the: 'payload' })
 * ```
 */
export type EmitCustomMessageFunction = <Payload = unknown>(
  eventName: string,
  payload?: Payload,
  contentType?: ContentType,
  contentEncoding?: string,
) => Promise<void>
