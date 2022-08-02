import React, { useState, useContext } from 'react';
import { SideBarContext } from '../SideBarContext';
import '../App.css';
import Hamburger from 'hamburger-react'
import { Sidebar, SideBarContainer, IconContainer, SideBarContent } from './Sidebar.style';
import Modalz from './Modalz';


function Sidebarz({showModal}) {

    const sideBarActive = useContext(SideBarContext);

    const [isActive, setIsActive] = useState(sideBarActive);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log(isActive);
    }

    const handleHomeClick = () => {
        console.log("home");
    }

    const handleContactClick = () => {
        showModal(true);
        setIsActive(!isActive);
    }

    return (
        // <div className="sidebar">
        //     Sidebar
        //     <FontAwesomeIcon icon={faBars} className="hamburger" onClick={handleClick} />
        // </div>
        // <Sidebar isActive={isActive}>
        //     <FontAwesomeIcon icon={faBars} className="hamburger" onClick={handleClick} />
        // </Sidebar>
        <SideBarContainer>
            {/* <FontAwesomeIcon icon={faBars} className="hamburger" onClick={handleClick} /> */}
            <h1>
                <Hamburger className="icon" toggled={isActive} toggle={setIsActive} onClick={handleClick} />
            </h1>

            <Sidebar isActive={isActive} >
                <SideBarContent isActive={isActive}>
                    <ul onClick={handleHomeClick} className="list-item">
                        Home
                    </ul>

                    <ul className="list-item">
                        About
                    </ul>

                    <ul className="list-item" onClick={handleContactClick}>
                        Contact Me
                    </ul>
                    <Modalz/>
                </SideBarContent>
            </Sidebar>
        </SideBarContainer>
    )
}
export default Sidebarz;

