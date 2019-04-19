import colors from './colors';

test('Colors should match snapshot', (): void => {
    expect(colors).toMatchSnapshot();
});
