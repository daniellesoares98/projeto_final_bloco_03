import type Categoria from "../../../models/Categoria"
import { Link } from "react-router-dom"

interface CardCategoriaProps {
  categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-md overflow-hidden">
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {categoria.nome}
        </h3>
      </div>

      <div className="flex">
        <Link
        to={`/editarcategoria/${categoria.id}`}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 text-center" >
        Editar
        </Link>

        <Link
        to={`/deletarcategoria/${categoria.id}`}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 text-center"
        >
        Deletar
        </Link>
      </div>

    </div>
  )
}

export default CardCategoria