import { sayHello, asyncSayHello, getA } from './index'

it('say hello to me', function() {
  expect(sayHello()).toBe('Hello 👋')
})

it('async say hello', async () => {
  await expect(asyncSayHello()).resolves.toEqual('test')
})

it('can get', () => {
  expect(getA({ a: 'test' })).toBe('test')
}) 