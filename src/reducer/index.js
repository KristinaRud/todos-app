import * as actions from "../actions";
export const initialState={
    count : 1
}

function reducer(state, action){
    switch (action.type){
        case actions.COUNT_TASKS:
            return {count: state.count + 1};
        default:
            return state;
    }

}

export default reducer;