import snow from './index';

test('Snow should match snapshot', (): void => {
    expect(snow).toMatchSnapshot();
});
