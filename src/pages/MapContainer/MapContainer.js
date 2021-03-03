import React, { useState } from 'react'
import Map from '../../components/Map/Map'
import ParkingOptions from '../../components/ParkingOptions/ParkingOptions'
import Logout from '../../assets/icons/logout.svg'

const MapContainer = ({ onRouteChange }) => {

    const [showOrangePins, setShowOrangePins] = useState(true)
    const [showPurplePins, setShowPurplePins] = useState(true)
    const [showBluePins, setShowBluePins] = useState(true)
    const [showRedPins, setShowRedPins] = useState(true)

    const location = {
        address: '1 Anderson St, Chatswood NSW 2067',
        lat: -33.7971,
        lng: 151.1836,
    }

    const onOptionSelect = (e) => {
        const options = document.getElementsByClassName('option');
        const index = e.target.dataset.id

        switch(index) {
            case '0':
                setShowOrangePins(!showOrangePins)
                break;
            case '1':
                setShowPurplePins(!showPurplePins)
                break;
            case '2':
                setShowBluePins(!showBluePins)
                break;
            case '3':
                setShowRedPins(!showRedPins)
                break;
            default:
                console.log('Invalid index')
                break;
        }

        if (options[index].classList.contains('option-selected')) {
            options[index].classList.remove('option-selected')
        } else {
            options[index].classList.add('option-selected')
        }

    }

    return (
        <section className="map-container">
            <article className="map-heading-logout-container">
                <h2 className="map-heading">Parking Spots Near You</h2>
                <div className="logout" onClick={() => onRouteChange('start')}>
                    <figure className="logout-figure">
                        <img src={Logout} alt="Log out" className="responsive-img" />
                    </figure>
                </div>
            </article>
            <Map 
                location={location} 
                zoomLevel={17} 
                showOrangePins={showOrangePins} 
                showPurplePins={showPurplePins} 
                showBluePins={showBluePins} 
                showRedPins={showRedPins} 
            />
            <ParkingOptions 
                onOptionSelect={onOptionSelect} 
                setShowOrangePins={setShowOrangePins}
                setShowPurplePins={setShowPurplePins}
                setShowBluePins={setShowBluePins}
                setShowRedPins={setShowRedPins}
            />
        </section>
    )
}

export default MapContainer
