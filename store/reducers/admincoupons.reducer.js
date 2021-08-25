import { ADD_COUPON, LOAD_COUPONS } from '../actions/admincoupons.action';
import Coupon from '../../models/Coupon';

const initialState = {
    coupons: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_COUPON:
            const newCoupon = new Coupon(
                action.payload.id.toString(),
                action.payload.commerceName,
                action.payload.title,
                action.payload.originalPrice,
                action.payload.discountPrice,
                action.payload.description,
                action.payload.imageURL,
                action.payload.category,
                action.payload.featured,
                action.payload.stock,
            )
            return {
                ...state,
                coupons: state.coupons.concat(newCoupon),
            };
        case LOAD_COUPONS:
            return {
                ...state,
                coupons: action.coupons.map(item => new Coupon(
                    item.id.toString(),
                    item.commerceName,
                    item.title,
                    item.originalPrice,
                    item.discountPrice,
                    item.description,
                    item.imageURL,
                    item.category,
                    item.featured,
                    item.stock,
                )),
            }
        default:
            return state;
    }
}