import React from 'react'
import InputProduct from '../components/InputProduct'

const CreateProduct = () => {
    const addProduct = (e) => {
       e.preventDefault();
       console.log('passei')
    }

    return (
        <div>
            <h3>Crie um Produto Novo:</h3>
        
            <InputProduct onSubmit={addProduct}/>
            
        </div>
    )
}

export default CreateProduct