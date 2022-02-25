export function setStats(stats) {
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_STATS', stats });
        } catch {
            console.log('could not get stays ');
        }
    };
}
export function setResult(result) {
    console.log(result);
    return async (dispatch) => {
        try {
            dispatch({ type: 'SET_RESULT', result });
        } catch {
            console.log('could not get stays ');
        }
    };
}

