import React from 'react'
import StartScreenImg from '../../assets/images/start-screen.svg'

const StartScreen = ({ onRouteChange }) => {
    return (
        <section className="ps-section space-around">
            <article className="start-screen-text-container">
                <p className="author-text">JP Designs</p>
                <article className="logo-text-container">
                    <h1 className="logo-text"><span className="first-span">Locate</span>4<span className="second-span">Me</span></h1>
                    <p className="logo-sub-text">Street Parking Space Locator</p>
                </article>
            </article>
            <figure className="start-screen-img">
                <img src={StartScreenImg} alt="Undraw illustration" className="responsive-img" />
            </figure>
            <button className="btn start-btn" onClick={() => onRouteChange('signin')}>Start</button>
        </section>
    )
}

export default StartScreen
