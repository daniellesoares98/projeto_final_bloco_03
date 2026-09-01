import { useEffect, useState } from "react"
import type Categoria from "../../../models/Categoria"
import { buscar } from "../../../services/Service"
import CardCategoria from "../cardcategoria/CardCategoria"

function ListaCategorias() {

  const [categorias, setCategorias] = useState<Categoria[]>([])

  async function buscarCategorias() {
    try {
      await buscar("/categorias", setCategorias)
    } catch (error) {
      console.error("Erro ao buscar categorias:", error)
    }
  }

  useEffect(() => {
    buscarCategorias()
  }, [])

  return (
    <div className="container mx-auto px-6 py-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        Categorias
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {categorias.map((categoria) => (
          <CardCategoria
            key={categoria.id}
            categoria={categoria}
          />
        ))}

      </div>

    </div>
  )
}

export default ListaCategorias