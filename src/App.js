
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";

function App() {
let nombreUsuario = "Yanina"

  return (
    <div className="App">
      <Layout>
        <Header/>  
        <ItemListContainer usuario={nombreUsuario} apellido="Charas" edad={51} />
      </Layout>
    </div>
  );
}

export default App;
