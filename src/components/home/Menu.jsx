// import React from "react";
// import MenuCard from "./MenuCard";
// import supp1 from "../../assets/supp1.jpeg";
// import supp2 from "../../assets/supp2.png";
// import supp3 from "../../assets/supp3.jpeg";
// import { useDispatch } from "react-redux";
// import toast from "react-hot-toast";

// const Menu = () => {
//   const dispatch = useDispatch();

//   const addToCartHandler=(itemNum)=>{};
//   switch (itemNum) {
//           case 1:
//             dispatch({ type: "creatineIncrement" });
//             dispatch({ type: "calculatePrice" });
//             toast.success("Added To Cart");
//             break;
//           case 2:
//             dispatch({ type: "wheyprotienisolateIncrement" });
//             dispatch({ type: "calculatePrice" });
//             toast.success("Added To Cart");
//             break;
//           case 3:
//             dispatch({ type: "BCAAIncrement" });
//             dispatch({ type: "calculatePrice" });
//             toast.success("Added To Cart");
//             break;
    
//           default:
//             dispatch({ type: "cheeseBurgerIncrement" });
//             dispatch({ type: "calculatePrice" });
//             toast.success("Added To Cart");
//             break;
//         }
//       };
//   return (
//     <section id="menu">
//       <h1>MENU</h1>
//       <div>
//         <MenuCard
//           itemNum={1}
//           suppSrc={supp1}
//           price={200}
//           title="Creatine Monohydrate"
//           handler={addToCartHandler}
//           delay={0.1}
//         />
//          <MenuCard
//           itemNum={2}
//           suppSrc={supp2}
//           price={1800}
//           title="Isolate Whey Protien"
//           handler={addToCartHandler}
//           delay={0.2}
//         />
//          <MenuCard
//           itemNum={3}
//           suppSrc={supp3}
//           price={500}
//           title="BCAA"
//           handler={addToCartHandler}
//           delay={0.3}
//         />
//       </div>
//     </section>
//   );
// };

// export default Menu;


import React from "react";
import MenuCard from "./MenuCard";
import supp1 from "../../assets/supp1.jpeg";
import supp2 from "../../assets/supp2.png";
import supp3 from "../../assets/supp3.jpeg";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Menu = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (itemNum) => {
     switch (itemNum) {
          case 1:
            dispatch({ type: "creatineIncrement" });
            dispatch({ type: "calculatePrice" });
            toast.success("Added To Cart");
            break;
          case 2:
            dispatch({ type: "wheyprotienisolateIncrement" });
            dispatch({ type: "calculatePrice" });
            toast.success("Added To Cart");
            break;
          case 3:
            dispatch({ type: "BCAAIncrement" });
            dispatch({ type: "calculatePrice" });
            toast.success("Added To Cart");
            break;
    
          default:
            dispatch({ type: "creatineIncrement" });
            dispatch({ type: "calculatePrice" });
            toast.success("Added To Cart");
            break;
        }
      };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          itemNum={1}
          suppSrc={supp1}
          price={200}
          title="Creatine"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          suppSrc={supp2}
          price={1800}
          title="Whey Protien Isolate"
          delay={0.5}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          suppSrc={supp3}
          price={500}
          title="BCAA"
          delay={0.8}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;