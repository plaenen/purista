import type { StartedTestContainer } from 'testcontainers'
import { GenericContainer, Wait } from 'testcontainers'

import { RedisStateStore } from '../src/RedisStateStore.impl.js'

const REDIS_PORT = 6379

describe('@purista/redis-state-store', () => {
  let container: StartedTestContainer

  beforeAll(async () => {
    container = await new GenericContainer('redis')
      .withExposedPorts({
        container: REDIS_PORT,
        host: REDIS_PORT,
      })
      .withWaitStrategy(Wait.forLogMessage('Ready to accept connections'))
      .withLogConsumer((_stream) => {
        // stream.on('data', (line) => console.debug(line))
        // eslint-disable-next-line no-console
        // stream.on('err', (line) => console.error(line))
      })
      .start()
  })

  afterAll(async () => {
    await container.stop()
  })

  it('set, get and remove values', async () => {
    const config = {
      url: `redis://127.0.0.1:${REDIS_PORT}`,
    }

    const store = new RedisStateStore({ config })

    await expect(store.setState('myState', { some: 'value' })).resolves.toBeUndefined()

    const value = await store.getState('myState')
    expect(value).toStrictEqual({
      myState: { some: 'value' },
    })

    await expect(store.removeState('myState')).resolves.toBeUndefined()
    await expect(store.getState('myState')).resolves.toStrictEqual({
      myState: undefined,
    })

    await expect(store.destroy()).resolves.toBeUndefined()
  })

  it('throws on disabled features', async () => {
    const config = {
      url: `redis://127.0.0.1:${REDIS_PORT}`,
    }

    const store = new RedisStateStore({ enableGet: false, enableRemove: false, enableSet: false, config })

    await expect(store.setState('myState', { some: 'value' })).rejects.toThrow(
      'set state at store is disabled by config',
    )
    await expect(store.getState('myState')).rejects.toThrow('get state from store is disabled by config')
    await expect(store.removeState('myState')).rejects.toThrow('remove state from store is disabled by config')

    await expect(store.destroy()).resolves.toBeUndefined()
  })
})
