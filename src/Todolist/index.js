import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import AddTodo from './add-todo/index'
import ListTodo from './list-todo'
import EditTodo from './edit-todo';

const Todo = () => {
  
    return (
        <Router>
        <Switch>
            <Route path={`/add-todo`} component={AddTodo} />
            <Route path={`/edit-todo/:id`} exact component={EditTodo} />
            <Route path={`/`} exact component={ListTodo} />
        </Switch>
        </Router>
    )
}

export default Todo