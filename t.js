function test(arg, type) {
  const email = arg == 'user' ? 'user.cn' : 'other.cn';
  const obj = {
    key: 'userId',
    email,
    arr: ['key', 'arr', 'email'],
  };
  return obj;
}
