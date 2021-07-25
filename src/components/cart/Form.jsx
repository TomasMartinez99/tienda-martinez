import React, { useState } from "react";
import { database } from "../../firebase/firebase";
import firebase from "firebase/app";
import "firebase/firestore";

export const Form = ({ aggregateItems, itemsPrice, clear }) => {
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
      aggregateItems.map((i) => i.smartwatch.itemToShow.id)
    );

    itemsToUpdate.get().then((querySnapshot) => {
      const batch = database.batch();
      const outOfStock = [];

      querySnapshot.docs.forEach((docSnapshot, id) => {
        if (docSnapshot.data().stock >= aggregateItems[id].quantity) {
          batch.update(docSnapshot.ref, {
            stock: docSnapshot.data().stock - aggregateItems[id].quantity,
          });
        } else {
          outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
        }
      });

      if (outOfStock.length === 0) {
        const newOrderReference = database.collection("orders").doc();

        const orderItems = aggregateItems.map((item) => {
          return {
            id: item.item.id,
            title: item.item.name,
            price: item.item.price,
            qty: item.quantity,
          };
        });

        batch.set(newOrderReference, {
          buyer: buyer,
          items: orderItems,
          date: firebase.firestore.Timestamp.fromDate(new Date()),
          total: itemsPrice,
        });
        batch.commit().then(() => {
          database
            .collection("orders")
            .orderBy("date", "desc")
            .limit(1)
            .get()
            .then((querySnapshot) => {
              setOrderNumber(querySnapshot.docs[0].id);
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
        alert("Orden realizada con éxito")
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
            className="formButton"
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
