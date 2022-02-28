import React, { Component , useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Search from '../Search/Search';
import './style.scss';


 async function getInformationProduct(id){
        const data =  await axios.get(`http://localhost:3000/api/items/description/${id}`);
        const item = data.data.item;

        return item;

    }


export default function ProductDetail() {
    const [item, setItem] = useState()

    const params = useParams(); 
    const navigate = useNavigate()
    const itemProd = {}
    
    
    useEffect( async (itemProd)=> {
        itemProd =  await getInformationProduct(params.id);
        setItem(itemProd);
    }, [])
    
    if(item){
        return (

            <div >
                <Search/>
                <div className="container-detail">
                    <div className="image-detail">
                        <img src={item.picture} alt="Imagen del producto" />
                    </div>
                    <div className="detail">
                        <h3>{item.condition}</h3>
                        <span>{item.title}</span>
                        <h1>{"$ " + item.price.amount}</h1>
                        <button onClick={()=> navigate('/')}>Comprar</button>
                    </div>
                    <div className="description">
                        <h2>Descripción del producto</h2>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        ) 
    }else{
        return <div className="loading">Loading...</div>
    }   
        
}  