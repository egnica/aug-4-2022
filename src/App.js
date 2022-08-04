import Form from './Form/Form';
import './App.css';
import { useState } from 'react';



function App() {
  const [userObject, setUserObject] = useState({ item:[] });

  const SubmitHandler = (value) => {
   
      let userData = userObject['item']
      userData.push(value);
      setUserObject({ item: userData })
  }

  return (
    <div className="App">
      <Form transferSubmit = {SubmitHandler}/>
   { userObject.item.length !== 0 &&
      <div style={{display:'grid', placeContent:'center'}}>
        <h2>Data</h2>
        <table className="customers">
          <thead>
            <tr>
              <th>Index</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Phone</th>
            </tr>
          </thead>
      { 
        userObject.item.map(
          (person, index) =>
          <tbody key = {index}>
            <tr>
              <td>{index}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.age}</td>
              <td>{person.phone}</td>
            </tr>
          </tbody>

        )
      }
      </table>
      </div>
    }
    </div>
  );
}

export default App;
