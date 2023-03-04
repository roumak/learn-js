import './App.css';
import { useState } from 'react';


function App() {
  const [val, setVal] = useState({ name: "roumak" });

  const updateState = (e) => {
    console.log(e.target.value);
    setVal({ name: e.target.value });

  }

  return (
    <div className="App">
      <h1>{val.name}</h1>
      <input name="input" defaultValue={val.name} onChange={updateState} />
    </div>
  );
}
export default App;

