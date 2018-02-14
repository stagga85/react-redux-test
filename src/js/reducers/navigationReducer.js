const defaultNavigationState = {
    navItems: [
        {
            id: 1,
            title: 'L1',
            url: '#'
        },
        {
            id: 2,
            title: 'L2',
            url: '#'
        },
        {
            id: 3,
            title: 'L3',
            url: '#'
        }
    ],
    currentlySelected: 0,
    searchTerm: ''
};

export default function navigationReducer (state = defaultNavigationState, action) {
    switch (action.type) {
        case 'NAVIGATION_SEARCH':
            console.log(action.payload);
            state = {...state, searchTerm: action.payload};
            break;
    }

    return state;
};