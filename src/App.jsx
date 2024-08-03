import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid= userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: + newValue,
        };
    });
  }
  return (
    <div>
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {!inputIsValid && <p className="center">Please enter a Duration greater than 0</p>}
      {inputIsValid && <Results input={userInput}></Results>}
    </div>


  )
}

export default App

