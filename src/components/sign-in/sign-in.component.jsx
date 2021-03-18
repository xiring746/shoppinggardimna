import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends React.Component{
          constructor(props){
                 super(props);
                 this.state = {
                           email: '',
                           password: ''
                 }
          }
          handleSubmit = (e) => {
                     e.preventDefault();
                     this.setState({ email:'', password:'' })
          }
          handleChange = (e) => {
                                 const { value, name } = e.target
                                 this.setState({ [name]: value })

          }
          render(){
                   return(
                          <div className="sign-in">
                             <h2>I already have an accouunt</h2>
                             <span>Sign in with your email and password</span>
                             <form onSubmit={this.handleSubmit}>
                                  <FormInput name="email" type="email" label="email" handleChange={this.handleChange} value={this.state.email} required />
                                  <FormInput name="password" type="password" label="password" handleChange={this.handleChange} value={this.state.password} required />
                                  <CustomButton type="submit">Sign In</CustomButton>
                                  <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
                             </form>
                          </div> 
                   )
          }
}
export default SignIn