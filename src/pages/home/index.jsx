import { BrowserRouter, Route, Routes } from "react-router-dom"
import LabelBottomNavigation from "../../components/Category/Category"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"
import ButtonAppBar from "../../components/NavBar/NavBar"
import ItemDetailContainer from "../../components/ItemListContainer/ItemDetailContainer"
import { CartContext } from "../../context/CartContext"


const Home = () => {

    const carrito = []


    return(
        <CartContext.Provider value={'hola'}>    
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