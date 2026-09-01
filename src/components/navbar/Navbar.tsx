function Navbar() {
    return (
        <nav className="bg-emerald-700 text-white">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <div>
                    <h1 className="text-2xl font-bold">
                        FarmaVida
                    </h1>
                </div>

                <div className="flex items-center gap-6">
                    <span>Home</span>
                    <span>Categorias</span>
                    <span>Cadastrar Categoria</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar