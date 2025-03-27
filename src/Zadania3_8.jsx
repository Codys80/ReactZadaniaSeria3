import React, { useState } from "react"; 
 
function Zadanie3_8() { 
  const [bugs, setBugs] = useState([ 
    { id: 1, title: "Zadanie1", fixed: false }, 
    { id: 2, title: "Zadanie 2", fixed: false } 
  ]); 
  const [users, setUsers] = useState([ 
    { id: 1, name: "User 1", active: false }, 
    { id: 2, name: "User 2", active: false } 
  ]); 

 function Zadanie3_8a(){
    function markAsFixed() { 
        setBugs(prevBugs => prevBugs.map(bug =>  
        bug.id === 1 ? { ...bug, fixed: true } : bug 
        )); 
    } 
    
    return ( 
        <> 
        {bugs.map(bug => ( 
            <p key={bug.id}>{bug.title} - {bug.fixed ? "Ukończony" : "Nieukończony"}</p> 
        ))} 
        <button onClick={markAsFixed}>Ukończ pierwsze zadanie</button> 
        </> 
    ); }

    function Zadanie3_8b(){
        function markAsActive() { 
            setUsers(prevUsers => prevUsers.map(user =>  
            user.id === 1 ? { ...user, active: true } : user 
            )); 
        } 
        
        return ( 
            <> 
            {users.map(users => ( 
                <p key={users.id}>{users.name} - {users.active ? "Aktywny" : "Nieaktywny"}</p> 
            ))} 
            <button onClick={markAsActive}>Aktywuj pierwszego użytkownika</button> 
            </> 
        ); }

  return ( 
    <div> 
    <article id="Task1">
      <h3>Task1</h3>
      <Zadanie3_8a/>
    </article>
      <div style={{width: "97%", backgroundColor: "grey"}}/>
    <article id="Task2">
        <h3>Task2</h3>
        <Zadanie3_8b/>
    </article>
    </div> 
  ); 

} 
export default Zadanie3_8;