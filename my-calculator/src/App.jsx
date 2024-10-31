
import style from './App.module.css';
import Display from './components/display';
import { ButtonContainer } from './components/button';
import './App.css'
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("")
  // const onButtonClick = (buttonText) => console.log(buttonText);
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  
  return (
    <>
      <h1 className={style.heading}>My Calculator</h1>
    <div className={style.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
    </>
  )
}

export default App
