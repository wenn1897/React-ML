import React, { Component } from 'react';
import Product from './Product'
import './style.scss';


export default class Products extends Component {

    constructor() {
        super();
        this.state = {
            data: '',
            products: []
        }
        //this.handleSearch = this.handleSearch.bind(this);
    }


    render(){
        let products  = this.state.data.items;
        let productList;

        if(products){
            productList = products.map( (item)=> { 
                return(
                    <Product item={item} key={item.id}/>
                )
            })
        }

        return(
            <div className="">
               {productList}
            </div>
        )
    }
}