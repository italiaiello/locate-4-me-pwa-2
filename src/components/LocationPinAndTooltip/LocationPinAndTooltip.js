import React, { useState } from 'react'
import LocationPin from '../LocationPin/LocationPin'
import Tooltip from '../Tooltip/Tooltip'

const LocationPinAndTooltip = ({ lat, lng, type, hours, days, address, pinType }) => {

    const [isTooltipVisible, setIsTooltipVisible] = useState(false)

    const toggleTooltip = () => setIsTooltipVisible(!isTooltipVisible)

    return (
        <article className="location-tooltip" onClick={toggleTooltip}>
            <LocationPin lat={lat} lng={lng} pinType={pinType} />
            {
                isTooltipVisible ?
                <Tooltip 
                    type={type} 
                    hours={hours} 
                    days={days} 
                    address={address} 
                    pinType={pinType} 
                />
                :
                null
            }
        </article>
    )
}

export default LocationPinAndTooltip
