import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={234} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiply expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={42} expensesTotal={23454656789097} />);
    expect(wrapper).toMatchSnapshot();
});