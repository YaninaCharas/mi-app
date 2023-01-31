
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

const [ contador, setContador ] = useState( initial ) //Tiene 2 parametros [ estado, funcion ]
    const [ mostrar, setMostrar ] = useState(false) // Tipo flag

    const sumar = ()=>{
        if( contador < stock ){

            setContador( contador + 1 )
        }

    }

    const restar = ()=>{
        if( contador > 0 ){
            setContador( contador - 1 )
        }

    }

    const cambiarEstado = ()=>{

        setMostrar( !mostrar )

    }

  return (
    <div>
        <h1 style={{
            color: `${mostrar ? "red" : "blue"}`
        }}>El contador esta en {contador} </h1>
        {/* <h1 className={ mostrar ? "title-true" : "title-false" }>El contador esta en {contador}</h1> */}

        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={cambiarEstado} disabled={ stock === 0 ? true : false}>
            {mostrar ? "Ocultar" : "Mostrar" }
        </button>
        {
            mostrar === true ? <h2>Aca se muestra el texto</h2> : null
        }
        <button onClick={  ()=>onAdd(contador) } >Agregar Al carrito</button>
    </div>
  )
}

export default ItemCount