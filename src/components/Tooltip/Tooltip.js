import React from 'react'

const Tooltip = ({ type, hours, days, address, pinType }) => {

    return (
        <article className={`tooltip ${pinType}`}>
            <p><strong>Type:</strong> {type}</p>
            <p><strong>Hours:</strong> {hours}</p>
            <p><strong>Days:</strong> {days}</p>
            <p><strong>Address:</strong> {address}</p>
        </article>
    )
}

export default Tooltip
