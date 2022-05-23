import './App.scss';
import React, {useState} from 'react';
import Main from './components/Main';
import Responses from './components/Responses';

function App() {
  const [curKey, putKey] = useState([]);
  const [curValue, putValue] = useState([]);
  

  return (
    <div className="App">
      <Main putValue={putValue} putKey={putKey} />
      <Responses curKey={curKey} curValue={curValue} />
    </div>
  );
}

export default App;

