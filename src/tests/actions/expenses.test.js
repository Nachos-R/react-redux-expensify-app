import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123qwer'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123qwer'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense( '123qwer', {note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123qwer',
        updates: {
            note: 'new note'
        }
    });
});

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'Rent',
        amount: 100500,
        createdAt: 1000,
        note: 'this was last months rent'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',    
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});