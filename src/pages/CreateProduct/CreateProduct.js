import React from 'react'
import axios from 'axios'
import InputProduct from '../components/InputProduct'
import { Box, Heading } from '@chakra-ui/react'

const CreateProduct = () => {
    const text = "Enviar"
    const url = "https://homologacao.windel.com.br:3000/teste-front"

    const handleClickCreate = ({ produto }) => {
        const create = produto
         axios.post(url, create)
           .then(response => {
           console.log(produto)
           console.log(response)
          })
          .catch(error => console.log(error))
          
     }
    return (
        <Box
        margin='10px'>

            <Heading>Crie seu produto:</Heading>
            <InputProduct
                text={text}
                handleClick={handleClickCreate}

            />
        </Box>


    )
}

export default CreateProduct