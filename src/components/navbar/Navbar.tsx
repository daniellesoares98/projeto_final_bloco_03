import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="bg-emerald-700 text-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link to="/home">
                <h1 className="text-2xl font-bold">
                    FarmaVida
                </h1>
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/home">
                    Home
                    </Link>
                    <span>Categorias</span>
                    <span>Cadastrar Categoria</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar