import React, { Component } from 'react';


export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productItem: this.props.item
        }
        //this.handleSearch = this.handleSearch.bind(this);
    }


    render(){
        let product = this.state.productItem
        //console.log("props" + product.item)
        
        if(product){
            return(
                    <div className="product-item">
                        <img src={product.picture} alt={"image product"} className="image-product"/>
                        <div className="description-product">
                            <div>
                                <span className="">{"$ " + product.price.amount }</span>
                            </div>
                            <div className="name-bussines">
                                {product.title}
                            </div>
                        </div>
                        
                        <hr></hr>
                    </div>
            )
        }else{
            return(
                <h1>Aqui no llegaron productos</h1>
            )
        }

    }
}