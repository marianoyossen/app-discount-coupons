import * as FileSystem from 'expo-file-system';
import { insertCoupon, fetchCoupons } from '../../db';

export const ADD_COUPON = 'ADD_COUPON';
export const LOAD_COUPONS = 'LOAD_COUPONS';

export const addCoupon = (commerceName, title, originalPrice, discountPrice, description, imageURL, category, featured, stock) => {
    return async dispatch => {
        const fileName = imageURL.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;

        try {
             await FileSystem.moveAsync({
                 from: imageURL,
                 to: Path,
             });

            const result = await insertCoupon(
                commerceName,
                title,
                originalPrice,
                discountPrice,
                description,
                Path,
                category,
                featured,
                stock
            );

            dispatch({
                type: ADD_COUPON,
                payload: { id: result.insertId, commerceName, title, originalPrice, discountPrice, description,  imageURL : Path, category, featured, stock },
            });

        } catch (err) {
            console.log(err.mesage);
            throw err;
        }
    }
}

export const loadCoupons = () => {
    return async dispatch => {
        try {
            const result = await fetchCoupons();
            
            dispatch({ type: LOAD_COUPONS, coupons: result.rows._array });
            
        } catch (error) {
            throw error;
        }
    }
}