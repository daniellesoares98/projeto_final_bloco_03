import { Link } from 'react-router-dom'
import logo from "../../assets/logo.png"

function Navbar() {
    return (
        <nav className="bg-emerald-700 text-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <Link
                to="/home"
                className="flex items-center gap-2"
                >
                <img
                    src={logo}
                    alt="Logo FarmaVida"
                    className="w-30 h-10 object-contain"
                />

                <h1 className="text-2xl font-bold">
                    
                </h1>
                </Link>

                <div className="flex items-center gap-6">
                    <Link to="/home"> Home </Link>
                    <Link to="/categorias"> Categorias </Link>
                    <Link to="/cadastrarcategoria"> Cadastrar Categoria </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar