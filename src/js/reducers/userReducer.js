export default function userReducer (state={
    username: 'andrew',
    password: 'password'
}, action) {
    switch (action.type) {
        case "SET_USER_NAME":
            state = {...state, username: action.payload};
            break;
        case "SET_PASSWORD":
            state = {...state, password: action.payload};
            break;
    }
    return state;
};