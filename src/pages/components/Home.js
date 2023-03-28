import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <ul>
            <li>
                <Link to='/Produtos'>Lista de Produtos</Link>
            </li>
            <li>
                <Link to='/Produtos/Criar_Produto'>Criar Produto</Link>
            </li>
            <li>
                <Link to='/Produtos/Editar_Produto/:id'>Editar Produto</Link>
            </li>
        </ul>
    )
}

export default Home