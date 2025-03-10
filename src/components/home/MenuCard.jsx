import React from "react";
import { motion } from "framer-motion";

const MenuCard = ({ itemNum, suppSrc, price, title, handler,delay=0 }) => {
  return (
    <motion.div 
      className="menuCard"
      initial={{
        y: "-100%",
        opacity:0
      }}
      whileInView={{
        y: 0,
        opacity: 1
      }}
      transition={{
        delay
      }}
    >
      <div>Item {itemNum}</div>
      <main>
        <img src={suppSrc} alt={itemNum} />
        <h5>₹{price}</h5>
        <p>{title}</p>
        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
