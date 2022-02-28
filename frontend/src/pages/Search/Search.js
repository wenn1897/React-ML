import React, { Component } from 'react';
import axios from 'axios';

import Products from '../../components/Products/Products';

import logo from '../../assets/icons/Logo_ML.png';
import lupa from '../../assets/img/ic_Search.png';

import './style.scss'


export default class Search extends Component {

    constructor() {
        super();
        this.productRef = React.createRef();
        this.state = {
            keyword: '',
            results: {}
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
    }

    onChangeSearch(e) {
        if(e.target.value){
            this.setState({
                keyword: e.target.value,
            })
        }
    }

    async handleSearch(){

        if(this.state.keyword){
            const search = await axios.get(`http://localhost:3000/api/items/${this.state.keyword}`);
            this.setState({ results : search, keyword: ''});

            //console.log(JSON.stringify(this.state.results.data));
            this.productRef.current.setState({ data : this.state.results.data})
            
        }else{
            alert('Por favor digita los datos de tu consulta!');
        }
        
    }


    render() {
            
        return(
            <div className="container">

                <div className="container-search">
                    <picture>
                        <img src={logo} alt="Logo Mercado Libre" className="img-ml" />
                    </picture>
                    <div className="form-search">
                        <input type="text" 
                                placeholder="   Nunca dejes de buscar" 
                                onChange={this.onChangeSearch} 
                                value={this.state.keyword}/>    
                        <button className="btn-search"  onClick={this.handleSearch}>
                            <img src={lupa} alt="Boton buscar" />
                        </button>
                    </div>
                </div>

                {this.state.results ?  
                    <Products ref={this.productRef}/> 
                :<h3>No se encontraron resultados</h3>}

            </div>
            

        )
        
    }

}