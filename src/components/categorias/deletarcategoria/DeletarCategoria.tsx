import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"

function DeletarCategoria() {

  const navigate = useNavigate()
  const { id } = useParams<{ id: string }>()

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: ""
  })

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

  async function deletarCategoria() {
    try {
      await deletar(`/categorias/${id}`)

      alert("Categoria deletada com sucesso!")

      navigate("/categorias")

    } catch (error) {
      console.error("Erro ao deletar categoria:", error)
    }
  }

  return (
    <div className="container mx-auto flex flex-col items-center py-10">

      <h1 className="text-3xl font-bold mb-4">
        Deletar Categoria
      </h1>

      <p className="mb-6">
        Você tem certeza que deseja deletar esta categoria?
      </p>

      <div className="border border-gray-200 rounded-lg shadow-md w-full max-w-md overflow-hidden">

        <div className="p-6 text-center">
          <h2 className="text-xl font-semibold">
            {categoria.nome}
          </h2>
        </div>

        <div className="flex">

          <button
            onClick={() => navigate("/categorias")}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 cursor-pointer"
          >
            Não
          </button>

          <button
            onClick={deletarCategoria}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 cursor-pointer"
          >
            Sim
          </button>

        </div>

      </div>

    </div>
  )
}

export default DeletarCategoria