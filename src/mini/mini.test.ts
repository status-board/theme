import mini from './index';

test('Mini should match snapshot', (): void => {
    expect(mini).toMatchSnapshot();
});
