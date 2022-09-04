import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Badge from 'react-bootstrap/Badge';
const Header = () => {

    return (
        <div className="container-fluid">

            <nav className="navbar navbar-icon-top navbar-dark navbar-padding" style={{ backgroundColor: "#5cb85c" }}>
                {/* <i className="fa-solid fa-cart-shopping fa-2x margin-minus"></i> */}
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping fa-2x" style={{margin: -5}} />
                <a className="navbar-brand title-size" href="#">
                    E-Commerce
                </a>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <FontAwesomeIcon icon="fa fa-bell" style={{color: "#fff"}}>
                                {/* <span className="badge bg-info">11</span> */}
                                <Badge as bg="info">11</Badge>
                                </FontAwesomeIcon>
                        </a>
                    </li>
                </ul>
        </div>
        </nav>
    
    </div >
    )
}

export default Header