// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

//CONSTANTS
//Define a constant for increment and decrement
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
//const: variable that cannot be changed. Usually const variable is uppercase. 


//ACTION CREATORS
//Build action creators for increment and decrement
export function increment(amount) { //action creators always return an object. 
    return {
        type: INCREMENT,
        payload: amount
    }
}

export function decrement(amount) {
    return {
        type: DECREMENT,
        payload: amount
    }
}

let initialState = {
    counter: 0
} //recommends defining key value pair for everything you want to keep track of on your state.

//REDUCER

export default function reducer(state = initialState, action) {
    //Create a switch statement handling increment and decrement
    switch(action.type) { //referencing the type property in the action object. 
        case INCREMENT: 
            let startingValue = state.counter;
            let nextValue = action.payload;
            let val = startingValue + nextValue;
            return Object.assign({}, state, { counter: val }) //use Object.assign your code will always work. Third parameter is the changes that need to be in an object.
        case DECREMENT:
            return Object.assign({}, state, { counter: state.counter - action.payload })
        default: 
            return state;
    }
}