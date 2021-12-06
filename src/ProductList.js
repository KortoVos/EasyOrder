import "./styles.css";
import Product from "./Product";
import ShoppingCartItem from "./ShoppingCartItem";
import React, { useState } from "react";

export default function ProductList() {
  const products = [
    {
      name: "Glühwein",
      description: "Lecker, Warm und Würzig",
      img:
        "https://image.essen-und-trinken.de/11839242/t/iu/v9/w1440/r1/-/gluehwein-nach-art-des-hauses-6c088e414355aad941644dbf6630e1f5-gluehwein-nach-art-des-hauses-jpg--12249-.jpg"
    },
    {
      name: "Glühwein - Weiß",
      description: "Lecker, Warm und Weiß",
      img:
        "https://img2.kochrezepte.at/use/6/weisser-gluehwein-mit-orangensaft_6696.jpg"
    },
    {
      name: "Glühwein1 - Mit Schuss",
      description: "Lecker, Warm und Weiß",
      img:
        "https://www.cooknsoul.de/wp-content/uploads/2017/10/Gluehwein_mit_Schuss.jpg"
    },
    {
      name: "Glühwein2 - Mit Schuss",
      description: "Lecker, Warm und Weiß",
      img:
        "https://www.cooknsoul.de/wp-content/uploads/2016/10/Gluehwein-Rezepte.jpg"
    },
    {
      name: "Glühwein3 - Mit Schuss",
      description: "Lecker, Warm und Weiß",
      img:
        "https://images.maennersache.de/gluhwein-selber-machen,id=85565c10,b=maennersache,w=1100,rm=sk.jpeg"
    },
    {
      name: "Glühwein4 - Mit Schuss",
      description: "Lecker, Warm und Weiß",
      img:
        "https://images.maennersache.de/gluhwein-selber-machen,id=85565c10,b=maennersache,w=1100,rm=sk.jpeg"
    },
    {
      name: "Glühwein5 - Ohne Schuss",
      description: "Lecker, Warm und Weiß",
      img:
        "https://images.maennersache.de/gluhwein-selber-machen,id=85565c10,b=maennersache,w=1100,rm=sk.jpeg"
    },
    {
      name: "Glühwein6 - Ohne Schuss",
      description: "Lecker, Warm und Weiß",
      img:
        "https://images.maennersache.de/gluhwein-selber-machen,id=85565c10,b=maennersache,w=1100,rm=sk.jpeg"
    }
  ];

  const [shoppingCart, setShoppingCart] = useState([]);

  const handleAddShoppingCart = (cartItem) => {
    setShoppingCart([...shoppingCart, cartItem]);
  };
  const handleEditShoppingCart = (cartItem) => {
    let found = shoppingCart.filter((el) => {
      return el.name !== cartItem.name;
    });
    console.log(found);
    setShoppingCart([...found, cartItem]);
    console.log(shoppingCart);
  };

  const [shoppingCartAmount, setShoppingCartAmount] = useState(0);

  const addToShoppingCart = (element) => {
    let found = shoppingCart.find((el) => {
      return el.name === element.name;
    });
    if (found) {
      console.log("found:" + found);
      found.amount += 1;
      handleEditShoppingCart(found);
    } else {
      console.log("found1:" + found);
      element.amount = 1;
      handleAddShoppingCart(element);
    }
    setShoppingCartAmount(shoppingCartAmount + 1);
    // console.log(shoppingCart);
  };

  return (
    <div className="ProducListContainer">
      <div className="shopHeader">
        <div
          style={{
            padding: "0.5em",
            backgroundColor: "lightgray",
            borderRadius: "5em"
          }}
        >
          <div className="shopLogo"></div>
        </div>
        <h1>Kölner Glühwein</h1>
      </div>
      <div className="ProductList">
        {products.map((prod) => {
          return (
            <Product
              key={prod.name + "soppingCart"}
              onClickFunction={addToShoppingCart}
              refer={prod}
            />
          );
        })}
      </div>
      <div className="ShoppingCart">
        {/* {shoppingCartAmount} */}
        {shoppingCart.map((prod) => {
          return (
            <ShoppingCartItem
              key={prod.name + "item"}
              onClickFunction={addToShoppingCart}
              refer={prod}
            />
          );
        })}
      </div>
    </div>
  );
}
