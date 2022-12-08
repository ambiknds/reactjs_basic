import './App.css';
import { useState } from 'react';

const App = () => {

  // let number = 100;


  const [count,setCount] = useState(0);

  const appName = "COUNTER APP ";

  const increase = () => {
    setCount(count+1)
  }
  const decrease = () => {
    if(count === 0){
      count = 0;
    }else{
      setCount(count-1)
    }
  }
  return (
    <div className="container">
      <h2
        onClick={() => {
          alert('Heading')
        }}
      >{appName}</h2>

      <div
       style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8758FF',
        marginBlock: '10px',
        paddingInline: '10px',
        borderRadius: '10px',
       }}   
       >
        <h2>
          <span>Count = </span>
        </h2>

        <h2>
          <span>&nbsp;{count}</span>
        </h2>
      </div>
      <div>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>

  );
}

export default App;
