import React from 'react'

const UserInput = ({labelName1, userInput1, labelName2, userInput2}) => {
  return (
    <div className='input-group'>
        <p>
            <label>{labelName1}</label>
            <input type='number' value={userInput1} required></input>
        </p>
        <p>
            <label>{labelName2}</label>
            <input type='number' value={userInput2} required></input>
        </p>
    </div>
  )
}

export default UserInput
