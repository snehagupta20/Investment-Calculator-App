import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  return (
    <div>
      <Header></Header>
      <section id='user-input'>
        <UserInput labelName1={'INITIAL INVESTMENT'} userInput1={'1000'}  labelName2={'ANNUAL INVESTMENT'} userInput2={'1000'}/>
        <UserInput labelName1={'EXPECTED RETURN'} userInput1={'1000'}
         labelName2={'DURATION'} userInput2={'1000'}/>
      </section>
    </div>
  )
}

export default App
