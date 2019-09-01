import { combineReducers } from "redux";
import { FOCUS_CONTROL, ADD_TO_BUCKET, REMOVE_FROM_BUCKET, SELECT_CONTROL, CHECK_BUCKET_ITEM, RESOLVE_PRODUCTS } from "./actions";


function selected(state = 0, action) {
    switch (action.type) {
        case FOCUS_CONTROL:
            if (action.dir === 'up') {
                return state - 1;
            } else if(action.dir === 'down') {
                return state + 1;
            } else {
                return state;
            }
        default:
            return state;
    }
};

function bucket(state = [], action) {
    switch (action.type) {
        case ADD_TO_BUCKET:
            return [
                ...state,
                {
                    ...action.item,
                    checked: false
                }
            ];
        case REMOVE_FROM_BUCKET:
            const ids = action.items.map(item => item.id);
            return state.filter(item => !ids.includes(item.id));
        case SELECT_CONTROL:
            if(action.kind === 'all') {
                return state.map(item => {
                    return {
                        ...item,
                        checked: true
                    };
                });
            } else if (action.kind === 'none') {
                return state.map(item => {
                    return {
                        ...item,
                        checked: false
                    };
                });
            } else {
                return state;
            }
        case CHECK_BUCKET_ITEM:
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        checked: !item.checked
                    };
                }
                return item;
            });
        default:
            return state;
    }
}

function products(state = [], action) {
    console.log('Something is going on');
    switch (action.type) {
        case ADD_TO_BUCKET:
            return state.filter(item => item.id !== action.item.id);
        case REMOVE_FROM_BUCKET:
            return [
                ...state,
                ...action.items.map(({id, artNo, name, description}) => {
                    return {
                        id,
                        artNo,
                        name,
                        description
                    }
                })
            ];
        case RESOLVE_PRODUCTS:
            if (!action.products) return [];
            return [
                ...action.products
            ];
        default:
            return state;
    }
}

const App = combineReducers({
    selected,
    products,
    bucket
});

export default App;