import { FormLabel, Input, Box, FormControl, Button } from '@chakra-ui/react'
import { useState } from 'react'


const InputProduct = ({ handleClick, text }) => {

  const [descProduto, setDescProduto] = useState("")
  const [vlrVenda, setVlrVenda] = useState("")
  const [refProduto, setRefProduto] = useState("")
  const [un, setUn] = useState("")
  const [fabProduto, setFabProduto] = useState("")
  const [estoqueProduto, setEstoqueProduto] = useState("")
  const [imagem, setImagem] = useState("")

  //error
  const [error, setError] = useState("");

  const url = "https://homologacao.windel.com.br:3000/teste-front"

  const produto = {
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
    console.log(produto.nome.length)
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

    handleClick({ produto })

    // axios.post(url, produto)
    //   .then(response => {
    //     console.log(produto)
    //     console.log(response)

    //   })
    //   .catch(error => console.log(error))

  }

  return (
    <Box>
      <form>
        <FormControl>
          <FormLabel>
            Descrição do Produto:
            <Input
              type="text"
              onChange={(e) => setDescProduto(e.target.value)}
              value={descProduto}
              required
            />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            Valor de Venda:
            <Input type="number"
              step="0.01"
              onChange={(e) => setVlrVenda(e.target.value)}
              value={vlrVenda}
              required
            />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>
            Referência:
            <Input
              type="text"
              onChange={(e) => setRefProduto(e.target.value)}
              value={refProduto}
            />
          </FormLabel>
        </FormControl>
        <FormControl>

          <FormLabel>
            Unidade de Medida:
            <Input
              type="text"
              onChange={(e) => setUn(e.target.value)}
              value={un}
              required
            />
          </FormLabel>
        </FormControl>
        <FormLabel>
          Fabricante:
          <Input
            type="text"
            onChange={(e) => setFabProduto(e.target.value)}
            value={fabProduto}
          />
        </FormLabel>
        <FormControl>
          <FormLabel>
            Estoque Atual:
            <Input
              type="number"
              onChange={(e) => setEstoqueProduto(e.target.value)}
              value={estoqueProduto}
            />
          </FormLabel>
        </FormControl>
        <FormControl>
          <FormLabel>Informe o Link da Imagem:
            <Input
              type="url"
              onChange={(e) => setImagem(e.target.value)}
              value={imagem} />
          </FormLabel>
        </FormControl>
        {error && <p>{error}</p>}
        <Button type='button' onClick={handleClickForm}>{text}</Button>
      </form>
    </Box>
  )
}

export default InputProduct