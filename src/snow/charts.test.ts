import charts from './charts';

test('Charts should match snapshot', (): void => {
    expect(charts).toMatchSnapshot();
});
