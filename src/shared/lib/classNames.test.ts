import { classNames } from './classNames';

describe('classNames', () => {
    test('only first class', () => {
        expect(classNames('name')).toBe('name');
    });

    const secondTestExpected = 'classname one two';
    test('with additional', () => {
        expect(classNames('classname', {}, ['one', 'two'])).toBe(
            secondTestExpected,
        );
    });

    const thirdTestExpected = 'classname one two bag';
    test('with mods', () => {
        expect(
            classNames('classname', { bag: true, only: false }, ['one', 'two']),
        ).toBe(thirdTestExpected);
    });
});
