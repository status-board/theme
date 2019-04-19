import nightBlue from './index';

test('Night Blue should match snapshot', (): void => {
    expect(nightBlue).toMatchSnapshot();
});
