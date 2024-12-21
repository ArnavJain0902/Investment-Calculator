import { useState } from "react"
import UserInput from "./components/UserInput"
import Result from "./components/Result"


function App() {

  const [investment , setInvestment] = useState({
    initialInvestment : 10000,
    annualInvestment  : 1200,
    expectedReturn : 6,
    duration : 10
  })



  function handleInput(inputIdentifier,newValue){
    setInvestment(prevInput =>{
        return{
            ...prevInput,
            [inputIdentifier] : +newValue
        }
    })
  }


  return (
    <main>
      <UserInput onChange = {handleInput} investment={investment} />
      {investment.duration <= 0 ? <p className="center">Please enter a valid year</p> : <Result investment={investment} />}
    </main>
  )
}

export default App
