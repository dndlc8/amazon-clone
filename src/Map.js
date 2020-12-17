import React from 'react';
import { useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Map.css";


export default function Map() {
  const [{basket}, dispatch] = useStateValue();

  let fullBasket= basket.length > 0;

  if (!fullBasket) {
  return( 
    <div className= "map_basket_empty">Your Basket Is Currently Empty</div>
  )
  } else {
    return (
    <div>
      {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating= {item.rating}
            />
          ))} 
    </div>
  )
}
  
}
