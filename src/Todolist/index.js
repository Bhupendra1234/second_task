import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ListTodo from './list-todo'

const Todo = () => {
    return (
        <Router>
        <Switch>
            <Route path={`/`} exact component={ListTodo} />
        </Switch>
        </Router>
    )
}

export default Todo

