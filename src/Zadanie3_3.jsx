import React from "react"; 

function Message(props) { 
  return <p>Cześć: {props.text}</p>; 
} 
function Zadanie3_3(props){
    const name = props.text;
    return(<div>
        <Message text={name}/>
        Losowa liczba: <RandomNumber/>
    </div>);
}
function RandomNumber(){
    let random = Math.random() * (+100 - +1) + +1;
    return random
}
export default Zadanie3_3; 