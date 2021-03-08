import React from 'react'
import LoadingLocation from '../../assets/images/loading-location.svg'
import LocationSpinner from '../../assets/images/location-spinner.svg'

const MapSplashPage = () => {
    return (
        <article className="splash-page">
            <figure className="splash-page-image">
                <img src={LoadingLocation} alt="Loading Location" className="responsive-img" />
            </figure>
            <figure className="splash-page-spinner">
                <img src={LocationSpinner} alt="Spinner" className="responsive-img" />
            </figure>
            <p className="splash-page-message">Searching for nearby parking spots...</p>
        </article>
    )
}

export default MapSplashPage
