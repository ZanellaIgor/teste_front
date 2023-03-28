import React from 'react'
import InputProduct from '../components/InputProduct'
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();

    const text = "Editar"
    const handleClick = () => {
        console.log("esta no edit")  

    }
    return (
        <div>
        <h3>Edite o Produto:</h3>
            <InputProduct
            text={text}
            evento={handleClick} />
            </div>
    )
}

export default EditProduct