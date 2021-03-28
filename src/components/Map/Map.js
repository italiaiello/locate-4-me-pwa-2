import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPinAndTooltip from '../LocationPinAndTooltip/LocationPinAndTooltip'
import { MapStyles } from './MapStyles'
import './Map.css'
import { pins } from '../../Pins/Pins'
import { getPinColor } from '../../functions/getPinColor'
import { renderPins } from '../../functions/renderPins'

const Map = ({ location, isLocationAllowed, storageAddress, zoomLevel, showOrangePins, showPurplePins, showBluePins, showRedPins }) => {

  const [searchedLocation, setSearchedLoaction] = useState(null)

  useEffect(() => {
    if (storageAddress) {
      setSearchedLoaction({
        address: storageAddress.full_address,
        lat: storageAddress.lat,
        lon: storageAddress.lon
      })
    }
  }, [storageAddress])

  return (
    <section className="map">
      <div className="google-map">
        {
          searchedLocation ?
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
            {
              isLocationAllowed ?
              <LocationPinAndTooltip
                lat={location.lat} 
                lng={location.lng} 
                type={"Home"} 
                hours={"N/A"} 
                days={"N/A"}
                address={"Your Current Location"}
                pinColor={"blue"}
                showOrangePins={showOrangePins}
                showPurplePins={showPurplePins}
                showBluePin={showBluePins}
                showRedPins={showRedPins}
              />
              :
              null
            }
            {
              storageAddress !== null &&
              <LocationPinAndTooltip
                lat={storageAddress.latitude} 
                lng={storageAddress.longitude} 
                type={"Home"} 
                hours={"N/A"} 
                days={"N/A"}
                address={storageAddress.full_address}
                pinColor={"blue"}
                showOrangePins={showOrangePins}
                showPurplePins={showPurplePins}
                showBluePin={showBluePins}
                showRedPins={showRedPins}
              />
            }
          </GoogleMapReact>
          :
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
            {
              isLocationAllowed ?
              <LocationPinAndTooltip
                lat={location.lat} 
                lng={location.lng} 
                type={"Home"} 
                hours={"N/A"} 
                days={"N/A"}
                address={"Your Current Location"}
                pinColor={"blue"}
                showOrangePins={showOrangePins}
                showPurplePins={showPurplePins}
                showBluePin={showBluePins}
                showRedPins={showRedPins}
              />
              :
              null
            }
            {
              storageAddress !== null &&
              <LocationPinAndTooltip
                lat={storageAddress.latitude} 
                lng={storageAddress.longitude} 
                type={"Searched Location"} 
                hours={"N/A"} 
                days={"N/A"}
                address={storageAddress.full_address}
                pinColor={"blue"}
                showOrangePins={showOrangePins}
                showPurplePins={showPurplePins}
                showBluePin={showBluePins}
                showRedPins={showRedPins}
              />
            }
          </GoogleMapReact>
        }

      </div>
    </section>
  )
}

export default Map