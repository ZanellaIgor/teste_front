
import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./RenderListProduct.module.css"

//icons
import { BsFillGridFill } from 'react-icons/bs';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { FaListUl } from 'react-icons/fa'
import { AiFillEdit } from 'react-icons/ai'
import { Link } from "react-router-dom";

const RenderListProduct = () => {
    const [produtos, setProdutos] = useState([]);
    const [desc, setDesc] = useState("");
    const [ref, setRef] = useState("");
    const [fab, setFab] = useState("");

    const baseURL = "https://windelweb.windel.com.br:3000/teste-front"

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
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <>
            <div>
                <label>
                    Descrição:
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
                </label>
                <label>
                    Referência:
                    <input type="text" value={ref} onChange={(e) => setRef(e.target.value)} />
                </label>
                <label>
                    Fabricante:
                    <input type="text" value={fab} onChange={(e) => setFab(e.target.value)} />
                </label>
            </div>
            <table className={styles.container_tabela}>
                <thead className={styles.cabecalho_tabela}>
                    <tr>
                        <th >Imagem</th>
                        <th>Nome do Produto</th>
                        <th>Referência</th>
                        <th /*onClick={() => ordernar(this, true)}*/> <span> Valor de Venda</span></th>
                        <th>Fabricante</th>
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
                            <td><RiDeleteBin7Fill onClick={() => deleteProdutos(produto.id)} className="imagem-acao" /> <Link to={`/Produtos/Editar_Produto/${produto.id}`}><AiFillEdit className="imagem-acao" /></Link> </td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </>
    )
}

export default RenderListProduct