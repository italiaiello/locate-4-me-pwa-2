import React, { useEffect } from 'react'
import Close from '../../assets/icons/close.svg'
import Search from '../../assets/icons/search.svg'

const SearchBar = ({ onSearch, clearAddress, address, onAddressChange, showClearSearchIcon, currentLocation }) => {

    // Triggering event for addressfinder to work

    useEffect(() => {
        if (currentLocation !== null) {
            const DOMContentLoaded_event = document.createEvent("Event")
            DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true)
            window.document.dispatchEvent(DOMContentLoaded_event)
        }
      }, [currentLocation])

    return (
        <div className="address-bar-and-search-button" data-address={"Nothing"}>
            <div className="address-bar-container">
                <input id="addressBar" type="text" className="address-bar" placeholder="Search address..." value={address} onChange={onAddressChange} />
                {
                    showClearSearchIcon &&
                    <figure className="clear-search-button" onClick={clearAddress}>
                        <img src={Close} alt="Clear search bar" className="responsive-img" />
                    </figure>
                }
            </div>
            <figure className="search-button" onClick={onSearch}>
                <img src={Search} alt="Search" className="responsive-img" />
            </figure>
        </div>
    )
}

export default SearchBar
