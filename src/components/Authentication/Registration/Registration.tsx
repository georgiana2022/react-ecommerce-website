import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import './Registration.scss';

interface IProps {
}

interface IRegistrationState {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string
}
export class Registration extends Component<IProps, IRegistrationState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      firstName: '',
      //lastName: '',
      //email: '',
      //password: ''
    }
  }
  
  handleChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

private isFormValid(user: User): boolean {
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

  if(!Validationuser.firstName === '' || (user.firstName && user.firstName.length <= 2)) {
    this.setState({
      fieldValidationErrorMessage: 'This field requires more than 2 characters.'
    });
    return false;
  }
}



  render() {
    const { firstName, lastName, email, password, confirmPassword, fieldValidationErrorMessage} = this.state;
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
                  name={'first-name'} 
                  value={firstName} 
                  placeholder='Enter your first name' 
                  onChange={this.handleChange}
                  />
              </div>

              <div className='last-name-item-container input-item-container'>
                <Input 
                  type='text' 
                  name={'last-name'} 
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