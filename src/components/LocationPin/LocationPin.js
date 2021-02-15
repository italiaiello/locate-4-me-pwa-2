import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text, pinColor }) => (
    <div className="pin">
        <Icon icon={locationIcon} className={`pin-icon ${pinColor}-pin`} />
        <p className="pin-text">{text}</p>
    </div>
)

export default LocationPin