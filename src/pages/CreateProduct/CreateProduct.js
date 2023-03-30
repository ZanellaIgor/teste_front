import React from 'react'
import axios from 'axios'
import InputProduct from '../components/InputProduct'
import { Heading } from '@chakra-ui/react'

const CreateProduct = () => {
    const text = "Enviar"

    function handleClickCreate({ produto }) {
        console.log(produto)
        // axios.post(url, produto)
        //   .then(response => {
        //     console.log(produto)
        //     console.log(response)
        //   })
        //   .catch(error => console.log(error))
    }
    return (
        <>

            <Heading>Crie seu produto:</Heading>
            <InputProduct
                text={text}
                handleClick={handleClickCreate}

            />
        </>


    )
}

export default CreateProduct