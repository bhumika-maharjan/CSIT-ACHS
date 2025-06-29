import logo from './logo.svg';
import './App.css';
import './header.js';
import { useState } from 'react';


// export default function App (){

//   const [greeting, setGreeting] = useState(
//     {
//       greet: "Hello",
//       place: "World"
//     }
//   );
// console.log(greeting, setGreeting);

// function updateGreeting() {
//   setGreeting(prevState => {
//     return {...prevState, place: "World-wide Web"}
//   });
// }

// return (
//   <div>
//     <h1>{greeting.greet}, {greeting.place}</h1>
//     <button onClick={updateGreeting}>Update Greeting</button>
//   </div>
// )

// }

// export default function InputComponent() {
//   const [inputText, setText] = useState('Hello');

//   function handleChange(e) {
//     setText(e.target.value);
//   }


// return (
//   <div>
//     <input value={inputText} onChange={handleChange} />
//     <p>You typed : {inputText} </p>
//     <button onClick={() => setText('Hello')}>Reset</button>
//   </div>
// )
// }

export default function RegisterForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: '',
    email: ''
  });


return (
  <>
    <label>
      First Name:  
        <input 
          value={form.firstName}
          onChange={e => {
            setForm({
              ...form, firstName: e.target.value
            });
          }}
          />
    </label>
    <br></br>
    <label>
      Last Name: 
      <input 
        value={form.lastName}
        onChange={e => {
          setForm({
            ...form, lastName: e.target.value
          });
        }}
      />
    </label>
    <br/>
    <label>
      Email:
      <input
        value={form.email}
        onChange={e => {
          setForm({
            ...form, email: e.target.value
          });
        }}
      />
    </label>
  </>
)
}
