import { useState } from 'react'
import styles from "./InputProduct.module.css"

const InputProduct = ({ handleClick, text }) => {

  const [descProduto, setDescProduto] = useState("")
  const [vlrVenda, setVlrVenda] = useState("")
  const [refProduto, setRefProduto] = useState("")
  const [un, setUn] = useState("")
  const [fabProduto, setFabProduto] = useState("")
  const [estoqueProduto, setEstoqueProduto] = useState("")
  const [imagem, setImagem] = useState("")

  const [id, setId] = useState("")
  const [createdAt, setCreatedAt] = useState("");
  //error
  const [error, setError] = useState("");

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
    <div>
      <form>
        <label>
          Descrição do Produto:
          <input
            type="text"
            onChange={(e) => setDescProduto(e.target.value)}
            value={descProduto}
          />
        </label>
        <label>
          Valor de Venda:
          <input type="number"
            step="0.01"
            onChange={(e) => setVlrVenda(e.target.value)}
            value={vlrVenda}
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
            type="url"
            onChange={(e) => setImagem(e.target.value)}
            value={imagem} />
        </label>
        <label>
          <input type="hidden" value={id} />
        </label>
        <label>
          <input type="hidden" value={createdAt} />
        </label>
        {error && <p className={styles.error}>{error}</p>}
        <button type='button' onClick={handleClickForm}>{text}</button>

      </form>
    </div>
  )
}

export default InputProduct