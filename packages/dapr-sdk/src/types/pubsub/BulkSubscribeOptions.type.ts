/*
Copyright 2022 The Dapr Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import type { DaprPubSubRouteType } from './DaprPubSubRouteType.type.js'
import type { KeyValueType } from './KeyValue.type.js'

/**
 * BulkSubscribeOptions enlists the options for bulk subscribe
 **/
export type BulkSubscribeOptions = {
  // The route creation for a single route or DaprPubSubRouteType
  route?: string | DaprPubSubRouteType

  // Metadata for the subscription
  metadata?: KeyValueType

  // Max number of messages to be sent in a single bulk request
  maxMessagesCount?: number

  // Max duration to wait for messages to be sent in a single bulk request
  maxAwaitDurationMs?: number
}
