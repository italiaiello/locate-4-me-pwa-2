import React, { useState } from 'react'
import SignInImg from '../../assets/images/signin.svg'
import { signin } from '../../helpers/auth'
import Spinner from '../../assets/images/spinner.svg'

const SignIn = ({ onRouteChange }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [isSigningIn, setIsSigningIn] = useState(false)


    const onEmailChange = e => setEmail(e.target.value)
    const onPasswordChange = e => setPassword(e.target.value)

    const isFormValid = () => {
        if (!email.trim().length || !password.trim().length) {
            return false;
        }
        
        return true
    }

    const onSubmitSignin =  async (e) => {
        e.preventDefault();
        if (!isFormValid) {
            console.log('Invalid form')
            return;
        }
        try {
            setIsSigningIn(true)
            const response = await signin(email, password);
            console.log(response)
            onRouteChange('home')
            setIsSigningIn(false)
        } catch (error) {
            setIsSigningIn(false)
            console.log(error)
        }
    }

    return (
        <section className="ps-section space-around">
            <h2 className="form-heading">Sign In</h2>
            <article className="form-wrapper">
                <figure className="form-img">
                    <img src={SignInImg} alt="Undraw Illustration" className="responsive-img" />
                </figure>
                <form className="ps-form">
                    <input className="form-field" placeholder="Email" onChange={onEmailChange} />
                    <input className="form-field" placeholder="Password" type="password" onChange={onPasswordChange} />
                    {
                        isSigningIn ?
                        <figure className="btn spinner-figure">
                            <img src={Spinner} alt="Spinner" className="responsive-img spinner" />
                        </figure>
                        :
                        <button className="btn ps-form-btn" onClick={onSubmitSignin}>Sign In</button>
                    }
                    <p className="alternate-link">Don't have an account? <span onClick={() => onRouteChange('register')}>Register</span></p>
                </form>
            </article>
        </section>
    )
}

export default SignIn
