import React from "react";
//import FlipMove from 'react-flip-move';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue} from "./StateProvider";
import Map from "./Map";


function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout_title"> Your Shopping Basket</h2>

        <Map />

          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
          {/*CheckoutProduct*/}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
