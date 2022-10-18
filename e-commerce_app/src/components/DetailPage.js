import React from "react"
import Header from "./Header"
const DetailPage = () => {
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
                <h2>Macbook Air M1 14' Inch</h2>
                <div className="align-detail">
                    <p className="brand-text">Brand Apple ·</p>
                    <p className="votes">(3030 votes)</p>
                </div>
                <p className="price">PRICE</p>
                <h2 className="price-number">Rp13.990.000,-</h2>
            </div>
            <div className="column grey">
                <div>
                    <label for="quantity" className="price">QTY</label>
                    <div className="quantity buttons_added">

                        <input type="button" value="-" className="minus" />
                        <input type="number" step="1" min="1" max="" name="quantity" value="1" title="Qty"
                            className="input-text qty text" size="4" pattern="" inputmode="" />
                        <input type="button" value="+" className="plus" />
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
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
       <ul className="detail-list">
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
      </div >
    )
}

export default DetailPage