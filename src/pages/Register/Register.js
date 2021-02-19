import React, { useState } from 'react'
import RegisterImg from '../../assets/images/register.svg'
import { register } from '../../helpers/auth'

const Register = ({ onRouteChange }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const onFirstNameChange = e => setFirstName(e.target.value)
    const onLastNameChange = e => setLastName(e.target.value)
    const onEmailChange = e => setEmail(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)
    const onConfirmPasswordChange = e => setConfirmPassword(e.target.value)

    const isFormValid = () => {
        if (!firstName.trim().length || !lastName.trim().length ||
            !email.trim().length || !password.trim().length ||
            !confirmPassword.trim().length) {
                return false;
            }
        
        return true
    }

    const onSubmitRegister =  async (e) => {
        e.preventDefault();
        if (!isFormValid) {
            console.log('Invalid form')
            return;
        }
        try {
          const response = await register(email, password);
          console.log(response)
          onRouteChange('home')
        } catch (error) {
          console.log(error)
        }
    }

    return (
        <section className="ps-section space-around">
            <h2 className="form-heading">Register</h2>
            <figure className="form-img">
                <img src={RegisterImg} alt="Undraw Illustration" className="responsive-img" />
            </figure>
            <form className="ps-form">
                <article className="small-input-container">
                    <input className="form-field small-input" placeholder="First Name" onChange={onFirstNameChange} />
                    <input className="form-field small-input" placeholder="Last Name" onChange={onLastNameChange} />
                </article>
                <input className="form-field" placeholder="Email" onChange={onEmailChange} />
                <input className="form-field" placeholder="Password" type="password" onChange={onPasswordChange} />
                <input className="form-field" placeholder="Confirm Password" type="password" onChange={onConfirmPasswordChange} />
                <button className="btn ps-form-btn" onClick={onSubmitRegister}>Register</button>
                <p className="alternate-link">Already have an account? <span onClick={() => onRouteChange('signin')}>Sign In</span></p>
            </form>
        </section>
    )
}

export default Register