import { FormLabel, Input, Box, FormControl, Button, Grid, Flex, Spacer } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const InputProduct = ({ handleClick, text, alterarProduto }) => {

<<<<<<< HEAD
=======
const InputProduct = ({ handleClick, text,sets }) => {

>>>>>>> 60a5287fc6fd64bd841b33e565114d5f77349696
  const [descProduto, setDescProduto] = useState("")
  const [vlrVenda, setVlrVenda] = useState("")
  const [refProduto, setRefProduto] = useState("")
  const [un, setUn] = useState("")
  const [fabProduto, setFabProduto] = useState("")
  const [estoqueProduto, setEstoqueProduto] = useState("")
  const [imagem, setImagem] = useState("")

<<<<<<< HEAD
  const alterarStates = (produto) => {
    alterarProduto()
    setDescProduto(produto.nome)
    setVlrVenda(produto.valorVenda)
    setRefProduto(produto.referencia)
    setUn(produto.unidadeMedida)
    setFabProduto(produto.fabricante)
    setEstoqueProduto(produto.estoque)
    setImagem(produto.imagemProduto)

  }
  //error
  const [error, setError] = useState("");

  const url = "https://homologacao.windel.com.br:3000/teste-front"
=======
  const [id, setId] = useState("")
  const [createdAt, setCreatedAt] = useState("");
  //error
  const [error, setError] = useState("");
>>>>>>> 60a5287fc6fd64bd841b33e565114d5f77349696

  function sets(produto) {
    setDescProduto(produto.nome);
    setVlrVenda();
    setRefProduto();
    setUn();
    setFabProduto();
    setEstoqueProduto();
    setImagem();
    setId();
    setCreatedAt();
    setError();
  }
  const produto = {
    id,
    createdAt,
    nome: descProduto,
    valorVenda: parseFloat(vlrVenda),
    referencia: refProduto,
    unidadeMedida: un,
    fabricante: fabProduto,
    estoque: parseInt(estoqueProduto),
    imagemProduto: imagem,
  }


  const handleClickForm = () => {
    setError("")
    console.log(produto)
<<<<<<< HEAD
    console.log(produto.nome.length)
=======

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
>>>>>>> 60a5287fc6fd64bd841b33e565114d5f77349696
    if (produto.nome.length == 0 || produto.nome.length >= 40) {
      return setError("O campo deve Descrição do Produto deve conter entre 1 a 40 caracteres")
    }
    if (produto.valorVenda.length == 0 || isNaN(produto.valorVenda)) {
      return setError("Favor informar o Valor de Venda")
    }
    if (produto.unidadeMedida.length == 0) {
      return setError("O campo Unidade de medida não ser cadastrado em branco")
    }
    if (produto.estoque.length == 0 || isNaN(produto.estoque)) {
      return setError("O campo Estoque não deve ir vazio")
    }
    if (produto.imagemProduto !== "" && !(urlRegex).test(produto.imagem)) {
      return setError("Por favor, informe uma URL válida ou deixe o campo vazio.")
    }

    handleClick({ produto })
<<<<<<< HEAD
=======

>>>>>>> 60a5287fc6fd64bd841b33e565114d5f77349696
  }

  return (
    <Flex
      flexDirection='column'
      padding='10px'
    //justify-content= 'space-between'
    >

      <form
        style={{ display: "flex", flexWrap: "wrap", alignItems: 'space-around' }}>

        <FormLabel
          width='312px'
        >
          Descrição do Produto:
          <Input
            type="text"
            onChange={(e) => setDescProduto(e.target.value)}
            value={descProduto}
          />
        </FormLabel>
        <FormLabel
          width='312px'>
          Valor de Venda:
          <Input type="number"
            step="0.01"
            onChange={(e) => setVlrVenda(e.target.value)}
            value={vlrVenda}
          />
        </FormLabel>
        <FormLabel
          width='312px'>
          Referência:
          <Input
            type="text"
            onChange={(e) => setRefProduto(e.target.value)}
            value={refProduto}
          />
<<<<<<< HEAD
        </FormLabel>
        <FormLabel
          width='312px'>
          Unidade de Medida:
          <Input
            type="text"
            onChange={(e) => setUn(e.target.value)}
            value={un}
            required
          />
        </FormLabel>
        <FormLabel
          width='312px'>
=======
        </label>
        Unidade de Medida:
        <input
          type="text"
          onChange={(e) => setUn(e.target.value)}
          value={un}
        />
        <label>
>>>>>>> 60a5287fc6fd64bd841b33e565114d5f77349696
          Fabricante:
          <Input
            type="text"
            onChange={(e) => setFabProduto(e.target.value)}
            value={fabProduto}
          />
        </FormLabel>
        <FormLabel
          width='312px'>
          Estoque Atual:
          <Input
            type="number"
            onChange={(e) => setEstoqueProduto(e.target.value)}
            value={estoqueProduto}
          />
        </FormLabel>
        <FormLabel
          width='635px'
        >Informe o Link da Imagem:
          <Input
            type="url"
            onChange={(e) => setImagem(e.target.value)}
            value={imagem} />
<<<<<<< HEAD
        </FormLabel>
        {error && <p>{error}</p>}
        <FormControl
          display='flex'
          justifyContent="space-between">
          <Button alignSelf="flex-end" type='button' onClick={handleClickForm}>{text}</Button>
        </FormControl>
=======
        </label>
        <label>
          <input type="hidden" value={id} />
        </label>
        <label>
          <input type="hidden" value={createdAt} />
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <button type='button' onClick={handleClickForm}>{text}</button>

>>>>>>> 60a5287fc6fd64bd841b33e565114d5f77349696
      </form>

    </Flex>
  )
}

export default InputProduct