import { createStore } from "redux";

const myState = [
    'ReactJS',
    'React Native',
    'NodeJS',
    'Redux'
]

function person(state = myState, action) {
    switch (action.type) {
        case 'ADD_TEXT':
            return state.concat([action.newItem]);
        default:
            return state
    }
}


let store = createStore(person);

export default store;