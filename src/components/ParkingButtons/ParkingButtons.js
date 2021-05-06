import React, { useState } from 'react'

const ParkingButtons = () => {

    const [showStreetParking, setShowStreetParking] = useState(true)
    const [showSecureParking, setShowSecureParking] = useState(false)

    const onParkingSelect = (option) => {
        if (option === 'street') {
            setShowStreetParking(true);
            setShowSecureParking(false)
        } else {
            setShowSecureParking(true)
            setShowStreetParking(false);
        }
    }



    return (
        <article className="parking-btns-container">
            <article className={`parking-btn street-parking-btn ${showStreetParking && 'active'}`} onClick={() => onParkingSelect('street')}>
                <p onClick={() => setShowStreetParking(!showStreetParking)}>Street Parking</p>
            </article>
            <article className={`parking-btn secure-parking-btn ${showSecureParking && 'active'}`} onClick={() => onParkingSelect('secure')}>
                <p onClick={() => setShowStreetParking(!showSecureParking)}>Secure Parking</p>
            </article>
        </article>
    )
}

export default ParkingButtons
