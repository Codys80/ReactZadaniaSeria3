import { useState } from "react"; 
 
function Zadanie3_2() { 

  const [user, setUser] = useState({ 
    firstName: "Default", 
    lastName: "Defalut", 
  }); 

  const [loadingStatus, setLoadingStatus] = useState(false); 


  function updateName(newName) { 
    setUser(prevUser => ({ ...prevUser, firstName: newName})); 
    } 

  return ( 
    <div> 
      <p>Imię: {user.firstName}</p> 
      <p>Nazwisko: {user.lastName}</p> 
      <br></br>
      <input type="text" className="inText" id="inText"></input>
      <br></br>
      <button onClick={() => updateName(document.getElementById("inText").value)}>Zmień imię</button> 
        <br></br>
        <button onClick={() => setLoadingStatus(!loadingStatus)}>Ładowanie</button>
        <p>{loadingStatus ? "Ładowanie udane": "ładowanie trwa"}</p> 
    </div> 
  ); 
} 
export default Zadanie3_2; 