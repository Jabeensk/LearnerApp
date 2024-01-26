import React, { useState } from 'react';
import { learnerData } from './data/learnerData';
import './App.css';
import Learner from './components/Learner'; // Import the Learner component


function App() {
  const [learners, setLearners] = useState(learnerData);

  return (
    <div className="App">
      <h1>Learner App</h1>
      {learners.map((learner, index) => (
        <Learner key={index} learner={learner} />
      ))}
    </div>
  );
}

export default App;
