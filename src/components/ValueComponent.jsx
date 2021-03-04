import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { Button, Input } from 'antd'

import { getters as rootGetters, actions as rootActions } from '../store/rootStore'

export const ValueComponent = observer(({ test }) => {
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
      <Input value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <Button onClick={updateValueClicked}>Update Value</Button>
      <br/><Button onClick={clearStateClicked}>Clear State</Button>
      <br/>Value: {value}
      <br/>{test}
    </div>
  )
})