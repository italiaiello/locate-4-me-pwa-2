import React, { useState } from 'react'
import Menu from '../Menu/Menu'
import ExpandMenuArrow from '../ExpandMenuArrow/ExpandMenuArrow'
import SearchBar from '../SearchBar/SearchBar'
import ParkingButtons from '../ParkingButtons/ParkingButtons'


const NavBar = ({ onSearch, clearAddress, address, onAddressChange, showClearSearchIcon, currentLocation }) => {

    const [isMenuExpanded, setIsMenuExpanded] = useState(false)
    
    

    return (
        <section className="navbar">
            {
                !isMenuExpanded ?
                <article className="navbar-header">
                    <article className="navbar-menu-greeting">
                        <Menu />   
                        <p>Good morning, James</p>
                    </article>
                    <ExpandMenuArrow isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} />
                </article>
                :
                <>
                    <article className="navbar-header">
                        <article className="navbar-menu-greeting">
                            <Menu />   
                            <p>Good morning, James</p>
                        </article>
                        <ExpandMenuArrow isMenuExpanded={isMenuExpanded} setIsMenuExpanded={setIsMenuExpanded} />
                    </article>
                    <SearchBar 
                        onSearch={onSearch} 
                        clearAddress={clearAddress} 
                        onAddressChange={onAddressChange} 
                        address={address} 
                        showClearSearchIcon={showClearSearchIcon} 
                        currentLocation={currentLocation}
                    />
                    <ParkingButtons />
                </>
            }
        </section>
    )
}

export default NavBar
