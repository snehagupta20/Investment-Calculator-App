import React, { useState } from 'react'



const UserInput = ({labelName1, labelName2}) => {

    const [userInput1, setUserInput1] = useState(0);
    const [userInput2, setUserInput2] = useState(0);

    const handleChange1 = (event) => {
        setUserInput1(event.target.value);
    }
    const handleChange2 = (event) => {
        setUserInput2(event.target.value);
    }

  return (
    <div className='input-group'>
        <p>
            <label>{labelName1}</label>
            <input type='number' value={userInput1} onChange={handleChange1} required></input>
        </p>
        <p>
            <label>{labelName2}</label>
            <input type='number' value={userInput2} onChange={handleChange2} required></input>
        </p>
    </div>
  )
}

export default UserInput
