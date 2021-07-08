import React, { useState } from 'react'
import DirectionsMenu from '../DirectionsMenu/DirectionsMenu'
import ExpandMenuArrow from '../ExpandMenuArrow/ExpandMenuArrow'
import PaidParking from '../../assets/icons/parking-meter.svg'
import HouredParking from '../../assets/icons/timed-parking.svg'
import FreeParking from '../../assets/icons/free-parking-coin.svg'
import SpotTaken from '../../assets/icons/spot-taken.svg'
import Close from '../../assets/icons/close.svg'

const ParkingOptions = ({ onOptionSelect, onRouteChange, setOrigin, setDestination, setModeOfTransport }) => {

    const [optionName, setOptionName] = useState(null)
    const [isMenuExpanded, setIsMenuExpanded] = useState(true)

    const handleOption = (e) => {
        onOptionSelect(e)
        setOptionName(e.target.dataset.name)
    }

    return (
        <section className="parking-options-container">
            {
                optionName &&
                <article className="option-name">
                    <p>{optionName}</p>
                    <figure className="close-button" onClick={() => setOptionName(null)}>
                        <img src={Close} alt="Close button" className="responsive-img" />
                    </figure>
                </article>
            }
            <article className="parking-options-arrow-container">
                <ExpandMenuArrow isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} />
            </article>
            <section className="parking-options">
                <p>Filter:</p>
                <article className="options-article">
                    <figure className="option option-selected" data-id={0} data-name={"Houred Parking"} onClick={handleOption}>
                        <img src={HouredParking} alt="Houred Parking" data-id={0} data-name={"Houred Parking"} id="houred-parking" className="responsive-img" />
                    </figure>
                    <figure className="option option-selected" data-id={1} data-name={"Paid Parking"} onClick={handleOption}>
                        <img src={PaidParking} alt="Parking Meter" data-id={1} data-name={"Paid Parking"} id="parking-meter" className="responsive-img" />
                    </figure>
                    <figure id="wings" className="option option-selected" data-id={2} data-name={"Free Parking"} onClick={handleOption}>
                        <img src={FreeParking} alt="Free Parking" data-id={2} data-name={"Free Parking"} className="responsive-img" />
                    </figure>
                    <figure id="no-spot" className="option option-selected" data-id={3} data-name={"Spot Taken"} onClick={handleOption}>
                        <img src={SpotTaken} alt="Spot Taken" data-id={3} data-name={"Spot Taken"} className="responsive-img" />
                    </figure>
                </article>
            </section>
            {
                !isMenuExpanded &&
                <DirectionsMenu 
                    onRouteChange={onRouteChange} 
                    setOrigin={setOrigin}
                    setDestination={setDestination}
                    setModeOfTransport={setModeOfTransport}
                />
            }
        </section>
    )
}

export default ParkingOptions
