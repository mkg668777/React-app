import { useState } from "react";
import './App.css'
import Header from './Header';
import Electronic from './Electronic';

function App() {
const [cart , setCart] = useState([]);

  return (
    <>
    <Header cart={cart} />
    <Electronic cart={cart} setCart={setCart} />
    
    </>
  )
}

export default App;
