import React, { useState } from "react";
 
function Zadanie3_7() { 
  const [fruits, setFruits] = useState(["Japko", "Bannan", "Grusza"]); 
  const [task, setTask] = useState(["Zakupy", "Sprzatanie", "Kwantyzowanie"]); 
    
  
  function Zadanie3_7a(){
        function addTag(newFruit) { 
            var DefaultFruit = "NowyOwocek";
          if(newFruit != "")
              {DefaultFruit = newFruit;}
          setFruits(prevTags => [...prevTags, DefaultFruit]); 
        } 
        return (
            <> 
                <p>{fruits.join(", ")}</p> 
                <input type="text" id="inFruit" className="inFruit" placeholder="Dodaj owocek"></input><br></br>
                <button onClick={() => addTag(document.getElementById("inFruit").value)}>Dodaj tag</button> 
                {/* <p>{fruits[3]}</p> */}
            </> 
        );
    }

  function Zadanie3_7b(){
    const deleteTask = (index) => {
        if(index >= 0 && index <= task.length){
        setTask((prevTask) => {
          const newTask = [...prevTask]; 
          newTask.splice(index, 1); 
          return newTask;
        });}
      };

    function renameTask(index, newName){
        if(index > 0 && index <= task.length){
        
            setTask((prevTask) => {
            const newTask = [...prevTask]; 
            newTask.splice(index, 1, newName); 
            return newTask;
          
        })};
    }

    function addTask(index, newName){
        if(index > 0 && index <= task.length){
        
            setTask((prevTask) => {
            const newTask = [...prevTask]; 
            newTask.splice(index, 0, newName); 
            return newTask;
          
        })};
    }

    return(
        <>
            <p>{task.join("\r\n")}</p> 
            <article>
                <input type="number" id="selectIndex" className="selectIndex" placeholder={`Wprowadź index (0 - ${task.length})`} /><br></br>
                <input type="text" id="setName" className="setName" placeholder="Wprowadź nazwe"></input><br></br>
                <button onClick={() => deleteTask(document.getElementById("selectIndex").value)}>Usuń task</button> 
                <button onClick={() => renameTask(document.getElementById("selectIndex").value, document.getElementById("setName").value )}>Zmień nazwe</button> 
                <button onClick={() => addTask(document.getElementById("selectIndex").value, document.getElementById("setName").value ) }>Dodaj task</button> 
            </article>
        </>
    );
  }


 
  return ( 

    <div> 
    <article id="Task1">
        <h3>Task1</h3>
        <Zadanie3_7a/>
    </article>
        <div style={{width: "97%", backgroundColor: "grey"}}/>
    <article id="Task2">
        <h3>Task2</h3>
        <Zadanie3_7b/>
    </article>
    </div> 
); 
} 
export default Zadanie3_7; 
