import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import burger1 from "../../assets/burger1.png";
// import burger2 from "../../assets/burger2.png";
// import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const {
    cartItems: {
      creatine: { quantity: creatine },
      wheyprotienisolate: { quantity: wheyprotienisolate },
      BCAA: { quantity: BCAA },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);

  const { cartItems: orderItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({ type: "creatineIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        dispatch({ type: "wheyprotienisolateIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        dispatch({ type: "BCAAIncrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        dispatch({ type: "creatineIncrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (creatine === 0) break;
        dispatch({ type: "creatineDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 2:
        if (wheyprotienisolate === 0) break;
        dispatch({ type: "wheyprotienisolateDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
      case 3:
        if (BCAA === 0) break;
        dispatch({ type: "BCAADecrement" });
        dispatch({ type: "calculatePrice" });
        break;

      default:
        if (creatine === 0) break;
        dispatch({ type: "creatineDecrement" });
        dispatch({ type: "calculatePrice" });
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    console.log("order");
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        subTotal,
        tax,
        shippingCharges,
        total,
      })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Creatine"}
          // img={burger1}
          value={creatine}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Whey protien isolate"}
          // img={burger2}
          value={wheyprotienisolate}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"BCAA"}
          // img={burger3}
          value={BCAA}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{total}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;