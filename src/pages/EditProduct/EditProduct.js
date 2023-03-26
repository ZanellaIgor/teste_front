import React from 'react'
import InputProduct from '../components/InputProduct'

const EditProduct = () => {
    const text = "Editar"
    const handleClick = () => {
        console.log("esta no edit")  

    }
    return (
        <div>
        <h3>Edite o Produto:</h3>
            <InputProduct
            text={text}
            evento={handleClick} /></div>
    )
}

export default EditProduct