import AppName from "./Component/AppName";
import AddTodo from "./Component/AddTodo";
import TodoItem1 from "./Component/TodoItem1";
import TodoItem2 from "./Component/TodoItem2";
import "./App.css";

// IN this TODOAPP1
// Breack The code into the Components  also import export
// first create todo heading and table using bootstrap than divided into the subcomponent
function App() {
  return (
    <>
      <center className="Todo-container">
        <AppName />
        <AddTodo /> 
        <div className="item-container">
        <TodoItem1 />
        <TodoItem2 />
        </div>
      </center>
    </>
  );
}

export default App;
