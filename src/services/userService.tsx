import { User } from "../contexts/user";

export class UserService {
  public async getAll(): Promise<User[] >{
    const users: User[] = [];
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

  public register(user: User): void {
    fetch (`https://web-development-9dc40-default-rtdb.firebaseio.com/users.json`, {
      method: 'POST',
      body: JSON.stringify(user)
    }).then((data) => {
      console.log(data)
    })
  }
}