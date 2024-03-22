// Add ,Delete and Edit button for Books
import React, { useState, useEffect } from 'react';
import { Data } from './Components/Data';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    bookName: '',
    Description: '',
    author: '',
    imgsrc: ''
  });

  useEffect(() => {
    setData(Data);
  }, []);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    const index = data.findIndex(item => item.id === formData.id);
    if (index !== -1) {
      const newData = [...data];
      newData[index] = formData;
      setData(newData);
    } else {
      setData([...data, formData]);
    }
    setFormData({
      id: '',
      bookName: '',
      Description: '',
      author: '',
      imgsrc: ''
    });
  };

  const handleDelete = id => {
    setData(data.filter(item => item.id !== id));
  };

  const handleEdit = item => {
    setFormData(item);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Add/Edit Book</h2>
            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>ID:</label>
                <input type="text" className="form-control" name="id" value={formData.id} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Book Name:</label>
                <input type="text" className="form-control" name="bookName" value={formData.bookName} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <input type="text" className="form-control" name="Description" value={formData.Description} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Author:</label>
                <input type="text" className="form-control" name="author" value={formData.author} onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>Image Source:</label>
                <input type="text" className="form-control" name="imgsrc" value={formData.imgsrc} onChange={handleInputChange} />
              </div>
              <button type="submit" className="btn btn-primary">{formData.id ? 'Update' : 'Add'}</button>
            </form>
          </div>
          <div className="col-md-8">
            <h2>Books List</h2>
            <div className="row">
              {data.map(item => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={item.imgsrc} className="card-img-top" alt="" />
                    <div className="card-body">
                      <ul>
                        <li>ID: {item.id}</li>
                        <li>Name: {item.bookName}</li>
                        <li>Description: {item.Description}</li>
                        <li>Author: {item.author}</li>
                      </ul>
                      <button className="btn btn-danger mr-2" onClick={() => handleDelete(item.id)}>Delete</button>
                      <button className="btn btn-info" onClick={() => handleEdit(item)}>Edit</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// Only add and delete books 

// import React, { useState, useEffect } from 'react';
// import { Data } from './Components/Data';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [data, setData] = useState([]);
//   const [formData, setFormData] = useState({
//     id: '',
//     bookName: '',
//     Description: '',
//     author: '',
//     imgsrc: ''
//   });

//   useEffect(() => {
//     setData(Data);
//   }, []);

//   const handleInputChange = event => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFormSubmit = event => {
//     event.preventDefault();
//     setData([...data, formData]);
//     setFormData({
//       id: '',
//       bookName: '',
//       Description: '',
//       author: '',
//       imgsrc: ''
//     });
//   };

//   const handleDelete = id => {
//     setData(data.filter(item => item.id !== id));
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4">
//             <h2>Add Book</h2>
//             <form onSubmit={handleFormSubmit}>
//               <div className="form-group">
//                 <label>ID:</label>
//                 <input type="text" className="form-control" name="id" value={formData.id} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Book Name:</label>
//                 <input type="text" className="form-control" name="bookName" value={formData.bookName} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Description:</label>
//                 <input type="text" className="form-control" name="Description" value={formData.Description} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Author:</label>
//                 <input type="text" className="form-control" name="author" value={formData.author} onChange={handleInputChange} />
//               </div>
//               <div className="form-group">
//                 <label>Image Source:</label>
//                 <input type="text" className="form-control" name="imgsrc" value={formData.imgsrc} onChange={handleInputChange} />
//               </div>
//               <button type="submit" className="btn btn-primary">Add</button>
//             </form>
//           </div>
//           <div className="col-md-8">
//             <h2>Books List</h2>
//             <div className="row">
//               {data.map(item => (
//                 <div key={item.id} className="col-md-4 mb-4">
//                   <div className="card" style={{ width: "18rem" }}>
//                     <img src={item.imgsrc} className="card-img-top" alt="" />
//                     <div className="card-body">
//                       <ul>
//                         <li>ID: {item.id}</li>
//                         <li>Name: {item.bookName}</li>
//                         <li>Description: {item.Description}</li>
//                         <li>Author: {item.author}</li>
//                       </ul>
//                       <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



// Simple component create and take the data 

// import React, { useState, useEffect } from 'react';
// import { Data } from './Components/Data';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     setData(Data);
//   }, []);

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           {data.map(item => (
//             <div key={item.id} className="col-md-4 mb-4">
//               <div className="card" style={{ width: "18rem" }}>
//                 <img src={item.imgsrc} className="card-img-top" alt="" />
//                 <div className="card-body">
//                   <ul><li>{item.id}</li></ul>
//                   <h2 className="card-title">{item.bookName}</h2>
//                   <p className="card-text">{item.Desciption}</p>
//                   <h6 href="#" >Author:-{item.author}</h6>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
