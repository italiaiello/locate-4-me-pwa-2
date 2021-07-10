import React, { useEffect } from 'react'

const ParkingDirections = ({ onRouteChange, origin, destination, modeOfTransport }) => {

    const google = window.google;

    useEffect(() => {
        if (google) {
            const directionsRenderer = new google.maps.DirectionsRenderer();
            const directionsService = new google.maps.DirectionsService();
            const map = new google.maps.Map(document.getElementById("parking-map"), {
            zoom: 14,
            center: { lat: 37.77, lng: -122.447 },
            });
            directionsRenderer.setMap(map);
            calculateAndDisplayRoute(directionsService, directionsRenderer)
        }
    }, [google])

    const calculateAndDisplayRoute = (directionsService, directionsRenderer) => {
        directionsService
        .route({
            origin: `${origin}`,
            destination: `${destination}`,
            travelMode: google.maps.TravelMode[modeOfTransport],
        })
        .then((response) => {
            directionsRenderer.setDirections(response);
        })
        .catch((err) => window.alert("Directions request failed due to " + err.status));
    }


    return (
        <section className="parking-directions">
            <button className="back-btn" onClick={() => onRouteChange('home')}>Back</button>
            <section id="parking-map" className="google-map"></section>
        </section>
    )
}

export default ParkingDirections
