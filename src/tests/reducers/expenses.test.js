import expensesReduer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReduer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReduer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReduer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add new expense', () => {
    const expense = {
        id: '4',
        description: 'Some expense',
        note: '',
        amount: 12345,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReduer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id', () => {
    const amount = 20000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    };
    const state = expensesReduer(expenses, action);
    expect(state[0].amount).toBe(amount);
});

test('should not edit expense if id not found', () => {
    const amount = 20000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReduer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReduer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});