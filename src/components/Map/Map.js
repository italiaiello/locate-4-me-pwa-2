import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPinAndTooltip from '../LocationPinAndTooltip/LocationPinAndTooltip'
import { MapStyles } from './MapStyles'
import './Map.css'
import { pins } from '../../Pins/Pins'
import { newpins } from '../../Pins/NewPins'
import { getPin } from '../../functions/getPin'
import { renderPins } from '../../functions/renderPins'

const Map = ({ location, isLocationAllowed, storageAddress, zoomLevel, showOrangePins, showPurplePins, showBluePins, showRedPins, showSecureParking }) => {

  const [searchedLocation, setSearchedLoaction] = useState(null)

  const google = window.google;

  useEffect(() => {
    if (storageAddress) {
      setSearchedLoaction({
        address: storageAddress.full_address,
        lat: storageAddress.lat,
        lon: storageAddress.lon
      })
    }
  }, [storageAddress])

  const [newPins, setNewPins] = useState([])
  
  useEffect(() => {
    if (showSecureParking) {
      setNewPins(newpins)
    } else {
      setNewPins(pins)
    }
  }, [showSecureParking])

  console.log(newPins)

  // useEffect(() => {
  //   if (google) {
  //     const directionsRenderer = new google.maps.DirectionsRenderer();
  //     const directionsService = new google.maps.DirectionsService();
  //     const map = new google.maps.Map(document.getElementById("map"), {
  //       zoom: 14,
  //       center: { lat: 37.77, lng: -122.447 },
  //     });
  //     directionsRenderer.setMap(map);
  //     calculateAndDisplayRoute(directionsService, directionsRenderer)
  //   }
  // }, [google])

  // const calculateAndDisplayRoute = (directionsService, directionsRenderer) => {
  //   directionsService
  //   .route({
  //     origin: "-33.7971, 151.1836",
  //     destination: "-33.7927011, 151.1853129",
  //     travelMode: google.maps.TravelMode.DRIVING,
  //   })
  //   .then((response) => {
  //     directionsRenderer.setDirections(response);
  //   })
  //   .catch((err) => window.alert("Directions request failed due to " + err.status));
  // }

  return (
    <section className="map">
      <div id="map" className="google-map">
        {
          searchedLocation ?
          <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCmAUJKgiUiXeKCak2rE-UIqzwNFAFuPmM' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={{ styles: MapStyles }}
          >
            {     
              newPins.map((pin, index) => {
                const pinType = getPin(pin.type)
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
                  pinType={pinType}
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
                pinType={"blue"}
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
                pinType={"blue"}
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

              newPins.map((pin, index) => {
                const pinType = getPin(pin.type)
                return (
                  renderPins(pin.type, showOrangePins, showPurplePins, showBluePins, showRedPins) 
                  &&
                  <LocationPinAndTooltip
                    key={`pin${index}`}
                    lat={pin.lat} 
                    lng={pin.lng} 
                    type={pin.type} 
                    hours={pin.hours} 
                    days={pin.days}
                    address={pin.address}
                    pinType={pinType}
                  />
                )
              })
            }
            {
              isLocationAllowed &&
              <LocationPinAndTooltip
                lat={location.lat} 
                lng={location.lng} 
                type={"Home"} 
                hours={"N/A"} 
                days={"N/A"}
                address={"Your Current Location"}
                pinType={"location"}
              />
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
                pinType={"blue"}
              />
            }
          </GoogleMapReact>
        }

      </div>
    </section>
  )
}

export default Map