import { useState } from 'react';
import './App.css';
import Challenger from './components/Challenger';

function App() {

  const [stage, setStage] = useState(0);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Stage: {stage}</p>

      <button onClick={() => setStage(stage + 1)}>Click Me!</button>

      <Challenger stage={stage}/>
    </div>
  );
}

export default App;
