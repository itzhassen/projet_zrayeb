import { faFaceLaughWink, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/portal/dashboard">
              
                <div className="sidebar-brand-text mx-3">Zrayeb Djerba</div>
            </a>

            <hr className="sidebar-divider my-0" />
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>Tableau de Bord</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Adhérents</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Les Nouvelles</span>
                </Link>
            </li>

        </ul>
    )
}

export default Sidebar