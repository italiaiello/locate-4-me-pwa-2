import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import userLocationIcon from '../../assets/icons/location.svg'

const LocationPin = ({ text, pinType }) => (
    <div className="pin">
        {
            pinType === "location" ?
            <figure className="location-pin">
                <img src={userLocationIcon} id="responsive-location-pin" />
            </figure>
            :
            <Icon icon={locationIcon} className={`pin-icon ${pinType}-pin`} />
        }
        <p className="pin-text">{text}</p>
    </div>
)

export default LocationPin