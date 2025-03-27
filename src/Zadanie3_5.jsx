import React, { useState } from "react"; 

function Zadanie3_5() { 
  
  const [product, setProduct] = useState({ title: "Produkt", price: 0 }); 
  const [user, setUser] = useState({ email: "admin", password: "admin", notification: false });
  function Zadanie3_5a(){
    function updatePrice(newPrice) { 
      setProduct(prevProduct => ({ ...prevProduct, price: newPrice })); 
    } 
    return(
    <>  
        <p>{product.title} - {product.price} zł</p> 

        <input type="text" className="inPrice" id="inPrice" placeholder="0"></input>
        <br></br><br></br>
        <button onClick={() => updatePrice(document.getElementById("inPrice").value)}>Zmień cene</button> 
    </>);
  }
  function Zadanie3_5b(){
    function updateEmail(newUser) { 
      setUser(prevUser => ({ ...prevUser, email: newUser })); 
    }
    function updatePassword(newUser) { 
      setUser(prevUser => ({ ...prevUser, password: newUser })); 
    } 
    function handleUser(){
      if(user.notification){
        setUser(prevUser => ({ ...prevUser, notification: false }))
      }
      else{
        setUser(prevUser => ({ ...prevUser, notification: true }))
      }
    }
      return(
      <article style={{textAlign: "left"}}>
          <br></br>
          <input type="password" className="inPassword" id="inPassword"></input>
          <button onClick={() => updatePassword(document.getElementById("inPassword").value)}>Zmień hasło</button> 
          <br></br>
          <input type="text" className="inEmail" id="inEmail"></input>
          <button onClick={() => updateEmail(document.getElementById("inEmail").value)}>Zmień email</button> 
          <br></br>
          <button onClick={ () => handleUser() } >Powiadom</button>
          <br></br>

          <p>E-mail: {user.email}</p>  
          <p>Hasło: {user.password} </p> 
          <p>Powiadomienia: {user.notification ? "włączone" : "wyłączone"}</p>
      </article>);
}
 

return ( 
    <div> 
      <h3>Task1</h3>
      <Zadanie3_5a/>
      <div style={{width: "97%", backgroundColor: "grey"}}/>
      <h3>Task2</h3>
      <Zadanie3_5b/>
    </div> 
  ); 
} 
export default Zadanie3_5; 