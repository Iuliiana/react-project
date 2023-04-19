import { getQueryParams } from './addQueryParams';

describe('addQueryParams.test', () => {
    test('getQueryParams empty value', () => {
        expect(getQueryParams({ sort: undefined })).toBe('?');
    });
    test('getQueryParams with one param', () => {
        expect(getQueryParams({ sort: 'date' })).toBe('?sort=date');
    });
    test('getQueryParams with two params', () => {
        expect(getQueryParams({ sort: 'date', order: 'asc' })).toBe('?sort=date&order=asc');
    });
    test('getQueryParams one param undefined', () => {
        expect(getQueryParams({ sort: 'date', order: undefined })).toBe('?sort=date');
    });
});
