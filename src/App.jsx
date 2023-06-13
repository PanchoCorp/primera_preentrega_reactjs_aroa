
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a nuestra tienda"} />
    </>
  )
}

export default App
