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

    //não funciona
    function editValueInputs(produtos) {
        console.log(produtos)
        const produto = produtos
        setDescProduto(produto.nome)
        setVlrVenda(produto.valorVenda)
        setRefProduto(produto.referencia)
        setUn(produto.unidadeMedida)
        setFabProduto(produto.fabricante)
        setEstoqueProduto(produto.estoque)
        setImagem(produto.imagemProduto)
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
                product={editValueInputs()}
            />
        </>
    )
}

export default EditProduct