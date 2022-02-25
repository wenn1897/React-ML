const express = require('express');
const axios = require('axios');
const { query } = require('express');
const router = express.Router();

var url= 'https://api.mercadolibre.com/';


router.get('/:query', async (req,res) => {
    const search = await axios.get(`${url}sites/MLA/search?q=${req.params.query}`)

    const data = transformData(search.data);
    res.send(data);
})

function transformData(data){
    itemsArr = [];
    categoriesArr= [];

    const data1 = data.results;
    const data2 = data.filters;

    //Obtenemos 4 primeros registros de la busqueda
    if(data1){
        for(let i=0; i<4; i++) {
            item = { 
                "id": data1[i].id,
                "title": data1[i].title,
                "price": {
                    "currency": data1[i].price,
                    "amount": data1[i].price,
                    "decimals": data1[i].price
                },
                "picture": data1[i].thumbnail,
                "condition": data1[i].condition,
                "free_shipping": data1[i].shipping.free_shipping
            }
            itemsArr.push(item);  
        }
    }
    
    //Obtenemos las categorias
    if(data2){
        for(let i=0; i<data2.length; i++){
            category = data2[0].values[i].name 
            categoriesArr.push(category);        
        }
    }

    //Armamos respuesta
    const obj = {
        author : {
            name: "Wendy",
            lastname: "Ayala"
        },
        categories: categoriesArr,
        items: itemsArr
    }

    return obj
}


module.exports = router;