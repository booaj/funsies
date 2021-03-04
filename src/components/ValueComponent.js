import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { getters as rootGetters, actions as rootActions } from '../store/rootStore'

export const ValueComponent = observer(() => {
  const [input, setInput] = useState('')
  
  const value = rootGetters.getValue()

  const updateValueClicked = () => {
    rootActions.updateValue(input)
  }

  const clearStateClicked = _ => {
    rootActions.clearState()
  }  
  
  return (
    <div>
      <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <button onClick={updateValueClicked}>Update Value</button>
      <br/><button onClick={clearStateClicked}>Clear State</button>
      <br/>Value: {value}
    </div>
  )
})