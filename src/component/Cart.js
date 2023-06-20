import React,{useContext} from 'react'
import { Content } from '../context/Context';

const Cart = () => {
  const { cart, setCart } = useContext(Content);
  let totalPrice = 0;
  cart.map((ele) =>
    totalPrice += ele.price
  )
  console.log('total price',totalPrice);
  return (
    <div>
         <span style={{ width:25}}>My Cart</span>
          <br/>
          <span style={{ width:25}}>Total Price: {totalPrice}</span>
     <div className='products'>
     {
        cart.map((ele, index) =>
        <div className='cart-card' key={index}>
          <div className="product">
          <div className="sec-1">
      <img src={ele.image} alt={ele.category} />
      </div>
    <div className="sec-2">
    <div className="product-name">
      <span>{ele.category}</span>
      </div>
      <div className="product-details">
          <span>₹{ele.price}</span>
          <span>⭐{ele.rating?.rate}</span>
      </div>
      <button onClick={() =>{
              setCart(cart.filter((c) => c.id !== ele.id));
          }}>Remove from Cart</button>
    </div>
          </div>
        </div>
        )
      }
     </div>
    </div>
  )
}

export default Cart