import { User } from "../contexts/user";

export class UserService {
  public register(user: User): void {
    fetch (`https://web-development-9dc40-default-rtdb.firebaseio.com/users.json`, {
      method: 'POST',
      body: JSON.stringify(user)
    }).then((data) => {
      console.log(data)
    })
  }
}