import React, { useState } from "react"; 
import { produce } from "immer"; 
 function Zadanie3_9(){

    function Zadanie3_9a() { 
    const [tasks, setTasks] = useState([ 
        { id: 1, title: "Element 1", done: false }, 
        { id: 2, title: "Element 2", done: false } 
    ]); 
    
    function markAsDone() { 
        setTasks(produce(draft => { 
        const task = draft.find(b => b.id === 1); 
        if(task) task.done = true; 

        })); 
    } 
    
    return ( 
        <> 
        {tasks.map(task => ( 
            <p key={task.id}>{task.title} - {task.done ? "Zrobione" : "Jeszcze nie"}</p> 
        ))} 
        <button onClick={markAsDone}>Napraw pierwszy błąd</button> 
        </> 
    ); 
    } 

    function Zadanie3_9b(){ 
        const [products, setProducts] = useState([ 
            { key: 1, name: "Element 1", quanity: 1 }, 
            { key: 2, name: "Element 2", quanity: 0 } 
        ]); 
        
        function addUp() { 
            setProducts(produce(draft => { 
            const product = draft.find(b => b.key === 1); 
           product.quanity+=1; 
            // setProducts((prevProduct) => {
            //     const newProduct = [...prevProduct]; 
            //     // newProduct.quanity++; 
            //     newProduct.splice(0, 1, []);
            //     console.log(newProduct);
            //     return newProduct;
            })); 
        } 
        
        return ( 
            <> 
            {products.map(product => ( 
                <p key={product.key}>{product.name} - {product.quanity}</p> 
            ))} 
            <button onClick={addUp}>Inkrementuj</button> 
            </> 
        ); 
        } 

    return ( 
        <div> 
            <article id="Task1">
                <h3>Task1</h3>
                <Zadanie3_9a/>
            </article>
            <div style={{width: "97%", backgroundColor: "grey"}}/>
            <article id="Task2">
                <h3>Task2</h3>
                <Zadanie3_9b/>
            </article>
        </div> 
    ); 
}
export default Zadanie3_9; 