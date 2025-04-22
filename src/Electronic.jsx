import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Products from "./Products.jsx";
import { useEffect } from "react";
import "./Electronic.css";


function Electronic({cart , setCart}) {
   useEffect(()=>{
    setCart(Products);
   },[]);
    // const [cart, setCart] = useState(Products);
    // const [total,setTotal] = useState(0);

const netPrice = cart.reduce((accumulator, item)=>{
  return accumulator + item.price * item.quantity ;
},0);


const incrementQty = (id)=>{
  setCart((cart) => cart.map((item) =>{
    return item.id === id ? {...item, quantity : item.quantity + 1 } : item ;
   }))
}


const decrementQty = (id)=>{
    setCart((cart) => cart.map((item) =>{
        return item.id === id ? {...item, quantity : item.quantity - 1 } : item ;
       }).filter((item) => item.quantity > 0))
 }

 const removeItem = (id)=>{
     setCart((cart) => cart.filter((item) => item.id !== id ));
 }
    const clearCart = () => {
        setCart([]);
    }
    return (

        <div className="fullpage">
            <h1 id="bag-heading">Your Bag</h1>
            {cart.length === 0 ? (
                <h2>is currently empty</h2>
            ) : (
                <>
                    {cart.map((item) => (

                        <div className="phone-info" key={item.id}>
                            <img className="phone-img" src={item.img} alt={item.title} />
                            <div className="phone-details">
                                <h2>{item.title}</h2>
                                <p>${item.price}</p>
                                <p id="remove" onClick = {()=>removeItem(item.id)} style={{cursor:"pointer"}}>remove</p>
                            </div>
                            <div className="updater">
                                <FaChevronUp className="icon" onClick={()=>incrementQty(item.id)} style={{cursor:"pointer"}} />
                                <p style={{fontSize:"1.5rem"}}>{item.quantity}</p>
                                <FaChevronDown className="icon" onClick={()=>decrementQty(item.id)} style={{cursor:"pointer"}} />

                            </div>
                        </div>
                    ))}


                    <hr style={{ width: "50%" }} />
                    <div className="total">
                        <p>Total</p>
                        <div className="amount">{netPrice}</div>
                    </div>

                    <button id="clear-cart" onClick={clearCart} style={{cursor:"pointer"}}>Clear Cart</button>

                </>
            )
            }
        </div>
    );
}
export default Electronic;
// onClick={()=> MdTextIncrease(item.id)}
// onClick ={() => MdTextDecrease(item.id)}
// onClick={() => removeItem(item.id)}
