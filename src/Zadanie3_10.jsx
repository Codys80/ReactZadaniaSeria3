import React, { useState } from "react"; 

function Zadanie3_10() {
  const [count, setCount] = useState(0); 
  const [cartItems, setCartItems] = useState(["Produkt 1", "Produkt 2"]); 
 
  function clearCount() { 
    setCount(0); 
  } 
  function changeValue(flag){
    {flag ? setCount(count+1): setCount(count-1)}
  }
  function clearCart() { 
    setCartItems([]); 
  } 
  function delt(index){
    setCartItems((prevCartItems) => {
      const newCartItems = [...prevCartItems]; 
      newCartItems.splice(index, 1); 
      console.log(newCartItems)
      return newCartItems;
    })
  }

  function Zadanie3_10a({ count, onClear }) { 
    return ( 
      <div>  
          <h2>Licnzik</h2>   
          <h3>{count}</h3>
          <button onClick={() => changeValue(true)}>Dodaj</button>   
          <button onClick={onClear}>Wyczyść licznik</button>   
          <button onClick={() => changeValue(false)}>Usuń</button>   
      </div> 
        ); 
  
    } 

    function Zadanie3_10b() {
        function Zadanie3_10b_Cart({ cartItems, onClear, delt }) { 
        return ( 
          <div> 
              <Zadanie3_10b_NavBar cartCount={cartItems.length} /> 
              <h2>Koszyk</h2>   
                  <ul> 
                  {cartItems.map((item, index) => ( 
                  <li key={index}>{item}  <button onClick={() => delt(index)}>Delt</button>   </li>   
              ))} 
                  </ul> 
              <button onClick={onClear}>Wyczyść koszyk</button>   
          </div> 
            ); 
      
        } 
      function Zadanie3_10b_NavBar({ cartCount }) { 
        return ( 
          <nav> 
            <h1>Sklep</h1> 
            <p>Liczba przedmiotów w koszyku: {cartCount}</p> 
          </nav> 
        ); 
      }  
      return ( 
        <> 
          <Zadanie3_10b_Cart cartItems={cartItems} onClear={clearCart} delt={delt} /> 
        </> 
        ); 
    } 
      
  return ( 
    <div>
      <Zadanie3_10a count={count} onClear={clearCount} />
      <Zadanie3_10b cartItems={cartItems} onClear={clearCart} delt={delt}/> 
    </div> 
    ); 
} 
export default Zadanie3_10