import React, { useReducer } from 'react'

function Reducer() {
    const initialState = {
        count: 0,
        incre: 2,
        decre: 2
    }
    function reducer(state, action) {
        switch (action.type) { 
            case "Increment":
                return {
                    ...state,
                    count:state.count + state.incre
                };

            case "Decrement":
                return {
                    ...state,
                    count:state.count - state.decre
                };

            case "Reset":
                return {
                    ...state,
                    count:0
                };

            default:
                return state;
        }
    }
    const [counter, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Count : {counter.count}</h2>
            <button onClick={() => dispatch({ type: "Increment"})}> Increment </button>
            <button onClick={() => dispatch({ type: "Decrement" })}> Decrement </button>
            <button onClick={() => dispatch({ type: "Reset" })}> Reset </button>
        </div>
    )
}

export default Reducer
