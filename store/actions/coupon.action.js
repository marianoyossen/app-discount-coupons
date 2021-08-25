export const SELECT_COUPON = 'SELECT_COUPON'
export const FILTER_COUPON = 'FILTER_COUPON'

export const selectCoupon = (id) => ({
    type: SELECT_COUPON,
    couponID: id
})

export const filterCoupon = (id) => ({
    type: FILTER_COUPON,
    categoryID: id
})