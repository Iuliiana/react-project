import { classNames } from './classNames';

describe('classNames', () => {
    test('add class', () => {
        expect(classNames('active')).toBe('active');
    });
    test('add additional', () => {
        expect(
            classNames(
                'active',
                {},
                ['color-red', 'color-blue'],
            ),
        ).toBe('active color-red color-blue');
    });

    test('add additional and mods true', () => {
        expect(
            classNames(
                'active',
                { hovered: true, selected: true },
                ['color-red', 'color-blue'],
            ),
        ).toBe('active color-red color-blue hovered selected');
    });

    test('add additional and mods false', () => {
        expect(
            classNames(
                'active',
                { hovered: true, selected: false },
                ['color-red'],
            ),
        ).toBe('active color-red hovered');
    });

    test('add null value', () => {
        expect(
            classNames(
                'active',
                { hovered: undefined },
                ['color-red'],
            ),
        ).toBe('active color-red');
    });
});
