import solarizedDark from './index';

test('Solarized Dark should match snapshot', (): void => {
    expect(solarizedDark).toMatchSnapshot();
});
