const initialState = {
    data: {},
    stats: { count: "4", site: "" },
    result: ''
};

export function statsReducer(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case 'SET_STATS':
            newState = { ...state, stats: { ...action.stats } }
            break;
        case 'SET_RESULT':
            newState = { ...state, result: action.result }
            break;
        case 'SET_DATA':
            newState = { ...state, data: action.data }
            break;
    }
    return newState;
}
