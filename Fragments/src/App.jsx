import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./Components/Fooditems";
import ErorMessage from "./Components/ErorMessage";
import "./App.css";


// 1. Fragment is a Part <React.Fragment>or <> it using for Wrap
// Allows Grouping of multiple element without extra Dom Nodes

//2.map method (render list from array data) (data convert into UI elements)  
// map method for array defined fooditems map using arrow function for item 

//3.Conditional Rendering 1.if elese   2.ternery   3.logical operator

/*4. Passing Data via Props  1.-->short of properties parent-->child
    2.-->Read only by Default   3. -->Mechanism for passing Data
*/
function App() {
  // let fooditem = [];
  let foodItem = [ "Green vegetable", "Salad", "Roti", "Dal", "Milk","Ghee"];
  // let fooditem = [{ test: "hardik", test: "viki" }]
  // let emptymessage= foodItem.length===0 ? <h2>I am  still Hungry</h2>:null;
    
  
  return (
    <>
   
      <h1 className="heading">Healthy Food</h1>
      {/* {foodItem.length===0 && <h2>I am  still Hungry</h2>}
      {emptymessage}   emptymessage instead of  direct put the condition  */}
      <ErorMessage items={foodItem}></ErorMessage>
      <Fooditems items={foodItem}></Fooditems>
     </>
  );
}

export default App;

