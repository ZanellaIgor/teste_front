import React, { useEffect } from 'react'
import InputProduct from '../components/InputProduct'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const EditProduct = () => {
    const { id } = useParams();

    const baseURL = "https://windelweb.windel.com.br:3000/teste-front"
    const text = "Editar"
    const handleClick = () => {
        console.log("esta no edit")
    }
    useEffect(() => {
        axios.patch(`${baseURL}/${id}`, )
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        console.log("foi1")
    }, [id])

    return (
        <div>
            <h3>Edite o Produto:</h3>
            <InputProduct
                text={text}
                evento={handleClick} 
                
               />
        </div>
    )
}

export default EditProduct