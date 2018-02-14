export function search (term) {
    return {
        type: 'NAVIGATION_SEARCH',
        payload: term
    }
}
