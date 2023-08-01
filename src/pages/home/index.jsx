import { BrowserRouter, Route, Routes } from "react-router-dom"
import LabelBottomNavigation from "../../components/Category/Category"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import ButtonAppBar from "../../components/NavBar/NavBar"
import ItemDetailContainer from "../../components/ItemListContainer/ItemDetailContainer"
import { CartContext } from "../../context/CartContext"
import { useEffect, useState } from "react"
import Carrito from "../../components/Carrito/Carrito"
import Checkout from "../../components/Checkout/Checkout"

const Home = () => {

    const [cantidadCarrito, setCantidadCarrito] = useState(0)

    const [carrito, setCarrito] = useState([])
   
    useEffect(() => {
        setCantidadCarrito(carrito.reduce((acum, objeto) => acum + objeto.cantidad, 0))
    }, [carrito])

    const totalCarrito = () => {
        return carrito.reduce((acum, objeto) => acum + objeto.precio * objeto.cantidad, 0)
    }
         
    const vaciarCarrito = () => {
        setCarrito([])
    }

    return(
        <CartContext.Provider value={{carrito, setCarrito ,cantidadCarrito, totalCarrito, vaciarCarrito }}>    
            <BrowserRouter>
                <ButtonAppBar />
                <LabelBottomNavigation /> 
                <Routes>
                    <Route path="/" element={<ItemListContainer titulo='PRODUCTOS'/>} />
                    <Route path="category/:id" element={<ItemListContainer />} />
                    <Route path="item/:id" element={<ItemDetailContainer />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>

            </BrowserRouter>
            </CartContext.Provider>
    )
}

export default Home