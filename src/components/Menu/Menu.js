import React, { useState } from 'react'
import MenuButton from '../../assets/icons/menu.svg'
import Logout from '../../assets/icons/logout.svg'
import Settings from '../../assets/icons/settings.svg'

const Menu = ({ onRouteChange }) => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <article>
            {
                showMenu ?
                <article className="menu-large" onClick={() => setShowMenu(false)}>
                    <figure className="menu-button">
                        <img src={MenuButton} alt="Menu button" className="responsive-img" />
                    </figure>
                    <div className="menu-large-icon">
                        <figure className="menu-large-figure">
                            <img src={Settings} alt="Settings" className="responsive-img" />
                        </figure>
                    </div>
                    <div className="menu-large-icon" onClick={() => onRouteChange('start')}>
                        <figure className="menu-large-figure">
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

            }
        </article>
    )
}

export default Menu
