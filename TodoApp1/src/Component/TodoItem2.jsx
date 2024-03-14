function TodoItem2() {
    let todoName="Goto Home";
    let todoDate= "17/10/23";
    
    return(
        
        <div className="container ">
            <div className="row item-row ">
               {/* 2nd Row */}
               <div className="col-6">{todoName}</div>
               <div className="col-4">{todoDate}</div>
               <div className="col-2">
                 <button type="button" className="btn btn-danger item-button">
                   Delete
                 </button>
               </div>
             </div>
             </div>
        );
    }

export default TodoItem2;
