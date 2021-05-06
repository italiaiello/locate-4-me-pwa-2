import React from 'react'
import MenuArrowDown from '../../assets/icons/menu-arrow-down.svg'
import MenuArrowUp from '../../assets/icons/menu-arrow-up.svg'

const ExpandMenuArrow = ({ isMenuExpanded, setIsMenuExpanded }) => {

    return (
        <figure className="menu-arrow" onClick={() => setIsMenuExpanded(!isMenuExpanded)}>
            {
                isMenuExpanded ?
                <img src={MenuArrowUp} alt="Menu Arrow Up" className="responsive-img" />
                :
                <img src={MenuArrowDown} alt="Menu Arrow Down" className="responsive-img" />
            }
        </figure>
    )
}

export default ExpandMenuArrow
