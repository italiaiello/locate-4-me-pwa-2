import React, { useState, useEffect } from 'react'
import Map from '../../components/Map/Map'
import ParkingOptions from '../../components/ParkingOptions/ParkingOptions'
import MapSplashPage from '../MapSplashPage/MapSplashPage'
import NavBar from '../../components/NavBar/NavBar'

const MapContainer = ({ onRouteChange, setOrigin, setDestination, setModeOfTransport, currentLocation, setCurrentLocation }) => {

    const [locationError, setLocationError] = useState(null)

    const [storageAddress, setStorageAddress] = useState(null)

    const [address, setAddress] = useState("")
    const [showClearSearchIcon, setShowClearSearchIcon] = useState(false)

    const [searchedLocation, setSearchedLoaction] = useState(null)
    const [showSearchedLocation, setShowSearchedLocation] = useState(false)

    useEffect(() => {

        if (currentLocation) {
            return;
        }

        const successCallback = (position) => {
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

    }, [currentLocation])

    

    const [showOrangePins, setShowOrangePins] = useState(true)
    const [showPurplePins, setShowPurplePins] = useState(true)
    const [showBluePins, setShowBluePins] = useState(true)
    const [showRedPins, setShowRedPins] = useState(true)

    // Toggles between viewing street and secure parking
    const [showSecureParking, setShowSecureParkingPins] = useState(false)

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

    const onSearch = () => {
        const addressFromStorage = JSON.parse(window.sessionStorage.getItem("address"))
        setAddress(addressFromStorage.full_address)
        setSearchedLoaction({
            address: addressFromStorage.full_address,
            lat: addressFromStorage.latitude,
            lon: addressFromStorage.longitude
        })
        setShowSearchedLocation(true)
        setStorageAddress(addressFromStorage)
    }

    return (
        <section className="map-container">
            {
                currentLocation === null ?
                <MapSplashPage />
                :
                <>
                    <NavBar 
                        onSearch={onSearch} 
                        clearAddress={clearAddress} 
                        address={address} 
                        onAddressChange={onAddressChange} 
                        showClearSearchIcon={showClearSearchIcon} 
                        onRouteChange={onRouteChange}
                        setShowSecureParkingPins={setShowSecureParkingPins}
                    />
                    {
                        locationError !== null ?
                        <Map 
                            location={defaultLocation}
                            isLocationAllowed={false}
                            storageAddress={storageAddress}
                            zoomLevel={17} 
                            showOrangePins={showOrangePins} 
                            showPurplePins={showPurplePins} 
                            showBluePins={showBluePins} 
                            showRedPins={showRedPins}
                            showSecureParking={showSecureParking}
                            setShowSecureParkingPins={setShowSecureParkingPins}
                        />
                        :
                        (
                            currentLocation !== null ?
                            <Map 
                                location={currentLocation} 
                                isLocationAllowed={true}
                                storageAddress={storageAddress}
                                zoomLevel={17} 
                                showOrangePins={showOrangePins} 
                                showPurplePins={showPurplePins} 
                                showBluePins={showBluePins} 
                                showRedPins={showRedPins} 
                                showSecureParking={showSecureParking}
                                setShowSecureParkingPins={setShowSecureParkingPins}
                            />
                            :
                            <MapSplashPage />
                        )
                    }
                    <ParkingOptions 
                        onOptionSelect={onOptionSelect}
                        onRouteChange={onRouteChange}
                        setOrigin={setOrigin}
                        setDestination={setDestination}
                        setModeOfTransport={setModeOfTransport}
                    />
                    
                </>
            }
        </section>
    )
}

export default MapContainer
