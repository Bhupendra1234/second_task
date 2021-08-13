  
import {
    TODO_ADD, TODO_LIST,TODO_DELETE,TODO_EDIT
} from '../constant'


const initTheme =
{
    Lists: [],
    success:false

};

const Todo = (state = initTheme, action) => {
    console.log(action.payload)
    switch (action.type) {
        case TODO_ADD: {
            return { ...state, Lists: [...state.Lists, action.payload]}
        }
        case TODO_LIST: {
            return { ...state, Lists: action.payload }
        }
        case TODO_DELETE:{
            const {Lists} = state;
            let newData =  Lists.filter(data=>data.id!==action.payload)
            return { ...state, Lists: newData}
        }
        case TODO_EDIT:{
            const {Lists} =state;
            let newlist= Lists.map((list) => (list._id === action.payload.id ? action.payload : list))
        return {...state,Lists:newlist}
        }
 
        default:
            return state;
    }
};

export default Todo