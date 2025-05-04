import React from 'react'

export const ToDoItem = ({todoItem, onDelete}) => {
  return (
    <>
    <div className="my-4">
        <h4>{todoItem.sno}. {todoItem.title}</h4>
        <p>{todoItem.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todoItem)}}>Delete</button>
    </div>
    </>
  )
}
