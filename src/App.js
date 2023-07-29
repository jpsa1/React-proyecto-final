import { BrowserRouter, Route, Routes } from "react-router-dom";
import LabelBottomNavigation, { Category } from "./components/Category/Category";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ButtonAppBar from "./components/NavBar/NavBar";
import Home from "./pages/home";

function App() {
  return (
        
    <div className="App">
          <Home />
    </div>
  );
}

export default App;
