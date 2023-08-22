import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaDollarSign,
    FaCogs,
    FaAngleDown,
    FaAngleUp
} from "react-icons/fa";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);
    const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/ Utilisateurs",
            name: "Utilisateurs",
            icon: <FaUserAlt />
        },
        {
            path: "/ Cotisations",
            name: "Cotisations",
            icon: <FaDollarSign />
        },
        {
            path: "/ Parametres",
            name: "Parametres",
            icon: isSubMenuOpen ? <FaAngleUp /> : <FaAngleDown />
        },
    ];

    const subMenuItems = [
        {
            path: "/Generaux",
            name: "Paramétres Généraux"
        },
        {
            path: "/Utilisateur",
            name: "Utilisateurs"
        },
        {
            path: "/Archives",
            name: "Archives"
        },
        {
            path: "/Bloques",
            name: "Membres Bloqués"
        },

        // Ajoutez d'autres éléments de sous-menu ici
    ];

    return (
        <div className='backcont'>
        <div className="container">
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h2 style={{ display: isOpen ? "flex" : "none", alignItems: "center", justifyContent: "center" }} className="logo">
                   
                   
                        <span style={{ marginLeft: "5px" }}>Bakeli</span>
                        <span style={{ marginLeft: "5px", marginRight: "", fontSize: "" }}>tontine</span>
                    </h2>
                    <div className='bars' onClick={toggleSidebar}>
   <FaBars />
</div>

                </div>
                {
    menuItem.map((item, index) => (
        <div key={index}>
            {item.name === "Parametres" ? (
                <div className="link" onClick={toggleSubMenu}>
                    <div className="icon">
                        <FaCogs />
                    </div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                        {item.name}
                        <span className="arrow-icon">{isSubMenuOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                    </div>
                </div>
            ) : (
                <NavLink
                    to={item.path}
                    className="link"
                    activeClassName="active"
                    style={{ textDecoration: "none" }}
                >
                    <div className="icon">{item.icon}</div>
                    <div style={{ display: isOpen ? "block" : "none" }} className="link_text">
                        {item.name}
                    </div>
                </NavLink>
            )}

            {item.name === "Parametres" && isSubMenuOpen && (
                <div style={{ display: isOpen ? "block" : "none" }} className="sub_menu">
                    {subMenuItems.map((subItem, subIndex) => (
                        <NavLink
                            to={subItem.path}
                            key={subIndex}
                            className="sub_link"
                            activeClassName="active"
                            style={{ textDecoration: "none" }}
                        >
                            <div>
                                {subItem.name}
                            </div>
                        </NavLink>
                    ))}
                </div>
            )}
        </div>
    ))
}





            </div>
            <main>{children}</main>
        </div>
        </div>
    
    );
};

export default Sidebar;
