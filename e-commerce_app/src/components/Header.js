import React from "react"
const Header = () => {

    return (
        <div className="container-fluid">

        <nav className="navbar navbar-icon-top navbar-dark navbar-padding" style={{backgroundColor: "#5cb85c"}}>
            <i className="fa-brands fa-shopify fa-2x icon"></i>
            <a className="navbar-brand title-size">

                E-Commerce
            </a>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link">
                            <i className="fa fa-cart-shopping" style={{color:"#fff"}}>
                                <span className="badge bg-info">11</span>
                            </i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    </div>
    )
}

export default Header