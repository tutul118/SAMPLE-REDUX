const initialState = 0;

// Reducer

export default function reducer(state: number = initialState , action: {type: string;}){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

// Action Creator

export function increment(){
    return {type: 'INCREMENT'};
}
export function decrement(){
    return {type: 'DECREMENT'};
}