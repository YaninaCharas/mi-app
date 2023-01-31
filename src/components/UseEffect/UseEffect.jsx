import { useState, useEffect } from "react";

const UseEffect = () => {
  const [nombreUsuario, setNombreUsuario] = useState("Jorge");
  const [flag, setFlag] = useState(false);
  const [ numeros, setNumeros ] = useState([])
  const [ apellido, setApellido] = useState("")

  const arr = [ 1, 2, 3, 4]

  const cambiarNombre = () => {
    if (nombreUsuario === "Jorge") {
      setNombreUsuario("Pepito");
    } else {
      setNombreUsuario("Jorge");
    }
  };

  const cambiarFlag = () => {
    setFlag(!flag);
  };

//   useEffect(() => {
//     console.log(
//       "Aca se ejecuta siempre que se actualize el componente y tambien cuando se monta"
//     );
//   });

//   useEffect(() => {
//     console.log("Aca se ejecuta cuando el componente se monta");
//   }, []);

//   useEffect(() => {
//     console.log(
//       "Aca se ejecuta cuando el componente se monta y tambien cuando cambia el estado FLAG"
//     );
//   }, [flag]);


  useEffect( ()=>{
    setNumeros( arr )
    setTimeout( ()=>{
        setApellido("Perez")

    }, 2000)
  }, [])

//   console.log("hola");
//   console.log( numeros )

console.log(apellido)
  return (
    <div>
      <h1>Aca Probamos el useEffect</h1>
      <h2>{nombreUsuario}</h2>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
      <button onClick={cambiarFlag}>Cambiar Flag</button>

      <h1>mi apellido es : {apellido}</h1>
    </div>
  );
};

export default UseEffect;
