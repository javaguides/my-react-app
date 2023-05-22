import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [name, setName] = useState('Rahul');
  const [team, setTeam] = useState('RCB');
  const [age, setAge] = useState(28);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleNameChange = () => {
    const newName = prompt('Enter new name:');
    if (newName) {
      setName(newName);
    }
  };

  const handleTeamChange = () => {
    const newTeam = prompt('Enter new team:');
    if (newTeam) {
      setTeam(parseInt(newTeam));
    }
  };

  const handleAgeChange = () => {
    const newAge = prompt('Enter new age:');
    if(newAge){
      setAge(newAge)
    }
  };

  const incrementArray = () => {
    const incrementedArray = [...numbers, numbers.length + 1];
    setNumbers(incrementedArray);
  };

  return (
<div style={{ display: 'flex', justifyContent: 'space-between' }}>

    <div >
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>

<hr />
     <div >
      <p>Name: {name}</p>
      <button onClick={handleNameChange}>Change Name</button>
      <p>Team: {team}</p>
      <button onClick={handleTeamChange}>Change Team</button>
      <p>Age: {age}</p>
      <button onClick={handleAgeChange}>Change Age</button>
      </div>
<hr />
      <div >
        <p>Array:</p>
        <div style={{ display: 'flex' }}>
          {numbers.map((number, index) => (
            <div key={index} style={{ border: '1px solid gray', padding: '5px', margin: '5px' }}>
              {number}
            </div>
          ))}
        </div>
        <button onClick={incrementArray}>Increment Array</button>
      </div>

    </div>
  );
}

export default App;
