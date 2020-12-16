import { products } from '../../constants';

const initialState = {
    products
}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;