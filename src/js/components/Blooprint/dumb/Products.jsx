import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    return(
        <Link to={'/listing'} className="blooprint_center_item">
            <div className="project_button">
                <p>menu software</p>
            </div>
        </Link>
    )
}

export default Products
