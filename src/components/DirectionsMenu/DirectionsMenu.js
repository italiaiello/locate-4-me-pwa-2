import React, { useState } from 'react'
import { pins } from '../../Pins/Pins'

const DirectionsMenu = ({ onRouteChange, setOrigin, setDestination, setModeOfTransport }) => {

    const [selectedOrigin, setSelectedOrigin] = useState(null)
    const [selectedDestination, setSelectedDestination] = useState(null)
    const [selectedModeOfTransport, setSelectedModeOfTransport] = useState(null)

    const [showErrorMessage, setShowErrorMessage] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const validateDirections = () => {
        if (!selectedOrigin || !selectedDestination || !selectedModeOfTransport) {
            setErrorMessage("Please choose an option for all three parameters")
            return false
        } else if (selectedOrigin === selectedDestination) {
            setErrorMessage("Starting Point and Destination cannot match")
            return false
        }

        return true
    }

    const onSubmitOptions = () => {
        console.log(validateDirections())
        if (validateDirections()) {
            setOrigin(selectedOrigin)
            setDestination(selectedDestination)
            setModeOfTransport(selectedModeOfTransport)
            setShowErrorMessage(false)
            onRouteChange('directions')
        } else {
            setShowErrorMessage(true)
        }
    }


    return (
        <article className="directions-menu">
            <article className="directions-dropdown-container">
                <div className="directions-dropdown-and-label">
                    <label>Starting Point</label>
                    <select className="directions-dropdown" onChange={(e) => setSelectedOrigin(e.target.value)} value={selectedOrigin ? selectedOrigin : "0"}>
                        <option disabled value="0">Select Origin</option>
                        {
                            pins.map((pin, index) => (
                                <option key={index} value={`${pin.lat}, ${pin.lng}`}>{pin.address}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="directions-dropdown-and-label">
                    <label>Destination</label>
                    <select className="directions-dropdown" onChange={(e) => setSelectedDestination(e.target.value)} value={selectedDestination ? selectedDestination.address : "0"}>
                        <option disabled value="0">Selected Destination</option>
                        {
                            pins.map((pin, index) => (
                                <option key={index} value={`${pin.lat}, ${pin.lng}`}>{pin.address}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="directions-dropdown-and-label">
                    <label>Mode of Transport</label>
                    <select className="directions-dropdown" onChange={(e) => setSelectedModeOfTransport(e.target.value)} value={selectedModeOfTransport ? selectedModeOfTransport.address : "0"}>
                        <option disabled value="0">Select Transport</option>
                        <option value="DRIVING">Driving</option>
                        <option value="WALKING">Walking</option>
                        <option value="BICYCLING">Bicycling</option>
                    </select>
                </div>
            </article>
            {/* <article>
                TODO: Add individual icons for transport
            </article> */}
            <button className="directions-btn" onClick={onSubmitOptions}>Get Directions</button>
            {
                showErrorMessage &&
                <p className="directions-error">{errorMessage}</p>
            }
        </article>
    )
}

export default DirectionsMenu
