import { useState } from 'react';
import './App.css';
import Foo from './components/my-component';

function App() {
  const[value, setValue] = useState(1);

 const add = () => setValue((value + 1));

  return (
    <div className="App">
      <button onClick={add}>Increment Value</button>
      <Foo someProp='this is my message' clock={value}/>      
    </div>
  );
}

export default App;
