import React, { useState, useEffect } from 'react';


const List = (props) => {
  
  const list = props.numbers.map((el, i) => {
    let isBoom = ((el % 7 === 0) || (el % 10 === 7)) && el !== 0 
    
    return <li key={i} className={isBoom ? 'boomColor' : null}>{el}</li>
  })
  return <ul>{list}</ul>
}

const Label = (props) => {
  console.log(props)
  return <label className={props.isBoom ? 'boom' : null}>{props.sum}</label>
}

function App() {
  const [numbers, setNumbers] = useState([0]);
  const sum = numbers.reduce((a, b) => a + b, 0)
  const isBoom = ((sum % 7 === 0) || (numbers[numbers.length - 1] % 10 === 7)) && sum !== 0
  console.log(isBoom)
  useEffect(() => {
    isBoom ? document.title = 'Boom!' : document.title = "Counting"
  });

  return (
    <div className="App">
      <div className="control"><button onClick={() =>
        setNumbers(oldArray => [...oldArray, oldArray.length])
      }>Increase</button>
      <Label sum={sum} isBoom={isBoom}/>
      </div>
      <List numbers={numbers} sum={sum} />


    </div>
  );
}

export default App;
