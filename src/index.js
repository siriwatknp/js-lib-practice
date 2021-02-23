import get from 'lodash/get'

export const sayHello = () => "Hello 👋";

export const asyncSayHello = async () => {
  const a = {}
  console.log(a?.b ?? 'none')
  return Promise.resolve("test");
};

export const getA = (a) => get(a, 'a')

