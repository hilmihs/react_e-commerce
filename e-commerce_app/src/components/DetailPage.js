import React, {useState} from "react"
import Header from "./Header"
import { useLocation } from "react-router-dom"
import { NumericFormat } from 'react-number-format';
const DetailPage = () => {
    const [viewDetail, setViewDetail] = useState(true)
    const location = useLocation();
if (viewDetail) {
 return (
        <div>
          <div>
            <Header />
            <div className="row-detail box-size">
        <div className="column-detail-left">
            <img className="photo-detail" src="../pictures/macbook.jpeg" alt="Card cap" />
        </div>
        <div className="column-detail-right">
            <div className="column">
                <h2>{location.state.brand}</h2>
                <div className="align-detail">
                    <p className="brand-text">Brand {location.state.title} ·</p>
                    <p className="votes">({location.state.vote ? location.state.vote : 0} votes)</p>
                </div>
                <p className="price">PRICE</p>
                <h2 className="price-number">
                    <NumericFormat value={location.state.price} displayType={'text'} thousandSeparator={true} prefix={'Rp'} />
                </h2>
            </div>
            <div className="column grey">
                <div>
                    <label htmlFor="quantity" className="price">QTY</label>
                    <div className="quantity buttons_added">

                        {/* <input type="button" value="-" className="minus" />
                        <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty"
                            className="input-text qty text" size="4" pattern="" inputMode="" />
                        <input type="button" value="+" className="plus" /> */}
                         <input type="button"  className="minus" />
                        <input type="number" step="1" min="1" max="" name="quantity" title="Qty"
                            className="input-text qty text" size="4" pattern="" inputMode="" />
                        <input type="button"  className="plus" />
                    </div>
                </div>
                <button className="buy-button"><i className="fa-solid fa-cart-shopping cart-shopping"></i> Buy</button>
                <p className="votes"> <i className="fa-solid fa-heart"></i> Like</p>
            </div>
            </div>
        </div>
        <div className="flex">
            <a className="column-flex" href="detail">Product </a>
            <a className="column-flex" href="detail">Testimonial</a>
        </div>
        <hr/>
       <p>{location.state.detail_product}</p>
       <ul className="detail-list">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
      </div >
    )

}
   
}

export default DetailPage