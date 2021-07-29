import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { database } from "../../firebase/firebase";
import { CartContext } from "../../context/CartContext";
import firebase from "firebase/app";
import "firebase/firestore";

export const Form = ({ aggregateItems, itemsPrice, clear }) => {
  const { updateOrderData } = useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const createOrder = (e) => {
    e.preventDefault();

    const buyer = {
      name: name,
      phone: phone,
      mail: mail,
    };

    const itemsToUpdate = database.collection("products").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      aggregateItems.map((i) => i.smartwatch.id)
    );

    const createOrder = (buyer) => {
      const newOrder = {
        buyer: buyer,
        items: aggregateItems,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: itemsPrice,
      };
      return newOrder;
    };

    const addNewOrder = (buyer) => {
      const newOrder = createOrder(buyer);
      const orders = database.collection("orders");
      try {
        orders.add(newOrder).then((doc) => {
          updateOrderData(doc.id);
        });
      } catch (error) {
        console.log("Error al generar comprar");
      }
    };

    itemsToUpdate.get().then((querySnapshot) => {
      const batch = database.batch();
      const outOfStock = [];

      querySnapshot.docs.forEach((docSnapshot, id) => {
        if (docSnapshot.data().stock >= aggregateItems[id].itemCount) {
          batch.update(docSnapshot.ref, {
            stock: docSnapshot.data().stock - aggregateItems[id].itemCount,
          });
        } else {
          outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
        }
      });

      if (outOfStock.length === 0) {
        batch.commit().then(() => {
          database
            .collection("orders")
            .orderBy("date", "desc")
            .limit(1)
            .get()
            .then((querySnapshot) => {
              setOrderNumber(querySnapshot.docs[0].id);
              addNewOrder(buyer);
              setRedirect(true);
              clear();
            });
        });
      }
    });
  };

  return (
    <>
      {redirect ? (
        <Redirect to={`/purchaseMade/${orderNumber}`} />
      ) : (
        <form onSubmit={createOrder}>
          <p>
            <label>Nombre:</label>
            <br></br>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tomas Martinez"
              id="name"
              type="text"
              autoComplete="name"
              enterKeyHint="next"
              required
              autoFocus
            />
          </p>
          <p>
            <label>Teléfono:</label>
            <br></br>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+54 261 542389"
              id="phone"
              type="tel"
              autoComplete="phone"
              enterKeyHint="next"
            />
          </p>
          <p>
            <label>Mail:</label>
            <br></br>
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              placeholder="ejemplo@ejemplo.com"
              id="mail"
              type="email"
              autoComplete="email"
              enterKeyHint="next"
            />
          </p>
          <button
            className="btn btn-outline-success"
            type="submit"
            disabled={name === "" || phone === "" || mail === ""}
          >
            Finalizar Compra
          </button>
        </form>
      )}
    </>
  );
};
