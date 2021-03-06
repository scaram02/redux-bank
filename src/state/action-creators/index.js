// for smaller apps just house all your actions here
// for bigger apps can of course do multiple files

export const depositMoney = amount => {
    return (dispatch) => {
        dispatch({
        type: "deposit",
        payload: amount
    })
}
}

export const withdrawMoney = amount => {
    return (dispatch) => {
        dispatch({
        type: "withdraw", 
        payload: amount
    })
}
}