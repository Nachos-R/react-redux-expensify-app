import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = 'id123';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should login user', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});