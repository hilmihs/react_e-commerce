import React from "react"
import { Link } from "react-router-dom"
const AddButton = () => {
    return(
        <Link to={'add'}><button class="btn btn-primary add-button">Add Ads</button></Link>
    )
}
export default AddButton