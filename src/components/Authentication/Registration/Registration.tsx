import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import './Registration.scss';
import { User } from '../../../contexts/user'
import { UserService } from '../../../services/userService';
import { ValidationConstants } from '../../../constants/validationConstants';


interface IProps {
}

interface IRegistrationState {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  fieldValidationErrorMessage?: string;
}

export class Registration extends Component<IProps, IRegistrationState> {
  private fieldValidationErrorMessage!: string;
  constructor(props: IProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      fieldValidationErrorMessage: ''
    }
  }
  
private isFormValid(user: User):boolean {
  if(user.firstName === '' || (user.firstName && user.firstName.length <= 2)) {
    this.setState({
      fieldValidationErrorMessage: 'This field requires more than 2 characters.'
    });
    return false;
  }

  if(user.lastName === '' || (user.lastName && user.lastName.length <= 2)) {
    this.setState({
       fieldValidationErrorMessage: 'This field requires more than 2 characters.'
    });
    return false;
  }

  if(!ValidationConstants.emailPatern.test(`${user.email}`)) {
    this.setState({
       fieldValidationErrorMessage: 'Email is not valid.'
    });
    return false;
  }

  if(!ValidationConstants.passwordPattern.test(`${user.password}`)) {
    this.setState({
      fieldValidationErrorMessage: 'Password is not valid.'
   });
    return false
  }

  if(!(this.state.confirmPassword === user.password)) {
    fieldValidationErrorMessage: 'Passwords do not match.'
  }

  return true;
}

  public handleChange = (e: any) => {
    const { name, value } = e.target;
    //console.log(name, value)
    this.setState({
      [name]: value
    });
  }

  componentDiUpdate() {
    //console.log(this.state);
  }

  public save = async () => {
    const { firstName, lastName, email, password} = this.state;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;

    if(!this.isFormValid(user)) {
      return;
    }

    const userService = new UserService();
    userService.register(user);
    // console.log(user);
  }

// private isFormValid(user: any) : boolean {
//   if(user.firstName === '' || (user.firstName && user.firstName.length <= 2)) {
//     this.setState({
//       fieldValidationErrorMessage: 'This field requires more than 2 characters.'
//     });
//     return false;
//   }

//   if(user.lastName === '' || (user.lastName && user.lastName.length <= 2)) {
//     this.setState({
//       fieldValidationErrorMessage: 'This field requires more than 2 characters.'
//     });
//     return false;
//   }

//   if(!Validationuser.firstName === '' || (user.firstName && user.firstName.length <= 2)) {
//     this.setState({
//       fieldValidationErrorMessage: 'This field requires more than 2 characters.'
//     });
//     return false;
//   }
// }



  render() {
    const { firstName, lastName, email, password, confirmPassword, fieldValidationErrorMessage } = this.state;
    // const firstName = this.state.firstName;
    // const lastName = this.state.lastName;
    return (
      <div className='registration-content'>
        <div className='registration-container'>
          <div className='registration-title-container'>
            <h2>Register</h2>
          </div>

          <div className='registration-form-container'>
            <Form>
              <div className='first-name-item-container input-item-container'>
                <Input 
                  type='text' 
                  name={'firstName'} 
                  value={firstName} 
                  placeholder='Enter your first name' 
                  onChange={this.handleChange}
                  />
                  
              </div>

              <div className='last-name-item-container input-item-container'>
                <Input 
                  type='text' 
                  name={'lastName'} 
                  value={lastName} 
                  placeholder='Enter your last name' 
                  onChange={this.handleChange}
                  />
              </div>

              <div className='email-item-container input-item-container'>
                <Input 
                  type='email' 
                  name={'email'} 
                  value={email} 
                  placeholder='Enter your email' 
                  onChange={this.handleChange}
                  />
              </div>

              <div className='password-item-container input-item-container'>
                <Input 
                  type='password' 
                  name={'password'} 
                  value={password} 
                  placeholder='Enter your password' 
                  onChange={this.handleChange}
                  />
              </div>

              <div className='confirm-password-item-container input-item-container'>
                <Input 
                  type='password' 
                  name={'confirmPassword'} 
                  value={confirmPassword} 
                  placeholder='Confirm your password' 
                  onChange={this.handleChange}
                  />
              </div>

              <div className='register-button-container'>
                <Button color="primary" onClick={this.save}>Register</Button>
              </div>
              <div>{fieldValidationErrorMessage}</div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}