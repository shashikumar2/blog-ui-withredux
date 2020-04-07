const commentsInitialState = []

const commentsReducer = (state = commentsInitialState, action) => {
    switch(action.type) {
        case 'SET_USERS' : {
            return [].concat(action.payload)
        }
        default: {
            // return [...state]
            return [].concat(state)
        }
    }
}

export default commentsReducer