import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDos = ({ TodosWork, onDelete }) => {
  let ToDoStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container my-3" style={ToDoStyle}>
      <h3 className="text-center my-4">To Dos List</h3>
      <div className="row">
        {TodosWork.length === 0
          ? "All work done!!!!"
          : TodosWork.map((todoItem) => {
              return (
                <React.Fragment key={todoItem.sno}>
                  <ToDoItem todoItem={todoItem} onDelete={onDelete} /> <hr />
                </React.Fragment>
              );
            })}
      </div>
    </div>
  );
};
