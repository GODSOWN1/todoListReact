import React, { useState } from 'react';
import "./todolist.css"

export default function TodoList() {

    const [todo, setTodo] = useState("");
    const [list, setList]= useState ([
                                    {id: 1, value: "Football"},
                                    {id:2, value:"Coding"}
                                ]);

    function handleChange(event){
        setTodo(event.target.value);
    }

    function handleAdd(){
        //give a condition for adding items to the list when button is clicked
        
        

        if(todo !== ""){
            const todoItems = {
                id: Math.floor(Math.random()* 1000),
                value: todo,
                
            }
            setList([...list, todoItems])
        }
        
    }

    function handleDelete(value){
        setList(list.filter(item=>item.id !== value))
        
    }

console.log("list",list );

    return (
        <div className="todo">
            <input type="text" name="text" id="text" onChange= {(event)=> handleChange(event)} placeholder="Add Desired task" />
            <button type="button" class="btn btn-primary" onClick={handleAdd}>ADD</button>
        <br />
            
            {list !==[] ?
            <ul>
                {list.map(item => <li > {item.value}<button type="button" class="btn btn-danger" onClick= {()=>handleDelete(item.id)} key={item.id}>Delete</button></li>
                )}
            </ul>
            
            : null}
        </div>
        
        
    );
}

