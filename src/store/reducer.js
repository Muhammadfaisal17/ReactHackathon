const INITIATE_STATE = {
    user: {},
    email: {},
};

export default (state = INITIATE_STATE, action) => {

    switch (action.type) {
        case "GETUSER":
            return ({
                ...state,
                user: action.user
            })
        case "GETEMAIL":
            return ({
                ...state,
                email: action.email
            })

        default:
            return state
    }


}