export class UserService {
  async getAll() {
    const users = [];
    const response = await fetch(`https://web-development-9dc40-default-rtdb.firebaseio.com/users.json`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => {
      Object.keys(data).forEach((key) => {
        data[key].id = key;
        users.push(data[key]);
      })
      console.log(data);
    })
    return users;
  }

  register(user) {
    fetch (`https://web-development-9dc40-default-rtdb.firebaseio.com/users.json`, {
      method: 'POST',
      body: JSON.stringify(user)
    }).then((data) => {
      console.log(data)
    })
  }
}