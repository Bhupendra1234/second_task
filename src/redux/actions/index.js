import {
    TODO_ADD, TODO_LIST,TODO_DELETE,TODO_EDIT
} from '../constant'
export const Todolist = (data) => async(dispatch) =>
{

    dispatch({ type: TODO_LIST, payload: data})
        
}

export const Todoadd = (value) => (dispatch) => {
    console.log(value)
    dispatch({ type: TODO_ADD, payload: value })
    

}

export const TodoEdit = (value) => (dispatch) => {
    console.log(value)
    dispatch({ type: TODO_EDIT, payload: value })
    

}

export const TodoDelete = (value) => (dispatch) => {
    console.log(value)
    dispatch({ type: TODO_DELETE, payload: value })
    

}