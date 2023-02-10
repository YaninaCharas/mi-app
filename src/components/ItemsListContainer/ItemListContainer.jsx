import { useEffect, useState } from "react";
import { productos } from "../../productosMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {

  const [items, setItems] = useState([])

  useEffect( ()=>{
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 500);
    });
  
    task
      .then((res) => {
        setItems( res );
      })
      .catch( (error)=> {
        console.log("aca se rechazo: ", error)
      });
   }, [])


  return (
    <>
      <ItemList items={ items } />
    </>
  );
};

export default ItemListContainer;
