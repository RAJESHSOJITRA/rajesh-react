import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItems from "./Component/TodoItems";
import "./App.css";

// IN this TODOAPP1
// Breack The code into the Components  also import export
// first create todo heading and table using bootstrap than divided into the subcomponent
function App() {
  const todoItems=  [
  {  name:"Phone",
    dueDate:"17/10/23",
  },
  {  name:"goto Home",
  dueDate:"17/10/23",
},
{  name:"Like this Video",
dueDate:"Right Now",
},
  ];  


  return (
    <>
      <center className="Todo-container">
        <AppName />
        <AddTodo /> 
    <TodoItems todoItems={todoItems} ></TodoItems>
      </center>
    </>
  );
} 
export default App;






