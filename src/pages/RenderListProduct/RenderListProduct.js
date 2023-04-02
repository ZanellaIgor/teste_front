import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Input,
    FormControl,
    Flex,
    FormLabel,
    Heading,
    Image,
    background,
    Box,
    Spacer,
} from '@chakra-ui/react'

import React, { useEffect, useState } from "react";
import axios from "axios";


//icons
import { BsFillGridFill } from 'react-icons/bs';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { FaListUl } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { Link } from "react-router-dom";

const RenderListProduct = () => {
    const [produtos, setProdutos] = useState([]);
    const [desc, setDesc] = useState("");
    const [ref, setRef] = useState("");
    const [fab, setFab] = useState("");

    const baseURL = "https://homologacao.windel.com.br:3000/teste-front"

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    //Deletar Produto
    function deleteProdutos(id) {
        if (window.confirm('Tem certeza que deseja deletar este Produto?')) {
            console.log(baseURL)
            axios.delete(`${baseURL}/${id}`)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => console.log(error))
        }
    }

    //Alterar produto
    function alterarProduto(id) {
        alert("Função não habilitada")

        axios.patch(`${baseURL}/${id}`, produtos)
            .Then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Box>

            <Heading>Produtos:</Heading>
            <Flex>

                <FormControl>
                    <FormLabel>
                        Descrição:
                        <Input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Referência:
                        <Input type="text" value={ref} onChange={(e) => setRef(e.target.value)} />
                    </FormLabel>
                </FormControl>
                <FormControl>
                    <FormLabel>
                        Fabricante:
                        <Input type="text" value={fab} onChange={(e) => setFab(e.target.value)} />
                    </FormLabel>
                </FormControl>

            </Flex>
            <Table
                border='1px solid black'
                borderRadius='lg'
                pd='5px'
            >
                <Thead>
                    <Tr>
                        <Th >Imagem</Th>
                        <Th>Nome do Produto</Th>
                        <Th>Referência</Th>
                        <Th /*onClick={() => ordernar(This, true)}*/> <span> Valor de Venda</span></Th>
                        <Th>Fabricante</Th>
                        <Th /*onClick={() => ordernar(This, true)}*/>Estoque</Th>
                        <Th> <FaListUl /> <BsFillGridFill /> </Th>
                    </Tr>
                </Thead>

                <Tbody
                >
                    {produtos.map(produto => (
                        <Tr
                            key={produto.id}
                            _hover={{
                                bg: 'cyan.400',
                                color: 'white',
                                borderRadius: "lg",
                            }}
                        >
                            <Td><Image src={produto.imagemProduto} alt="Imagem do Produto" h='64px' w='64px' /></Td>
                            <Td>{produto.nome}</Td>
                            <Td>{produto.valorVenda}</Td>
                            <Td>{produto.referencia}</Td>
                            <Td>{produto.fabricante}</Td>
                            <Td>{produto.estoque} {produto.unidadeMedida}</Td>
                            <Td><Flex alignItems="center">
                                <Link to={`/Produtos/Editar_Produto/${produto.id}`}>
                                    <FiEdit style={{ width: '22px', height: '22px', color: 'brown', margin: '5px' }} />
                                </Link>
                                <RiDeleteBin7Fill style={{ width: '22px', height: '22px', color: 'red', pd: '5px', cursor: 'pointer' }} onClick={() => deleteProdutos(produto.id)} />
                                <Spacer />
                            </Flex>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>

            </Table>
        </Box>
    )
}

export default RenderListProduct