import React from "react"
import { Link } from "react-router-dom"
const AddButton = () => {
    return(
        <Link to={'add'}><button className="btn btn-primary add-button">Add Ads</button></Link>
    )
}
export default AddButton