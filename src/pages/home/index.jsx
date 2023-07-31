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

    const [totalCarrito, setTotalCarrito] = useState(0)

    const [carrito, setCarrito] = useState([])
   
    useEffect(() => {
        setTotalCarrito(carrito.reduce((acum, objeto) => acum + objeto.cantidad, 0))
    }, [carrito])
    

    return(
        <CartContext.Provider value={{carrito, setCarrito ,totalCarrito }}>    
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