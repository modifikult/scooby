import React from 'react';
import './ProductsPage.css'
import {Context} from "../../Context";


class ProductsPage extends React.Component {
 static contextType = Context
    render () {
        return (
            <div>
                {this.context}
            </div>
        )
    }
}

export default ProductsPage