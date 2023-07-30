import { BrowserRouter, Route, Routes } from "react-router-dom"
import LabelBottomNavigation from "../../components/Category/Category"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import ButtonAppBar from "../../components/NavBar/NavBar"
import ItemDetailContainer from "../../components/ItemListContainer/ItemDetailContainer"
import { CartContext } from "../../context/CartContext"
import { useEffect, useState } from "react"


const Home = () => {

    const [totalCarrito, setTotalCarrito] = useState(0)

    const [carrito, setCarrito] = useState([])
   
    useEffect(() => {
        setTotalCarrito(carrito.reduce((acum, objeto) => acum + objeto.cantidad, 0))
    }, [carrito])
    


    // const agregarAlCarrito = (itemAgregado) => {
    //     setCarrito([...carrito, itemAgregado])

    // }

    return(
        <CartContext.Provider value={{carrito, setCarrito ,totalCarrito }}>    
            <BrowserRouter>
                <ButtonAppBar />
                <LabelBottomNavigation /> 
                <Routes>
                    <Route path="/" element={<ItemListContainer titulo='PRODUCTOS'/>} />
                    <Route path="category/:id" element={<ItemListContainer />} />
                    <Route path="item/:id" element={<ItemDetailContainer />} />
                </Routes>

            </BrowserRouter>
            </CartContext.Provider>
    )
}

export default Home