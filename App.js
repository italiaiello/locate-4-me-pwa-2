import React, { useState } from 'react'
import MapContainer from './pages/MapContainer/MapContainer';
import Register from './pages/Register/Register';
import SignIn from './pages/SignIn/SignIn';
import StartScreen from './pages/StartScreen/StartScreen';
import './App.css';

function App() {

  const [route, setRoute] = useState('home')

  const onRouteChange = (newRoute) => setRoute(newRoute)

  const loadPage = () => {
    switch(route) {
      case 'start':
        return <StartScreen onRouteChange={onRouteChange} />
      case 'register':
        return <Register onRouteChange={onRouteChange} />
      case 'signin':
        return <SignIn onRouteChange={onRouteChange} />
      case 'home':
        return <MapContainer />
      default:
        return <>Invalid route</>
    }
  }


  return (
    <div id="scrollDiv" className="App">
        {
          loadPage()
        }
    </div>
  );
}

export default App;
