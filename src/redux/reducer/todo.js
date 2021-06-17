import {
    TODO_LIST
} from '../constant'


const initTheme =
{
    Lists: [],

};

const Todo = (state = initTheme, action) => {
    console.log(action.payload)
    switch (action.type) {
        case TODO_LIST: {
            return { ...state, Lists: action.payload }
        }
        default:
            return state;
    }
};

export default Todo