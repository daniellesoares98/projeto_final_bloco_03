import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Service"

function FormCategoria() {

  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: ""
  })

  function atualizarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria)
    } catch (error) {
      console.error("Erro ao buscar categoria:", error)
    }
  }

  useEffect(() => {
    if (id) {
      buscarPorId(id)
    }
  }, [id])

  async function salvarCategoria(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    try {

      if (id) {
        await atualizar("/categorias", categoria, setCategoria)
        alert("Categoria atualizada com sucesso!")
      } else {
        await cadastrar("/categorias", categoria, setCategoria)
        alert("Categoria cadastrada com sucesso!")
      }

      navigate("/categorias")

    } catch (error) {
      console.error("Erro ao salvar categoria:", error)
    }
  }

  return (
    <div className="container mx-auto flex flex-col items-center py-10">

      <h1 className="text-3xl font-bold mb-8">
        {id ? "Editar Categoria" : "Cadastrar Categoria"}
      </h1>

      <form
        className="flex flex-col w-full max-w-lg gap-4"
        onSubmit={salvarCategoria}
      >

        <div className="flex flex-col gap-2">

          <label htmlFor="nome">
            Nome da Categoria
          </label>

          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite o nome da categoria"
            value={categoria.nome}
            onChange={atualizarEstado}
            required
            className="border border-gray-300 rounded-lg p-3"
          />

        </div>

        <button
          type="submit"
          className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold rounded-lg py-3 cursor-pointer"
        >
          {id ? "Atualizar" : "Cadastrar"}
        </button>

      </form>

    </div>
  )
}

export default FormCategoria