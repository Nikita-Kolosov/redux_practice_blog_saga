const defaultState = {
    comments: []
};

export const ADD_COMMENT = 'ADD_COMMENT';
export const ADD_MANY_COMMENTS = 'ADD_MANY_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ASYNC_ADD_COMMENT = 'ASYNC_ADD_COMMENT';
export const ASYNC_REMOVE_COMMENT = 'ASYNC_REMOVE_COMMENT';
export const ASYNC_ADD_MANY_COMMENTS = 'ASYNC_ADD_MANY_COMMENTS';

export const Reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            return {...state, comments: [action.payload, ...state.comments]};
        case ADD_MANY_COMMENTS:
            return {...state, comments: [...action.payload, ...state.comments]};
        case REMOVE_COMMENT:
            return {...state, comments: state.comments.filter(comment => comment.id !== action.payload)};
        default:
            return state;
    }
};

export const addComment = payload => ({ type: ADD_COMMENT, payload });
export const addManyComments = (payload) => ({ type: ADD_MANY_COMMENTS, payload });
export const removeComment = payload => ({ type: REMOVE_COMMENT, payload });
export const asyncAddComment = payload => ({ type: ASYNC_ADD_COMMENT, payload });
export const asyncRemoveComment = payload => ({ type: ASYNC_REMOVE_COMMENT, payload });
export const asyncAddManyComments = () => ({ type: ASYNC_ADD_MANY_COMMENTS });