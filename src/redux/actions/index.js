import {
    TODO_ADD, TODO_LIST
} from '../constant'
export const Todolist = (data) => async(dispatch) =>
{

   
   
    dispatch({ type: TODO_LIST, payload: data})
        
}

export const Todoadd = (value) => (dispatch) => {
    dispatch({ type: TODO_ADD, payload: value })
    

}