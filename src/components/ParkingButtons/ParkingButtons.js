import React, { useState } from 'react'

const ParkingButtons = ({ setShowSecureParkingPins }) => {

    const [toggleStreetParking, setToggleStreetParking] = useState(true)

    const onParkingSelect = (option) => {
        if (option === 'street') {
            setToggleStreetParking(true);
        } else {
            setToggleStreetParking(false);
        }
    }



    return (
        <article className="parking-btns-container">
            <article className={`parking-btn street-parking-btn ${toggleStreetParking && 'active'}`} onClick={() => onParkingSelect('street')}>
                <p onClick={() => {setToggleStreetParking(true); setShowSecureParkingPins(false)}}>Street Parking</p>
            </article>
            <article className={`parking-btn secure-parking-btn ${!toggleStreetParking && 'active'}`} onClick={() => onParkingSelect('secure')}>
                <p onClick={() => {setToggleStreetParking(false); setShowSecureParkingPins(true)}}>Secure Parking</p>
            </article>
        </article>
    )
}

export default ParkingButtons
