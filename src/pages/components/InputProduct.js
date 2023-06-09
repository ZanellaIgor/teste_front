import { FormLabel, Input, Box, FormControl, Button, Grid, Flex, Spacer } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

const InputProduct = ({ handleClick, text, alterarStates }) => {
  
  const [descProduto, setDescProduto] = useState("")
  const [vlrVenda, setVlrVenda] = useState("")
  const [refProduto, setRefProduto] = useState("")
  const [un, setUn] = useState("")
  const [fabProduto, setFabProduto] = useState("")
  const [estoqueProduto, setEstoqueProduto] = useState("")
  const [imagem, setImagem] = useState("")


  function alterarStates(){
    console.log('prd')
    console.log(produto)
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

  const [id, setId] = useState("")
  const [createdAt, setCreatedAt] = useState("");

  
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

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
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
  }

  return (
    <Flex
      flexDirection='column'
      padding='10px'
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
        </FormLabel>
        {error && <p>{error}</p>}
        <FormControl
          display='flex'
          justifyContent="space-between">
          <Button alignSelf="flex-end" type='button' onClick={handleClickForm}>{text}</Button>
        </FormControl>
      </form>

    </Flex>
  )
}

export default InputProduct