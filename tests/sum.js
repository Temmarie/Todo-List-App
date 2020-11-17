const functions = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {firstName: 'Tam'}
    user['lastName'] = 'Temmarie';
    return user;
  },
  fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => 'error')

}
module.exports = functions;
