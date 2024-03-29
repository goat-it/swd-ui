import { DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_RESET, DELETE_PRODUCT_SUCCESS, LIST_PRODUCT_FAIL, LIST_PRODUCT_REQUEST, LIST_PRODUCT_SUCCESS } from "../Constants/ProductConstants";
import { CONFIRM_REQUEST_FAIL, CONFIRM_REQUEST_REQUEST, CONFIRM_REQUEST_SUCCESS } from "../Constants/RequestContants";
import { LIST_STAFF_RESET } from "../Constants/UserConstants";

export const productListReducer = (state = { listProduct: [] }, action) => {
    switch (action.type) {
        case LIST_PRODUCT_REQUEST:
            return { loading: true };
        case LIST_PRODUCT_SUCCESS:
            return { loading: false, listProduct: action.payload };
        case LIST_PRODUCT_FAIL:
            return { loading: false, error: action.payload };
        case LIST_STAFF_RESET:
            return { listProduct: [] };
        default:
            return state;
    }
};


export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_PRODUCT_REQUEST:
            return { loading: true };
        case DELETE_PRODUCT_SUCCESS:
            return { loading: false, success: true };
        case DELETE_PRODUCT_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const confirmRequestReducer = (state = {}, action) => {
    switch (action.type) {
        case CONFIRM_REQUEST_REQUEST:
            return { loading: true };
        case CONFIRM_REQUEST_SUCCESS:
            return { loading: false, success: true };
        case CONFIRM_REQUEST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};