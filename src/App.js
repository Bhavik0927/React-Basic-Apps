import React, { useState, useEffect } from 'react';
import Progress from './Components/Progress';
import './App.css';

const App = () => {

  const [value, setValue] = useState(0);
  const [complete, setComplete] = useState(false);


  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1)
    }, 100);
  })
  return (
    <div className='Container'>
      <span>Progress Bar</span>
      <Progress
        value={value}
        onComplete={() => { setComplete(true) }}
      />
      <span> {complete ? "Completed" : "Loading..."} </span>

    </div>
  )
}

export default App