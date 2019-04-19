import miniKuro from './index';

test('Mini Kuro should match snapshot', (): void => {
    expect(miniKuro).toMatchSnapshot();
});
