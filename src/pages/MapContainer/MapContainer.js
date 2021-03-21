import React, { useState, useEffect } from 'react'
import Map from '../../components/Map/Map'
import ParkingOptions from '../../components/ParkingOptions/ParkingOptions'
import Logout from '../../assets/icons/logout.svg'
import MapSplashPage from '../MapSplashPage/MapSplashPage'
import Close from '../../assets/icons/close.svg'

const MapContainer = ({ onRouteChange }) => {

    const [currentLocation, setCurrentLocation] = useState(null)
    const [locationError, setLocationError] = useState(null)

    const [address, setAddress] = useState("")
    const [showClearSearchIcon, setShowClearSearchIcon] = useState(false)

    useEffect(() => {
        const successCallback = (position) => {
            console.log(position)
            setCurrentLocation({
                address: "Your Current Location",
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })
        }

        const errorCallback = (error) => {
            setLocationError(error.message)
            setCurrentLocation("none")
            console.error(error)
        }

        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
            timeout: 5000
        })

    }, [])

    // Triggering event for addressfinder to work

    useEffect(() => {
        if (currentLocation !== null) {
            const DOMContentLoaded_event = document.createEvent("Event")
            DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true)
            window.document.dispatchEvent(DOMContentLoaded_event)
        }
      }, [currentLocation])

    const [showOrangePins, setShowOrangePins] = useState(true)
    const [showPurplePins, setShowPurplePins] = useState(true)
    const [showBluePins, setShowBluePins] = useState(true)
    const [showRedPins, setShowRedPins] = useState(true)

    // If user denies access to location, or an error occurs, the map can fallback on this location
    const defaultLocation = {
        address: '1 Anderson St, Chatswood NSW 2067',
        lat: -33.7971,
        lng: 151.1836,
    }

    const onAddressChange = (e) => {
        setAddress(e.target.value)
        if (address.length) {
            setShowClearSearchIcon(true)
        } else {
            setShowClearSearchIcon(false)
        }
    }

    const clearAddress = () => {
        setAddress("")
        setShowClearSearchIcon(false)
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
            {
                currentLocation === null ?
                <MapSplashPage />
                :
                <>
                    <article className="map-heading-logout-container">
                        <h2 className="map-heading">Parking Spots Near You</h2>
                        <div className="address-bar-container" data-address={"Nothning"}>
                            <input id="addressBar" type="text" className="address-bar" placeholder="Search address..." value={address} onChange={onAddressChange} />
                            {
                                showClearSearchIcon &&
                                <figure className="clear-search-button" onClick={clearAddress}>
                                    <img src={Close} alt="Clear search bar" className="responsive-img" />
                                </figure>
                            }
                        </div>
                        <div className="logout" onClick={() => onRouteChange('start')}>
                            <figure className="logout-figure">
                                <img src={Logout} alt="Log out" className="responsive-img" />
                            </figure>
                        </div>
                    </article>
                    {
                        locationError !== null ?
                        <Map 
                            location={defaultLocation}
                            isLocationAllowed={false}
                            zoomLevel={17} 
                            showOrangePins={showOrangePins} 
                            showPurplePins={showPurplePins} 
                            showBluePins={showBluePins} 
                            showRedPins={showRedPins} 
                        />
                        :
                        (
                            currentLocation !== null ?
                            <Map 
                                location={currentLocation} 
                                isLocationAllowed={true}
                                zoomLevel={17} 
                                showOrangePins={showOrangePins} 
                                showPurplePins={showPurplePins} 
                                showBluePins={showBluePins} 
                                showRedPins={showRedPins} 
                            />
                            :
                            <MapSplashPage />
                        )
                    }
                    <ParkingOptions 
                        onOptionSelect={onOptionSelect} 
                        setShowOrangePins={setShowOrangePins}
                        setShowPurplePins={setShowPurplePins}
                        setShowBluePins={setShowBluePins}
                        setShowRedPins={setShowRedPins}
                    />
                </>
            }
        </section>
    )
}

export default MapContainer
