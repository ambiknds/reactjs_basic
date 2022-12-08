import './App.css'
import Button from './components/Button';
import {useState, useEffect} from 'react';

const App = () => {
  const [number, setNumber] = useState();
  const [randomNumber, setRandomNumber] = useState(0);
  const [guess, setGuess] = useState('Take a Random Guess from 1 to 10')
  const [score, setScore] = useState(5);
  const [hint, setHint] = useState('')
  
  // console.log(randomNumber)
  const handleOnChange = (event) => {
    setNumber(event.target.value)
  }
  const randomNumberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setRandomNumber(randomNumber)
  }

  useEffect(randomNumberGenerator, []);

  const handleCheck = () => {
    if(number == randomNumber){
      setGuess('You win')
      setHint('')
    }else{ 
      setGuess('You lose');
      
      if(number > randomNumber){
        setHint('Guess Lower')
      }else{
        setHint('Guess Higher')
      }
      setScore(score -1);
      if(score === 0){
        setGuess('Game over');
        setHint('')
        setScore(0)
       
        setTimeout(() => {
          handleReset()
        }, 10000)
      }

    }
  }
  const handleReset = () => {
    setNumber()
    randomNumberGenerator();
    setGuess('Take a Random Guess from 1 to 10')
    setHint('')
    setScore(5)
  }

  return (
      <div className='container'>
        <div className='heading'>
        <h1 style={{color:'#eee'}}>{guess}</h1>
        <h2 style={{color: '#eee'}}
        >{hint}</h2>
        </div>
        <input value={number} onChange={handleOnChange}
        className='guess' placeholder='Enter Number'/>
        <div className='buttons'>
        <Button click={handleCheck} title='Take a guess'/>
        <Button click={handleReset} title='Play again'/>
        </div>
        <h3 style={{color:'#eee', marginTop:'2rem'}}
        >Score: {score}</h3>
      </div>
  )
}

export default App;