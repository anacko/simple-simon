import { useState } from 'react';
import './App.css';
import Challenger from './components/Challenger';

function App() {

  const [stage, setStage] = useState(1);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Stage: {stage}</p>

      <Challenger stage={stage}/>
    </div>
  );
}

export default App;
