import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import CreateProduct from '../CreateProduct/CreateProduct';
import EditProduct from '../EditProduct/EditProduct';
import RenderListProduct from '../RenderListProduct/RenderListProduct';

const ProductRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Produtos' element={<RenderListProduct />} />
                <Route path='/Produtos/Criar_Produto' element={<CreateProduct />} />
                <Route path='/Produtos/Editar_Produto/:id' element={<EditProduct />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ProductRoutes