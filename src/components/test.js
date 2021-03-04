import React, { useState } from 'react'
import { observer } from 'mobx-react'
import store from '../store/test'

export const Test = observer(() => {
  const [input, setInput] = useState('')
  const { state, setTest } = store

  const doThing = () => {
    setTest(input)
  }

  return (
    <div>
      <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
      <button onClick={doThing}>test</button>
      test val: {state.test}
    </div>
  )
})