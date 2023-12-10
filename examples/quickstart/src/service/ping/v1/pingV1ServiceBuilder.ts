import type { ServiceInfoType } from '@purista/core'
import { ServiceBuilder } from '@purista/core'

import { generalPingServiceInfo } from '../generalPingServiceInfo.js'
import { pingServiceV1ConfigSchema } from './pingServiceConfig.js'

export const pingServiceInfo: ServiceInfoType = {
  serviceVersion: '1',
  ...generalPingServiceInfo,
}

// create a service builder instance and assign service config schema and default config.

export const pingV1ServiceBuilder = new ServiceBuilder(pingServiceInfo)
  .setConfigSchema(pingServiceV1ConfigSchema)
  .setDefaultConfig({})
