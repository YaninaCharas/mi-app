import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { DotLoader } from "react-spinners";

/* Acceso a la BBDD*/
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const styles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { categid } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemCollection = collection(db, "productos");

    if (categid) {
      const q = query(itemCollection, where("category", "==", categid));

      getDocs(q)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });

          setItems(products);
        })
        .catch((err) => console.log("error: " + err));
    } else {
      getDocs(itemCollection)
        .then((res) => {
          const products = res.docs.map((product) => {
            return {
              ...product.data(),
              id: product.id,
            };
          });

          setItems(products);
        })
        .catch((err) => console.log("error: " + err));
    }
  }, [categid]);

  return (
    <div>
      {items.length < 1 ? (
        <DotLoader
          color={"purple"}
          cssOverride={styles}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

// <>
//   <ItemList items={items} />
// </>

export default ItemListContainer;
