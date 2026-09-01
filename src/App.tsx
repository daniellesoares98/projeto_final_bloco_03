import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categorias" element={<ListaCategorias />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarcategoria/:id"element={<DeletarCategoria />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App