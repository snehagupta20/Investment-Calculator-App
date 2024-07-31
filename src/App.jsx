import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  return (
    <div>
      <Header></Header>
      <section id='user-input'>
        <UserInput labelName1={'INITIAL INVESTMENT'} labelName2={'ANNUAL INVESTMENT'}/>
        <UserInput labelName1={'EXPECTED RETURN'} labelName2={'DURATION'} />
      </section>


    </div>


  )
}

export default App

