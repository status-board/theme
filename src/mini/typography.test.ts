import typography from './typography';

test('Typography should match snapshot', (): void => {
    expect(typography).toMatchSnapshot();
});
