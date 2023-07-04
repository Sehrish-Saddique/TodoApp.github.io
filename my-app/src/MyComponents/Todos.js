import React from 'react'
import {TodoItem} from "./TodoItem";

 export const Todos = (props) => {
  let myliststyle={
     padding:"20px"
  }
  return (
    <div className='container my-3 py-3' style={myliststyle}>
      <h3 className=' my-3'>Todos List</h3>
      {props.todos.length===0?"No Todos to display":
      
        props.todos.map((todo) => {

          return(
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> )
        })
      
      }
    </div>
  )
}
