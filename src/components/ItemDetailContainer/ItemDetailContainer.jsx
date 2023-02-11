import { useEffect, useState } from 'react'
import { productos } from '../../productosMock'
import { useParams } from 'react-router-dom'
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

  const {id} = useParams()
  const [product, setProduct] = useState({})

  useEffect( () =>{

    let productSelected = productos.find( prod => prod.id === Number(id))

    setProduct (productSelected)

  }, [id])

  return (
    <div className='container'>
      <h2>{product.title}</h2>
      <img
        src={product.img}
        alt=""
        style={{ width: "10%", height: "auto" }}
      />
      <h3>${product.price}</h3>
    </div>
  )
}

export default ItemDetailContainer