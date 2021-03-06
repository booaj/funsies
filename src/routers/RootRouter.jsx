import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ValueComponent } from '../components/ValueComponent'
import { NestedRouter } from './NestedRouter'

export const RootRouter = () => {
  return (
    <Switch>
      <Route exact path="/one">
        <ValueComponent key="one" test="one"/>
      </Route>
      <Route exact path="/two">
        <ValueComponent key="two" test="two"></ValueComponent>
      </Route>
      <Route path="/three">
        <NestedRouter key="three" test="three"></NestedRouter>
      </Route>
    </Switch>
  )
}

