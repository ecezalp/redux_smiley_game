export default function activeReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_CLICKED_ARRAY':
            return action.payload;
        case 'ADD_SMILEY_TO_CLICKED_ARRAY':
           const newState = [...state, action.payload]
            return newState;
        case 'ADD_FILTERED_TO_CLICKED_ARRAY':
            const filteredState = [...state].concat(action.payload)
            return filteredState;
        default:
            return state;
    }
};
