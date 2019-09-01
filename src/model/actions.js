export const FOCUS_CONTROL = 'FOCUS_CONTROL';
export const ADD_TO_BUCKET = 'ADD_TO_BUCKET';
export const REMOVE_FROM_BUCKET = 'REMOVE_FROM_BUCKET';
export const SELECT_CONTROL = 'SELECT_CONTROL';
export const CHECK_BUCKET_ITEM = 'CHECK_BUCKET_ITEM';
export const RESOLVE_PRODUCTS = 'RESOLVE_PRODUCTS';

export function focusControl(dir) {
    return { type: FOCUS_CONTROL, dir };
};

export function addToBucket(item) {
    return { type: ADD_TO_BUCKET, item };
};

export function removeFromBucket(items) {
    return { type: REMOVE_FROM_BUCKET, items };
};

export function selectControl(kind) {
    return { type: SELECT_CONTROL, kind };
};

export function checkBucketItem(id) {
    return { type: CHECK_BUCKET_ITEM, id }
}

export function resolveProducts(products) {
    return { type: RESOLVE_PRODUCTS, products };
};
