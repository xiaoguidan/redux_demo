import {
    ADD_TODO,
    TOGGLE_TODO,
    SET_VISIBILITY_FILTER,
    VisibilityFilters
} from "./action";
import {combineReducers} from "redux";

const {SHOW_ALL} = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    if (action.type === SET_VISIBILITY_FILTER) {
        return action.filter;
    } else {
        return state
    }
}

function todos(state = [], action) {
    if (action.type === ADD_TODO) {
        // return [...state,{
        //     text:action.text,
        //     complete:false
        // }]
        return Object.assign({}, state, {
            text: action.text,
            complete: false
        })
    } else if (TOGGLE_TODO) {
        return state.map((todo, index) => {
            if (index === action.index) {
                // return {
                //     ...todo,
                //     complete: !todo.complete
                // }
                return Object.assign({}, todo, {
                    complete: !todo.complete
                })
            }
            return todo
        })
    }else{
        return state
    }
}
const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp
