import produtoHome from "../../assets/produtos_farmacia/produto_01.png"


function Home () {
    return (
        <main className="min-h-[80vh] bg-emerald-50">
            <section className="container ms-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6 py-20">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-bold text-emerald-900">
                        Bem-vindo à FarmaVida
                    </h1>

                    <p className="text-xl text-gray-600">
                        Cuidado, saúde e bem-estar ao seu alcance.
                    </p>

                    <button className="bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg w-fit hover:bg-emerald-800 cursor-pointer">
                    Ver categorias
                    </button>
                </div>

                <div className="flex items-center justify-center bg-white rounded-3xl shadow-md min-h-80 p-10">
                <img 
                   src={produtoHome}
                   alt="Produto de farmácia"
                   className="w-full max-w-md object-contain"
                />
                </div>
            </section>
        </main>
    )
}

export default Home