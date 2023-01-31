
import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import UseEffect from "./components/UseEffect/UseEffect";

function App() {
let nombreUsuario = "Yanina"

const onAdd = ( cantidad )=>{
  console.log(`se agregaron al carrito ${cantidad} unidades`)
}

  return (
    <div className="App">
      <Layout>
        <Header/>  
        <ItemListContainer usuario={nombreUsuario} apellido="Charas" edad={51} />
        <ItemCount stock={10} initial={2} onAdd={onAdd} />
        <UseEffect />
      </Layout>
    </div>
  );
}

export default App;
