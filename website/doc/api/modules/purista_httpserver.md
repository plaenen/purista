[PURISTA API](../README.md) / [Modules](../modules.md) / @purista/httpserver

# Module: @purista/httpserver

**`Deprecated`**

Since version 1.10.0. Use {@purista/hono-http-server} instead.

The HttpServerService is a service which exposes commands of services as http endpoints.  
All exposed commands must be marked as exposed endpoints in the CommandBuilder.

While the main focus is on development and debug, the HttpServerService will also fit for small projects or running on IoT/edge.

Under the hood, [fastify](https://www.fastify.io/) is used as basement.  
Because of this, the whole [fastify ecosystem](https://www.fastify.io/ecosystem/) can be used and integrated.

The HttpServerService can also be configured, to provide the OpenApi-UI in browsers.  
The OpenApi definitions is created from the CommandBuilder settings of each command.  
This means, that there are no additional steps or code required, to provide the OpenApi definition.  
It is autogenerated mostly from input and output schema definitions.

**`Example`**

```typescript
import fastifyStatic from '@fastify/static'
import { DefaultEventBridge, gracefulShutdown, initLogger } from '@purista/core'
import { httpServerV1Service, HttpServerServiceV1Config } from '@purista/httpserver'

const main = async() => {
 const logger = initLogger()

 const eventBridge = new DefaultEventBridge()

 const httpServerConfig: HttpServerServiceV1Config = {
   fastify: {},
   port: 8080,
   logLevel: 'debug',
   domain: 'localhost',
   apiMountPath: '/api',
   openApi: {
     enabled: true,
     info: {
       title: 'backend api',
       description: 'OpenApi definition for server endpoints',
       version: '1.0.0',
     },
   },
 }

 const httpServerService = httpServerV1Service.getInstance(eventBridge, {
   serviceConfig: httpServerConfig,
 })

 // static file handler
 const defaultPublicPath = resolve(__dirname, '..', 'public')
 httpServerService.server?.register(fastifyStatic, {
   root: defaultPublicPath,
   decorateReply: false,
 })

 // start the webserver
 await httpServerService.start()

 // and and start your services here
 // ...
 // ...

 gracefulShutdown(logger, [
   // begin with the event bridge to no longer accept incoming messages
   eventBridge,
   // shut down optional services
   // ...
   // ...
   httpServerService,
 ])
}

main()
```

## Table of contents

### Enumerations

- [ServiceEvent](../enums/purista_httpserver.ServiceEvent.md)

### Type Aliases

- [BeforeResponseHook](purista_httpserver.md#beforeresponsehook)
- [HttpServerServiceV1Config](purista_httpserver.md#httpserverservicev1config)
- [HttpServerV1ServiceCommandsToRestApiInputPayload](purista_httpserver.md#httpserverv1servicecommandstorestapiinputpayload)

### Variables

- [httpServerServiceInfo](purista_httpserver.md#httpserverserviceinfo)
- [httpServerV1Service](purista_httpserver.md#httpserverv1service)
- [httpServerV1ServiceBuilder](purista_httpserver.md#httpserverv1servicebuilder)
- [puristaVersion](purista_httpserver.md#puristaversion)

## Type Aliases

### BeforeResponseHook

Ƭ **BeforeResponseHook**: \<T\>(`payload`: `T`, `request`: `FastifyRequest`, `reply`: `FastifyReply`, `parameter`: `Record`\<`string`, `unknown`\>) => `void`

#### Type declaration

▸ \<`T`\>(`payload`, `request`, `reply`, `parameter`): `void`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `T` |
| `request` | `FastifyRequest` |
| `reply` | `FastifyReply` |
| `parameter` | `Record`\<`string`, `unknown`\> |

##### Returns

`void`

#### Defined in

[packages/httpserver/src/service/httpServer/v1/types/BeforeResponseHook.ts:3](https://github.com/sebastianwessel/purista/blob/master/packages/httpserver/src/service/httpServer/v1/types/BeforeResponseHook.ts#L3)

___

### HttpServerServiceV1Config

Ƭ **HttpServerServiceV1Config**: `HttpServerServiceV1ConfigRaw` & \{ `compressOptions?`: `FastifyCompressOptions` ; `corsOptions?`: `FastifyCorsOptions` ; `fastify`: `Partial`\<`FastifyServerOptions`\> & `Partial`\<`FastifyHttp2SecureOptions`\<`Http2SecureServer`\>\>  }

#### Defined in

[packages/httpserver/src/service/httpServer/v1/httpServerServiceConfig.ts:94](https://github.com/sebastianwessel/purista/blob/master/packages/httpserver/src/service/httpServer/v1/httpServerServiceConfig.ts#L94)

___

### HttpServerV1ServiceCommandsToRestApiInputPayload

Ƭ **HttpServerV1ServiceCommandsToRestApiInputPayload**: `z.output`\<typeof `httpServerV1ServiceCommandsToRestApiInputPayloadSchema`\>

#### Defined in

[packages/httpserver/src/service/httpServer/v1/subscription/serviceCommandsToRestApi/types.ts:5](https://github.com/sebastianwessel/purista/blob/master/packages/httpserver/src/service/httpServer/v1/subscription/serviceCommandsToRestApi/types.ts#L5)

## Variables

### httpServerServiceInfo

• `Const` **httpServerServiceInfo**: [`ServiceInfoType`](purista_core.md#serviceinfotype)

#### Defined in

[packages/httpserver/src/service/httpServer/v1/httpServerV1ServiceBuilder.ts:12](https://github.com/sebastianwessel/purista/blob/master/packages/httpserver/src/service/httpServer/v1/httpServerV1ServiceBuilder.ts#L12)

___

### httpServerV1Service

• `Const` **httpServerV1Service**: [`ServiceBuilder`](../classes/purista_core.ServiceBuilder.md)\<\{ `apiMountPath?`: `string` ; `compressOptions?`: `any` ; `cookieSecret?`: `string` ; `corsOptions?`: `any` ; `domain`: `string` ; `enableCompress`: `boolean` ; `enableCors`: `boolean` ; `enableHealthz`: `boolean` ; `enableHelmet`: `boolean` ; `fastify?`: `any` ; `healthzFunction?`: (...`args`: [`any`, `any`, ...unknown[]]) => `Promise`\<`void`\> ; `helmetOptions?`: \{ `enableCSPNonces?`: `boolean` ; `global?`: `boolean`  } ; `host`: `string` ; `logLevel?`: ``"info"`` \| ``"error"`` \| ``"warn"`` \| ``"debug"`` \| ``"trace"`` \| ``"fatal"`` ; `openApi?`: \{ `components?`: `any` ; `enabled`: `boolean` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `info`: \{ `contact?`: \{ `email?`: `string` ; `name?`: `string` ; `url?`: `string`  } ; `description`: `string` ; `license?`: \{ `name`: `string` ; `url?`: `string`  } ; `termsOfService?`: `string` ; `title`: `string` ; `version`: `string`  } = InfoObjectSchema; `path`: `string` ; `paths?`: `Record`\<`string`, `Record`\<`string`, `any`\>\> ; `security?`: `any`[] ; `servers?`: \{ `description?`: `string` ; `url`: `string` ; `variables?`: `any`  }[] ; `tags?`: \{ `description?`: `string` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `name`: `string`  }[]  } ; `port`: `number` ; `traceHeaderField`: `string` ; `uploadDir?`: `string`  }, \{ `apiMountPath?`: `string` ; `compressOptions?`: `any` ; `cookieSecret?`: `string` ; `corsOptions?`: `any` ; `domain?`: `string` ; `enableCompress?`: `boolean` ; `enableCors?`: `boolean` ; `enableHealthz?`: `boolean` ; `enableHelmet?`: `boolean` ; `fastify?`: `any` ; `healthzFunction?`: (...`args`: [`any`, `any`, ...unknown[]]) => `Promise`\<`void`\> ; `helmetOptions?`: \{ `enableCSPNonces?`: `boolean` ; `global?`: `boolean`  } ; `host?`: `string` ; `logLevel?`: ``"info"`` \| ``"error"`` \| ``"warn"`` \| ``"debug"`` \| ``"trace"`` \| ``"fatal"`` ; `openApi?`: \{ `components?`: `any` ; `enabled?`: `boolean` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `info`: \{ `contact?`: \{ `email?`: `string` ; `name?`: `string` ; `url?`: `string`  } ; `description?`: `string` ; `license?`: \{ `name`: `string` ; `url?`: `string`  } ; `termsOfService?`: `string` ; `title?`: `string` ; `version?`: `string`  } = InfoObjectSchema; `path?`: `string` ; `paths?`: `Record`\<`string`, `Record`\<`string`, `any`\>\> ; `security?`: `any`[] ; `servers?`: \{ `description?`: `string` ; `url`: `string` ; `variables?`: `any`  }[] ; `tags?`: \{ `description?`: `string` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `name`: `string`  }[]  } ; `port`: `number` ; `traceHeaderField?`: `string` ; `uploadDir?`: `string`  }, `HttpServerClass`\<\{ `apiMountPath?`: `string` ; `compressOptions?`: `any` ; `cookieSecret?`: `string` ; `corsOptions?`: `any` ; `domain`: `string` ; `enableCompress`: `boolean` ; `enableCors`: `boolean` ; `enableHealthz`: `boolean` ; `enableHelmet`: `boolean` ; `fastify?`: `any` ; `healthzFunction?`: (...`args`: [`any`, `any`, ...unknown[]]) => `Promise`\<`void`\> ; `helmetOptions?`: \{ `enableCSPNonces?`: `boolean` ; `global?`: `boolean`  } ; `host`: `string` ; `logLevel?`: ``"info"`` \| ``"error"`` \| ``"warn"`` \| ``"debug"`` \| ``"trace"`` \| ``"fatal"`` ; `openApi?`: \{ `components?`: `any` ; `enabled`: `boolean` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `info`: \{ `contact?`: \{ `email?`: `string` ; `name?`: `string` ; `url?`: `string`  } ; `description`: `string` ; `license?`: \{ `name`: `string` ; `url?`: `string`  } ; `termsOfService?`: `string` ; `title`: `string` ; `version`: `string`  } = InfoObjectSchema; `path`: `string` ; `paths?`: `Record`\<`string`, `Record`\<`string`, `any`\>\> ; `security?`: `any`[] ; `servers?`: \{ `description?`: `string` ; `url`: `string` ; `variables?`: `any`  }[] ; `tags?`: \{ `description?`: `string` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `name`: `string`  }[]  } ; `port`: `number` ; `traceHeaderField`: `string` ; `uploadDir?`: `string`  }\>\>

**`Deprecated`**

Since version 1.10.0. Use {@purista/hono-http-server} instead.

#### Defined in

[packages/httpserver/src/service/httpServer/v1/httpServerV1Service.ts:19](https://github.com/sebastianwessel/purista/blob/master/packages/httpserver/src/service/httpServer/v1/httpServerV1Service.ts#L19)

___

### httpServerV1ServiceBuilder

• `Const` **httpServerV1ServiceBuilder**: [`ServiceBuilder`](../classes/purista_core.ServiceBuilder.md)\<\{ `apiMountPath?`: `string` ; `compressOptions?`: `any` ; `cookieSecret?`: `string` ; `corsOptions?`: `any` ; `domain`: `string` ; `enableCompress`: `boolean` ; `enableCors`: `boolean` ; `enableHealthz`: `boolean` ; `enableHelmet`: `boolean` ; `fastify?`: `any` ; `healthzFunction?`: (...`args`: [`any`, `any`, ...unknown[]]) => `Promise`\<`void`\> ; `helmetOptions?`: \{ `enableCSPNonces?`: `boolean` ; `global?`: `boolean`  } ; `host`: `string` ; `logLevel?`: ``"info"`` \| ``"error"`` \| ``"warn"`` \| ``"debug"`` \| ``"trace"`` \| ``"fatal"`` ; `openApi?`: \{ `components?`: `any` ; `enabled`: `boolean` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `info`: \{ `contact?`: \{ `email?`: `string` ; `name?`: `string` ; `url?`: `string`  } ; `description`: `string` ; `license?`: \{ `name`: `string` ; `url?`: `string`  } ; `termsOfService?`: `string` ; `title`: `string` ; `version`: `string`  } = InfoObjectSchema; `path`: `string` ; `paths?`: `Record`\<`string`, `Record`\<`string`, `any`\>\> ; `security?`: `any`[] ; `servers?`: \{ `description?`: `string` ; `url`: `string` ; `variables?`: `any`  }[] ; `tags?`: \{ `description?`: `string` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `name`: `string`  }[]  } ; `port`: `number` ; `traceHeaderField`: `string` ; `uploadDir?`: `string`  }, \{ `apiMountPath?`: `string` ; `compressOptions?`: `any` ; `cookieSecret?`: `string` ; `corsOptions?`: `any` ; `domain?`: `string` ; `enableCompress?`: `boolean` ; `enableCors?`: `boolean` ; `enableHealthz?`: `boolean` ; `enableHelmet?`: `boolean` ; `fastify?`: `any` ; `healthzFunction?`: (...`args`: [`any`, `any`, ...unknown[]]) => `Promise`\<`void`\> ; `helmetOptions?`: \{ `enableCSPNonces?`: `boolean` ; `global?`: `boolean`  } ; `host?`: `string` ; `logLevel?`: ``"info"`` \| ``"error"`` \| ``"warn"`` \| ``"debug"`` \| ``"trace"`` \| ``"fatal"`` ; `openApi?`: \{ `components?`: `any` ; `enabled?`: `boolean` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `info`: \{ `contact?`: \{ `email?`: `string` ; `name?`: `string` ; `url?`: `string`  } ; `description?`: `string` ; `license?`: \{ `name`: `string` ; `url?`: `string`  } ; `termsOfService?`: `string` ; `title?`: `string` ; `version?`: `string`  } = InfoObjectSchema; `path?`: `string` ; `paths?`: `Record`\<`string`, `Record`\<`string`, `any`\>\> ; `security?`: `any`[] ; `servers?`: \{ `description?`: `string` ; `url`: `string` ; `variables?`: `any`  }[] ; `tags?`: \{ `description?`: `string` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `name`: `string`  }[]  } ; `port`: `number` ; `traceHeaderField?`: `string` ; `uploadDir?`: `string`  }, `HttpServerClass`\<\{ `apiMountPath?`: `string` ; `compressOptions?`: `any` ; `cookieSecret?`: `string` ; `corsOptions?`: `any` ; `domain`: `string` ; `enableCompress`: `boolean` ; `enableCors`: `boolean` ; `enableHealthz`: `boolean` ; `enableHelmet`: `boolean` ; `fastify?`: `any` ; `healthzFunction?`: (...`args`: [`any`, `any`, ...unknown[]]) => `Promise`\<`void`\> ; `helmetOptions?`: \{ `enableCSPNonces?`: `boolean` ; `global?`: `boolean`  } ; `host`: `string` ; `logLevel?`: ``"info"`` \| ``"error"`` \| ``"warn"`` \| ``"debug"`` \| ``"trace"`` \| ``"fatal"`` ; `openApi?`: \{ `components?`: `any` ; `enabled`: `boolean` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `info`: \{ `contact?`: \{ `email?`: `string` ; `name?`: `string` ; `url?`: `string`  } ; `description`: `string` ; `license?`: \{ `name`: `string` ; `url?`: `string`  } ; `termsOfService?`: `string` ; `title`: `string` ; `version`: `string`  } = InfoObjectSchema; `path`: `string` ; `paths?`: `Record`\<`string`, `Record`\<`string`, `any`\>\> ; `security?`: `any`[] ; `servers?`: \{ `description?`: `string` ; `url`: `string` ; `variables?`: `any`  }[] ; `tags?`: \{ `description?`: `string` ; `externalDocs?`: \{ `description?`: `string` ; `url`: `string`  } ; `name`: `string`  }[]  } ; `port`: `number` ; `traceHeaderField`: `string` ; `uploadDir?`: `string`  }\>\>

#### Defined in

[packages/httpserver/src/service/httpServer/v1/httpServerV1ServiceBuilder.ts:19](https://github.com/sebastianwessel/purista/blob/master/packages/httpserver/src/service/httpServer/v1/httpServerV1ServiceBuilder.ts#L19)

___

### puristaVersion

• `Const` **puristaVersion**: ``"1.10.6"``

#### Defined in

[packages/httpserver/src/version.ts:1](https://github.com/sebastianwessel/purista/blob/master/packages/httpserver/src/version.ts#L1)
