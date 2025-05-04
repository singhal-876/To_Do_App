import { About } from "./MyComponents/About";
import { AddToDo } from "./MyComponents/AddToDo";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import { ToDos } from "./MyComponents/ToDos";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const initToDoWork = () => {
    const todosWorkCheck = localStorage.getItem("TodosWork");
    if (todosWorkCheck === null) {
      return [];
    } else {
      return JSON.parse(todosWorkCheck);
    }
  };

  const onDelete = (todo) => {
    console.log("I am on delete", todo);
    setTodosWork(
      TodosWork.filter((todoItem) => {
        return todoItem !== todo;
      })
    );
  };

  const addToDo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno=0;
    if (TodosWork.length === 0) {
      sno = 1;
    } else {
      sno = TodosWork[TodosWork.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodosWork([...TodosWork, myTodo]);
    console.log(myTodo);
  };

  const [TodosWork, setTodosWork] = useState(initToDoWork);
  useEffect(() => {
    localStorage.setItem("TodosWork", JSON.stringify(TodosWork));
  }
  , [TodosWork]);
  

  return (
    <>
    <Router>
      <Header title="To Do App" searchBar={true} />
      <Routes>
        <Route exact path="/" element={
          <>
          <AddToDo addToDo={addToDo} />
          <ToDos TodosWork={TodosWork} onDelete={onDelete} />
          </>
        }>
        </Route>
        <Route exact path="/about" element={
          <About/>
        }>
        </Route>
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
