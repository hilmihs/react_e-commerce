
import React from "react"
import { Link } from "react-router-dom"
export default function ItemList() {
    return (
        <div className="row">
        <div className="card card-product">
            <img className="card-img-top widthSet heightSet" src="../pictures/macbook.jpeg" alt='img'/>
            <div className="card-body">
                <h5 className="card-title">Macbook AIR</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p className="card-text">Beli Macbook Air M1 di E-Commerce ✓ Cicilan 0% ✓ Cashback ✓ Bebas Ongkir ✓ Laptop
                    Apple
                    dengan Chip Apple M1.</p>
                <h3>Rp13.399.999,-</h3>
            </div>
            <div className="card-footer text-muted right-side">
            <Link to={'detail'}>
                <button className="btn btn-primary light-green ">DETAIL ITEM</button>
                </Link>
            </div>
        </div>
        <div className="card card-product">
            <img className="card-img-top widthSet heightSet" src="../pictures/macbook.jpeg" alt='img' />
            <div className="card-body">
                <h5 className="card-title">Macbook AIR</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p className="card-text">Beli Macbook Air M1 di E-Commerce ✓ Cicilan 0% ✓ Cashback ✓ Bebas Ongkir ✓ Laptop
                    Apple
                    dengan Chip Apple M1.</p>
                <h3>Rp13.399.999,-</h3>
            </div>
            <div className="card-footer text-muted right-side">
            <Link to={'detail'}>
                <button className="btn btn-primary light-green ">DETAIL ITEM</button>
                </Link>
            </div>
        </div>
        <div className="card card-product">
            <img className="card-img-top widthSet heightSet" src="../pictures/macbook.jpeg" alt='img' />
            <div className="card-body">
                <h5 className="card-title">Macbook AIR</h5>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <p className="card-text">Beli Macbook Air M1 di E-Commerce ✓ Cicilan 0% ✓ Cashback ✓ Bebas Ongkir ✓ Laptop
                    Apple
                    dengan Chip Apple M1.</p>
                <h3>Rp13.399.999,-</h3>
            </div>
            <div className="card-footer text-muted right-side">
                <Link to={'detail'}>
                <button className="btn btn-primary light-green ">DETAIL ITEM</button>
                </Link>
                
            </div>
        </div>
    </div>
    )
}