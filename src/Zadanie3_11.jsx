import { useState } from "react";

function Zadanie3_11(){
    const [book, setBook] = useState({ id: 1, author: { name: "Alice" } }); 
    const [item, setCart] = useState([  { id: 1,  name:"Produkt1", quantity: 0  },
                                        { id: 2,  name:"Produkt1", quantity: 10 }
                                    ]); 
    function Zadanie3_11a() { 
        function renameBook(newName){
        setBook(prevBook => ({       
          ...prevBook,       
          author: { ...prevBook.author, name: newName }       
        }))};

        return(
            <>
                {book.author.name}
                <input type="text" id="setName2" className="setName22" placeholder="Wprowadź nazwe"></input><br></br>
                <button onClick={() => renameBook(document.getElementById("setName2").value )}>Zmień nazwe</button> 
            </>);
    } 

    function Zadanie3_11b() {
        function incrementCart(index){
            setCart(item.map(item =>  
                item.id === index ? { ...item, quantity: item.quantity + 1 } : item 
            ) );
        } 
        return(<>

        <ul>
            <li>{item[0].id}   {item[0].name}   {item[0].quantity} <button onClick={() => incrementCart(1)}>+</button> </li>
            <li>{item[1].id}   {item[1].name}   {item[1].quantity} <button onClick={() => incrementCart(2)}>+</button> </li>
        </ul>
        </>);
      }       

    return(
        <>
            <Zadanie3_11a/>
            <Zadanie3_11b/>
        </>);
}
export default Zadanie3_11