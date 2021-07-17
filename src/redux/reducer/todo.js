  
import {
    TODO_ADD, TODO_LIST
} from '../constant'


const initTheme =
{
    Lists: [],

};

const Todo = (state = initTheme, action) => {
    switch (action.type) {
        case TODO_ADD: {
            return { ...state, Lists: [...state.Lists, action.payload] }
        }
        case TODO_LIST: {
            return { ...state, Lists: action.payload }
        }
        default:
            return state;
    }
};

export default Todo