import React from 'react'

const ErrorMessage = ({ message }) => {
    return (
        <article className="error-message-container">
            <p className="error-message">{message}</p>
        </article>
    )
}

export default ErrorMessage
