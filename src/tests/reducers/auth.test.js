import authReducer from '../../reducers/auth';

test ('should set user id for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 'id123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);
});

test ('should clear user id for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({uid: 'id123'}, action);
    expect(state).toEqual({});
});