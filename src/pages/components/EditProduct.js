import React from 'react'
import axios from 'axios'

import InputProduct from './InputProduct'
import ListRender from '../Produtos/ListRender'

const EditProduct = () => {
    const text = "Editar"
    const handleEdit = (produto) => {
        console.log("chegou")
    }
    const handleClickEdit = () => {
        console.log("esta no edit")
        // axios.patch(`${url}/${produto.id}`, produtos)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

    }
    return (
        <div>
            <h3>Edite o Produto:</h3>
            <InputProduct
                text={text}
                handleClick={handleClickEdit} />

        </div>

    )
}

export default EditProduct