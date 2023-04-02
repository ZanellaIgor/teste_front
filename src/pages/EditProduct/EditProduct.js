import React, { useEffect, useState } from 'react'
import InputProduct from '../components/InputProduct'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Heading } from '@chakra-ui/react';


const EditProduct = () => {
    const [descProduto, setDescProduto] = useState("");
    const [vlrVenda, setVlrVenda] = useState("");
    const [refProduto, setRefProduto] = useState("");
    const [un, setUn] = useState("");
    const [fabProduto, setFabProduto] = useState("");
    const [estoqueProduto, setEstoqueProduto] = useState("");
    const [imagem, setImagem] = useState("");

    function editValueInputs(produtos) {
        setDescProduto(produtos.descProduto);
        setVlrVenda(produtos.vlrVenda);
        setRefProduto(produtos.refProduto);
        setUn(produtos.un);
        setFabProduto(produtos.fabProduto);
        setEstoqueProduto(produtos.estoqueProduto);
        setImagem(produtos.imagem);
    }
    const { id } = useParams();

    const baseURL = "https://homologacao.windel.com.br:3000/teste-front"
    const text = "Editar"
    const handleClick = () => {
        console.log("esta no edit")
    }

    useEffect(() => {
        axios.get(`${baseURL}/${id}`)
            .then((response) => {
                const produtos = response.data
                editValueInputs(produtos)
                console.log(response.data)
                
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);
    // useEffect(() => {
    //     axios.patch(`${baseURL}/${id}`, )
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //     console.log("foi1")
    // }, [id])

    return (
        <>
            <Heading>Edite o Produto:</Heading>
            <InputProduct
                text={text}
                evento={handleClick}
                alterarProduto={editValueInputs}
            />
        </>
    )
}

export default EditProduct