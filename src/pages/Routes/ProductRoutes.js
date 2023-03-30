import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from '../components/About';
import Footer from '../components/Footer';
import { Header } from '../components/Header';


import Home from '../components/Home';
import Navbar from '../components/Navbar';
import CreateProduct from '../CreateProduct/CreateProduct';
import EditProduct from '../EditProduct/EditProduct';
import RenderListProduct from '../RenderListProduct/RenderListProduct';

const ProductRoutes = () => {

    return (
        <BrowserRouter>
            <Grid templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
                gridTemplateRows={'25% 1fr 30px'}
                gridTemplateColumns={'150px 1fr'}
                h='200px'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem  pl='2' bg='orange.300' area={'header'}>
                    <Header />
                </GridItem>

                <GridItem pl='2' bg='pink.300' area={'nav'}>
                    <Navbar />
                </GridItem>

                <GridItem pl='2' bg='green.300' area={'main'}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/About' element={<About/>} />
                        <Route path='/Produtos' element={<RenderListProduct />} />
                        <Route path='/Produtos/Criar_Produto' element={<CreateProduct />} />
                        <Route path='/Produtos/Editar_Produto/:id' element={<EditProduct />} />
                    </Routes>
                </GridItem>
                <GridItem pl='2' bg='blue.300' area={'footer'}>
                    <Footer />
                </GridItem>
            </Grid>
        </BrowserRouter>
    )
}

export default ProductRoutes