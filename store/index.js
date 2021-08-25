import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import Reactotron from '../ReactotronConfig'
import CategoryReducer from "./reducers/category.reducer";
import CouponReducer from "./reducers/coupon.reducer";
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';
import OrderReducer from './reducers/order.reducer';
import AdminCouponsReducer from './reducers/admincoupons.reducer';

const RootReducer = combineReducers({
        categories: CategoryReducer,
        coupons: CouponReducer,
        cart: CartReducer,
        auth: AuthReducer,
        orders: OrderReducer,
        admincoupons: AdminCouponsReducer,
});

export default createStore(
        RootReducer,
        compose(
                applyMiddleware(thunk),
                Reactotron.createEnhancer(),
              ),
        );