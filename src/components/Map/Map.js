import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPinAndTooltip from '../LocationPinAndTooltip/LocationPinAndTooltip'
import { MapStyles } from './MapStyles'
import './Map.css'
import { pins } from '../../Pins/Pins'
import { getPinColor } from '../../functions/getPinColor'
import { renderPins } from '../../functions/renderPins'

const Map = ({ location, zoomLevel, showOrangePins, showPurplePins, showBluePins, showRedPins }) => {

  return (
    <section className="map">

      <div className="google-map">
        
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCmAUJKgiUiXeKCak2rE-UIqzwNFAFuPmM' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={{ styles: MapStyles }}
        >
          {
            pins.map((pin, index) => {
              const pinColor = getPinColor(pin.type)
              return (
                renderPins(pin.type, showOrangePins, showPurplePins, showBluePins, showRedPins) 
                ?
                <LocationPinAndTooltip
                  key={`pin${index}`}
                  lat={pin.lat} 
                  lng={pin.lng} 
                  type={pin.type} 
                  hours={pin.hours} 
                  days={pin.days}
                  address={pin.address}
                  pinColor={pinColor}
                  showOrangePins={showOrangePins}
                  showPurplePins={showPurplePins}
                  showBluePin={showBluePins}
                  showRedPins={showRedPins}
                />
                :
                null
              )
            })
          }
        </GoogleMapReact>
      </div>
    </section>
  )
}

export default Map