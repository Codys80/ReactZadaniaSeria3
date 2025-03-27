import { useState } from "react"; 
 
function Zadanie3_1() { 
    const [count, setCount] = useState(0);  
 
  function increment() { 
    setCount(count+1);
    console.log("Aktualna wartość count:", count); 
    }

function Login() { 
    const [isVisible, setisVisible] = useState(true); 
    return(<>
            <button onClick={() => setisVisible(!isVisible)}>Wciśnij</button>
            {isVisible ? <p>zalogowany? 😎👍</p> : <p>zalogowany? 👎😞</p>} 
            </>) 
    }

  return ( 
    <div> 
        <p>Licznik: {count}</p> 
        <button onClick={increment}>Zwiększ</button> 
        <section>{Login()}</section>
    </div> 
  ); 
} 

export default Zadanie3_1;