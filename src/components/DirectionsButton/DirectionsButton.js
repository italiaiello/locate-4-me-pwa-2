import React from 'react'
import Compass from '../../assets/icons/compass.svg'
import CloseDirections from '../../assets/icons/close-directions.svg'

const DirectionsButton = ({ showDirectionsMenu, setShowDirectionsMenu }) => {

    return (
        <article className="parking-options-compass-container">
            <figure className="compass-icon" onClick={() => setShowDirectionsMenu(!showDirectionsMenu)}>
                {
                    showDirectionsMenu ?
                    <img src={CloseDirections} alt="Compass" className="responsive-img" />
                    :
                    <img src={Compass} alt="Compass" className="responsive-img" />
                }
            </figure>
        </article>
    )
}

export default DirectionsButton
