//externos
import axios from "axios";

//hooks
import React, { useEffect, useState } from "react";

//css
import styles from "./ListRender.module.css"

//icons
import { BsFillGridFill } from 'react-icons/bs';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { FaListUl } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'


//Componentes
import EditProduct from "../components/EditProduct";
import FilterProduct from "../components/FilterProduct";
import CreateProduct from "../components/CreateProduct";
import InputProduct from "../components/InputProduct";

const ListRender = () => {
    const [produtos, setProdutos] = useState([]);
    const baseURL = "https://windelweb.windel.com.br:3000/teste-front"

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [produtos]);

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
    function alterarProduto(produto) {
        setId(produto.id)
      

       
    }

    return (
        <>
            <InputProduct text="Edit" />
            <table className={styles.container_tabela}>
                <thead className={styles.cabecalho_tabela}>
                    <tr>
                        <th >Imagem</th>
                        <th /*onClick={() => ordernar(this)}*/>Nome do Produto</th>
                        <th /*onClick={() => ordernar(this)}*/>Referência</th>
                        <th /*onClick={() => ordernar(this, true)}*/> <span> Valor de Venda</span></th>
                        <th /*onClick={() => ordernar(this)}*/>Fabricante</th>
                        <th /*onClick={() => ordernar(this, true)}*/>Estoque</th>
                        <th> <FaListUl /> <BsFillGridFill /> </th>
                    </tr>
                </thead>

                <tbody >
                    {produtos.map(produto => (
                        <tr key={produto.id} className={styles.container_produto}>
                            <td><img src={produto.imagemProduto} alt="Imagem do Produto" /></td>
                            <td>{produto.nome}</td>
                            <td>{produto.valorVenda}</td>
                            <td>{produto.referencia}</td>
                            <td>{produto.fabricante}</td>
                            <td>{produto.estoque} {produto.unidadeMedida}</td>
                            <td><RiDeleteBin7Fill onClick={() => deleteProdutos(produto.id)} className="imagem-acao" /> <AiFillEdit onClick={() => alterarProduto(produto)} className="imagem-acao" /></td>
                        </tr>

                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListRender