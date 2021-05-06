import React, { useState } from 'react'
import MenuButton from '../../assets/icons/menu.svg'
import Logout from '../../assets/icons/logout.svg'

const Menu = ({ onRouteChange }) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <article>
            <article className="menu" onClick={() => setShowMenu(true)}>
                <figure className="menu-button">
                    <img src={MenuButton} alt="Menu button" className="responsive-img" />
                </figure>
            </article>
            {/* {
                showMenu ?
                <article className="menu-large" onClick={() => setShowMenu(false)}>
                    <figure className="menu-button">
                        <img src={MenuButton} alt="Menu button" className="responsive-img" />
                    </figure>
                    <div className="logout" onClick={() => onRouteChange('start')}>
                        <figure className="logout-figure">
                            <img src={Logout} alt="Log out" className="responsive-img" />
                        </figure>
                    </div>
                </article>
                :
                <article className="menu" onClick={() => setShowMenu(true)}>
                    <figure className="menu-button">
                        <img src={MenuButton} alt="Menu button" className="responsive-img" />
                    </figure>
                </article>

            } */}
        </article>
    )
}

export default Menu
