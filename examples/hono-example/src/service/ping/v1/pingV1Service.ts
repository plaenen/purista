import type { CommandDefinitionList, SubscriptionDefinitionList } from '@purista/core'

import { deleteCommandBuilder } from './command/delete/deleteCommandBuilder.js'
import { fooCommandBuilder } from './command/foo'
import { paramTestCommandBuilder } from './command/paramTest'
import { pingCommandBuilder } from './command/ping/index.js'
import { pingV1ServiceBuilder } from './pingV1ServiceBuilder.js'
import { logSubscriptionBuilder } from './subscription/log/index.js'

// bring service config definition, command definitions and subscription definitions together in the service
// add only definitions and no further service config here
// other service config should be done in ./pingServiceBuilder.ts file

const commandDefinitions: CommandDefinitionList<any> = [
  pingCommandBuilder.getDefinition(),
  fooCommandBuilder.getDefinition(),
  paramTestCommandBuilder.getDefinition(),
  deleteCommandBuilder.getDefinition(),
]

const subscriptionDefinitions: SubscriptionDefinitionList<any> = [logSubscriptionBuilder.getDefinition()]

export const pingV1Service = pingV1ServiceBuilder
  .addCommandDefinition(...commandDefinitions)
  .addSubscriptionDefinition(...subscriptionDefinitions)
