export function getQueryParams(params: OptionalRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) {
            searchParams.set(key, encodeURIComponent(String(value)));
        }
    });
    return `?${searchParams.toString()}`;
}

/**
 * Ф-ция для добавления query-параметров в url
 * @param params
 */
export function addQueryParams(params: OptionalRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params)); // or replaceState
}
