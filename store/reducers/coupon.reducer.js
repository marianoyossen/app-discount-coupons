import { COUPONS } from "../../data/coupons";
import { SELECT_COUPON, FILTER_COUPON } from "../actions/coupon.action";

const INITIAL_STATE = {
    list:COUPONS,
    filteredCoupons: [],
    selected: null,
}

const CouponReducer = (state = INITIAL_STATE, action) => {
    
    switch (action.type) {
        case SELECT_COUPON:
            return {
                ...state,
                selected: state.list.find(coupon => coupon.id === action.couponID),
            };
        case FILTER_COUPON:
            return {
                ...state,
                filteredCoupons: state.list.filter(coupon => coupon.category === action.categoryID)
            };
        default: 
            return { ...state };
    }
}

export default CouponReducer;

