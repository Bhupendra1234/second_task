import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import AddTodo from './add-todo/index'
import ListTodo from './list-todo'

const Todo = () => {
  
    return (
        <Router>
        <Switch>
            <Route path={`/add-todo`} component={AddTodo} />
            <Route path={`/`} exact component={ListTodo} />
        </Switch>
        </Router>
    )
}

export default Todo