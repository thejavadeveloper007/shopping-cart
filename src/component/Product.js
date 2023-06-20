import { useContext } from "react";
import { Content } from "./../context/Context"
const Product = ({prod}) => {
    console.log('usecontext',useContext(Content));
    const { cart, setCart } = useContext(Content);
  return (
<div className="product">
    <div className="sec-1">
    <img src={prod.image} alt={prod.category} />
    </div>
  <div className="sec-2">
  <div className="product-name">
    <span>{prod.category}</span>
    </div>
    <div className="product-details">
        <span>₹{prod.price}</span>
        <span>⭐{prod.rating?.rate}</span>
    </div>
    {
        !cart.includes(prod.id) ? (
            <button onClick={() =>{
                setCart([...cart, prod]);
            }}>Add to Cart</button>
        )
        :
       (
        <button onClick={() =>{
            setCart(cart.filter((c) => c.id!==prod.id));
        }}>Remove from Cart</button>
       )
    }
  </div>
</div>
  )
}

export default Product;