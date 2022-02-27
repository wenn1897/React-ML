import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Search from '../pages/Search/Search';
import ProductDetail from '../pages/ProductDetail/Product-detail';

import './styles.scss';

const App= () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Search/>} />
                <Route  path='/description/:id' element={<ProductDetail id/>} />
            </Routes>        
        </BrowserRouter>
    );
}

export default App;