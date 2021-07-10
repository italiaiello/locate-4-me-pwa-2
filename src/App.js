import React, { useState, useEffect } from 'react'
import MapContainer from './pages/MapContainer/MapContainer';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import StartScreen from './pages/StartScreen/StartScreen';
import ParkingDirections from './pages/ParkingDirections/ParkingDirections';
import AddToHomescreen from 'react-add-to-homescreen';
import './App.css';
import { handleAddToHomeScreen } from './functions/handleAddToHomeScreen';
import Logo from "./assets/images/logo192.png";
import { pins } from './Pins/Pins'
import { db } from './services/firebase'

function App() {
  const [route, setRoute] = useState('start')
  const [value1, setValue1] = useState(0)

  // Grabs the selections for directions
  const [origin, setOrigin] = useState(null)
  const [destination, setDestination] = useState(null)
  const [modeOfTransport, setModeOfTransport] = useState(null)

  const [currentLocation, setCurrentLocation] = useState(null)

  const onRouteChange = (newRoute) => setRoute(newRoute) 
  
  useEffect(() => {
    const getValue = db.ref("sensor1");
    getValue.on("value", snapshot => {
      let value = snapshot.val();
      if(value == 1){
        pins[0] = {
          lat: -33.7971,
            lng: 151.1836,
            type: 'Spot Taken',
            hours: 'N/A',
            days: 'N/A',
            address: '1 Anderson St, Chatswood NSW 2067',
      }
      }
      else if(value == 0){
        pins[0] = {
          lat: -33.7971,
            lng: 151.1836,
            type: 'Free Parking',
            hours: 'All day',
            days: 'Every day',
            address: '1 Anderson St, Chatswood NSW 2067',
      }
      }
      setValue1(value)
    });
  }, []);

  const loadPage = () => {
    switch(route) {
      case 'start':
        return <StartScreen onRouteChange={onRouteChange} />
      case 'register':
        return <Register onRouteChange={onRouteChange} />
      case 'signin':
        return <SignIn onRouteChange={onRouteChange} />
      case 'home':
        return <MapContainer 
          onRouteChange={onRouteChange} 
          value1={value1}  
          setOrigin={setOrigin}
          setDestination={setDestination}
          setModeOfTransport={setModeOfTransport}
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
      />
      case 'directions':
        return <ParkingDirections onRouteChange={onRouteChange} origin={origin} destination={destination} modeOfTransport={modeOfTransport} />
      default:
        return <>Invalid route</>
    }
  }


  return (
    <div id="scrollDiv" className="App">
        {
          loadPage()
        }
        <AddToHomescreen icon={Logo} onAddToHomescreenClick={handleAddToHomeScreen} />    
    </div>    
  );
}

export default App;