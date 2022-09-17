import React from "react"
import Header from "./Header"
export default function AddPage () {
    return(
        <div>
     <Header/>

    <div className="card mt-5 blue-border">
        <div className="card-header add-table blue-border">
            Add Ads
        </div>
        <div className="card-body">
            <div className="container">
            <div className="mb-3 row">
                <label for="title" className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="title" id="title" placeholder="Title" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="rate" className="col-sm-2 col-form-label">Rate</label>
                <div className="col-sm-10">
                <select className="form-control arrows" name="rate" id="rate">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="description" className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                    <textarea type="text" className="form-control" name="description" id="description" placeholder="Description" rows="3"></textarea>
                </div>
            </div>
            <div className="mb-3 row">
                <label for="price" className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="price" id="price" placeholder="Price" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="brand" className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="brand" id="brand" placeholder="Brand" />
                </div>
            </div>
            <div className="mb-3 row">
                <label for="detailProduct" className="col-sm-2 col-form-label">Detail Product</label>
                <div className="col-sm-10">
                    <textarea type="text" className="form-control" name="detailProduct" id="detailProduct" rows="10" placeholder="Detail Product"></textarea>
                </div>
            </div>
            <div className="button-below">
                <button className="btn light-green ">Add</button>
                <button className="btn orange ">Cancel</button>
            </div>
        </div>
        </div>

    </div>
    </div>
    )
}