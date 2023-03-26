import { useState } from 'react'
import axios from 'axios'


const InputProduct = () => {
  const [descProduto, setDescProduto] = useState("")
  const [vlrVenda, setVlrVenda] = useState("")
  const [refProduto, setRefProduto] = useState("")
  const [un, setUn] = useState("")
  const [fabProduto, setFabProduto] = useState("")
  const [estoqueProduto, setEstoqueProduto] = useState("")
  const [imagem, setImagem] = useState("")


  const url = "https://windelweb.windel.com.br:3000/teste-front"

  const produto = {
    nome: descProduto,
    valorVenda: parseFloat(vlrVenda),
    referencia: refProduto,
    unidadeMedida: un,
    fabricante: fabProduto,
    estoque: parseInt(estoqueProduto),
    imagemProduto: imagem,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, produto)
      .then(response => {
        console.log(response.data)
        this.setState(produto)

      })
      .catch(error => console.log(error))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Descrição do Produto:
          <input
            type="text"
            onChange={(e) => setDescProduto(e.target.value)}
            value={descProduto}
            required
          />
        </label>
        <label>
          Valor de Venda:
          <input type="number"
            step="0.01"
            onChange={(e) => setVlrVenda(e.target.value)}
            value={vlrVenda}
            required
          />
        </label>
        <label>
          Referência:
          <input
            type="text"
            onChange={(e) => setRefProduto(e.target.value)}
            value={refProduto}
          />
        </label>
        Unidade de Medida:
        <input
          type="text"
          onChange={(e) => setUn(e.target.value)}
          value={un}
          required
        />
        <label>
          Fabricante:
          <input
            type="text"
            onChange={(e) => setFabProduto(e.target.value)}
            value={fabProduto}
          />
        </label>
        <label>
          Estoque Atual:
          <input
            type="number"
            onChange={(e) => setEstoqueProduto(e.target.value)}
            value={estoqueProduto}
          />
        </label>
        <label>Informe o Link da Imagem:
          <input
            type="text"
            onChange={(e) => setImagem(e.target.value)}
            value={imagem} />
        </label>
        <input type="submit" value="Criar" />
      </form>
    </div>
  )
}

export default InputProduct