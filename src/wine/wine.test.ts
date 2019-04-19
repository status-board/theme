import wine from './index';

test('Wine should match snapshot', (): void => {
    expect(wine).toMatchSnapshot();
});
