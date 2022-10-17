import React from "react"
import { Link } from "react-router-dom"
const Header = () => {

    return (
        <div className="container-fluid no-padding">

        <nav className="navbar navbar-icon-top navbar-dark navbar-color">
        <Link to={'/'}>
            <i className="fa-brands fa-shopify fa-2x icon"></i>
            </Link>
            <p className="navbar-brand title-size" >
                E-Commerce
            </p>
            
            <div>
            <Link to={'cart'}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-link">
                            <i className="fa fa-cart-shopping" style={{color:"#fff" }}>
                                <span className="badge bg-info">11</span>
                            </i>
                            
                        </div>
                    </li>
                </ul>
                </Link>
            </div>
            
        </nav>

    </div>
    )
}

export default Header