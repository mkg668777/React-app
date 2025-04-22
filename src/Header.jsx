import "./Header.css";
import { MdOutlineShoppingCart } from "react-icons/md";

function Header({cart}){

    const totalQuantity = cart.reduce((accumulator , current)=>{
        return accumulator + current.quantity ; 
    }, 0);
    
    return( 
    <>
    <div className="navbar">
        <ul>
        <li>UseReducer</li>
        <li id="wishlist" >
            <MdOutlineShoppingCart id="wishlistIcon" />
                <span id="cart-length" style={{cursor:"pointer"}}>{totalQuantity}</span>
        </li>
    </ul>
    </div>
    </>
    )
}
export default Header;