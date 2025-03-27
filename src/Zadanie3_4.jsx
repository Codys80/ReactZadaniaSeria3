import React, { useState } from "react"; 
 
function Zadanie3_4() { 
  const [count, setCount] = useState(0); 
 
  function handleClick() { 
    setCount(prevCount => prevCount + 1); 
  } 
 
  return  (
    <div> 
      <p>Wiadomość {count}</p> 
      <button onClick={handleClick}>Zwiększ licznik</button> 
    </div> 
  ); 
} 
export default Zadanie3_4; 