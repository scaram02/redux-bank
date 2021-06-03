const reducer = (state = 0, action) => { // where state = 0 is the initial state
    // reducers usually use switch statments
    switch(action.type){
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;
    }
}

export default reducer;