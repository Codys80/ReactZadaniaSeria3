import React, { useState } from "react"; 

function Zadanie3_6() { 
  
    const [orderDetails, setOrderDetails] = useState(
        {
            productName: "default",
            quantity: "default",
            customer: "default",
            name : "default",
            address: "default"
        }
    );
  const [user, setUser] = useState({
     email: "admin", 
     password: "admin" 
    });
  function Zadanie3_6a(){
    
    function updateEmail(newUser) { 
      setUser(prevUser => ({ ...prevUser, email: newUser })); 
    }

      return(
      <article style={{textAlign: "left"}}>
          <br></br>
          <input type="text" className="inEmail2" id="inEmail2"></input>
          <button onClick={() => updateEmail(document.getElementById("inEmail2").value)}>Zmień email</button> 

          <p>E-mail: {user.email}</p>  
          <p>Hasło: {user.password} </p> 
      </article>);
}

function Zadanie3_6b() {
    function updateQuanity(newOrderDetails) { 
        setOrderDetails(prevOrderDetails => ({ ...prevOrderDetails, quantity: newOrderDetails })); 
      }
    function updateZip(newOrderDetails) { 
        setOrderDetails(prevOrderDetails => ({ ...prevOrderDetails, address: newOrderDetails })); 
      }
  
    
    return(
    <>
        <p>Nazwa produktu: {orderDetails.productName} </p>
        <p>ilość produktu: {orderDetails.quantity} </p>
        <p>Klient:</p>
            <p>Nazwa klienta: {orderDetails.name} </p>
            <p>Adres [zipcode]: {orderDetails.address} </p>
        
        <div style={{border: "0", width:"97%", display:"initial"}}>
            <div style={{border: "0", float: "left", top:"0", width:"45%"}}>
                <input type="number" className="inQuanity" id="inQuanity"></input>
                <button onClick={() => updateQuanity(document.getElementById("inQuanity").value)}>Zmień ilośc</button>
            </div>
            <div style={{border: "0", float: "left", top:"0", width:"45%"}}>
                <input type="text" className="inZip" id="inZip"></input>
                <button onClick={() => updateZip(document.getElementById("inZip").value)}>Zmień kod pocztowy</button>
            </div>
        </div>
        
        
    </>);
}

return ( 
    <div> 
    <article id="Task1">
      <h3>Task1</h3>
      <Zadanie3_6a/>
    </article>
      <div style={{width: "97%", backgroundColor: "grey"}}/>
    <article id="Task2">
        <h3>Task2</h3>
        <Zadanie3_6b/>
    </article>
    </div> 
  ); 
} 
export default Zadanie3_6; 