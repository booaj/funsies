import React from 'react'
import { Route, Switch, Link, useRouteMatch } from 'react-router-dom'
import { Button } from 'antd'

import { ValueComponent } from '../components/ValueComponent'

export const NestedRouter = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Link to={`${url}/four`}>
        <Button type="primary">Four</Button>
      </Link>
      <Switch>
        <Route path={`${path}/four`}>
          <ValueComponent key="four" test="four"></ValueComponent>
        </Route>
      </Switch>
    </>
  )
}

