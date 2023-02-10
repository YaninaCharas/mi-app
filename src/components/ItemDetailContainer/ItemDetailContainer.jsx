import React, { useEffect, useState } from 'react'

import { product } from '../../productosMock'


const ItemDetailContainer = () => {

  const [products, setProducts] = useState({})

//   let id = 2

  useEffect( () =>{
    let productSelected = product.find( prod => prod.id === 2)

    setProducts (productSelected)

  }, [])

  console.log(products)

  return (
    <div>{products.title}
    <h1>{products.price}</h1>
    </div>
  )
}

export default ItemDetailContainer