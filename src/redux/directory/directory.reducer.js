import { categories } from '../../constants';

const initialState = {
    categories
}

const directoryReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;