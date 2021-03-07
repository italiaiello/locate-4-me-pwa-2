import React, { useState } from 'react'
import RegisterImg from '../../assets/images/register.svg'
import { register } from '../../helpers/auth'
import Spinner from '../../assets/images/spinner.svg'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const Register = ({ onRouteChange }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [isRegistering, setIsRegistering] = useState(false)
    const [showError, setShowError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    const onFirstNameChange = e => { setFirstName(e.target.value); setShowError(false) }
    const onLastNameChange = e => { setLastName(e.target.value); setShowError(false) }
    const onEmailChange = e => { setEmail(e.target.value); setShowError(false) }
    const onPasswordChange = e => { setPassword(e.target.value); setShowError(false) }
    const onConfirmPasswordChange = e => { setConfirmPassword(e.target.value); setShowError(false) }

    const checkPasswordsMatch = () => {
        if (password === confirmPassword) {
            return true
        }

        return false
    }

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
        if (!isFormValid()) {
            setErrorMessage("Please fill in fields correctly")
            setShowError(true)
            return;

        } else if (isFormValid() && !checkPasswordsMatch()) {
            setErrorMessage("Passwords don't match")
            setShowError(true)
            return;
        }

        try {
            setIsRegistering(true)
            const response = await register(email, password);
            console.log(response)
            setIsRegistering(false)
            onRouteChange('home')
        } catch (error) {
            setErrorMessage(error.message)
            setShowError(true)
            setIsRegistering(false)
            console.log(error)
        }
    }

    return (
        <section className="ps-section space-around">
            <h2 className="form-heading">Register</h2>
            <article className="form-wrapper">
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
                    {
                        showError ? <ErrorMessage message={errorMessage} /> : null
                    }
                    {
                        isRegistering ?
                        <figure className="btn spinner-figure">
                            <img src={Spinner} alt="Spinner" className="responsive-img spinner" />
                        </figure>
                        :
                        <button className="btn ps-form-btn" onClick={onSubmitRegister}>Register</button>
                    }
                    <p className="alternate-link">Already have an account? <span onClick={() => onRouteChange('signin')}>Sign In</span></p>
                </form>
            </article>
        </section>
    )
}

export default Register
