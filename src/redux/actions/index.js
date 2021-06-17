
import {
 TODO_LIST
} from '../constant'
import { Userlist} from '../service/todo'
export const Todolist = (data) => async(dispatch) =>
{

    const user = await Userlist()
   
    dispatch({ type: TODO_LIST, payload: user})
        
}
