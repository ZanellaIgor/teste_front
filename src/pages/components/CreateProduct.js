import React from 'react'
import axios from 'axios'
import InputProduct from './InputProduct'

const CreateProduct = () => {
    const text = "Enviar"
    const url = "https://windelweb.windel.com.br:3000/teste-front"
    
    function handleClickCreate({ produto }) {
        console.log(produto)
        const {id, createdAt, ...novoProduto} = produto
        axios.post(url, novoProduto)
            .then(response => {
                console.log(novoProduto)
                console.log(novoProduto)
            })
            .catch(error => console.log(error))
    }
    return (

        <div>
            <h3>Crie seu produto:</h3>
            <InputProduct
                text={text}
                handleClick={handleClickCreate} />
        </div>
    )
}

export default CreateProduct