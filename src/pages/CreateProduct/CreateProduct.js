import React from 'react'
import axios from 'axios'
import InputProduct from '../components/InputProduct'

const CreateProduct = () => {
    const text = "Enviar"
    
    function handleClickCreate({produto}){
        console.log(produto)
        // axios.post(url, produto)
    //   .then(response => {
    //     console.log(produto)
    //     console.log(response)
    //   })
    //   .catch(error => console.log(error))
    }
    return (

        <div>
            <h3>Crie seu produto:</h3>
            <InputProduct 
            text={text} 
            handleClick={handleClickCreate}/>
        </div>
    )
}

export default CreateProduct