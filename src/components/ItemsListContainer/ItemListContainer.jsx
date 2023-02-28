import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productos } from "../../productosMock";
import ItemList from "../ItemList/ItemList";

/* Acceso a la BBDD*/
// import { db } from "../../firebaseConfig";
// import { getDocs, collection } from "firebase/firestore";

// const ItemListContainer = () => {
//   const { categid } = useParams();
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     const itemCollection = collection(db, "productos");
//     getDocs(itemCollection)
//       .then((res) => {
//         const products = res.docs.map((product) => {
//           return {
//             ...product.data(),
//             id: product.id,
//           };
//         });
//         setItems(products);
//       })
//       .catch((err) => console.log("error" + err));
//   }, [categid]);

/* DESCOMENTAR CLASE 9*/
const ItemListContainer = () => {
  const { categid } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const productSelected = productos.filter(
      (product) => product.category === categid
    );

    const task = new Promise((resolve, reject) => {
      resolve(categid ? productSelected : productos);
    });

    task
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log("aca se rechazo: ", error);
      });
  }, [categid]);

  return (
    <>
      <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
