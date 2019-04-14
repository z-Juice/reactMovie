import * as shop from '../service/shopService';

export const reciveProducts = products => ({
    type: 'RECIVE_PRODUCTS',
    products
})

export const addToCart = product => ({
    type: 'ADD_TO_CART',
    product
})

export const getAllProducts = () => dispatch => {
    shop.getAllProducts(products => {
        dispatch(reciveProducts(products))
    })
}

export const setCartItems = items => ({
    type: 'SET_ITEMS',
    items
})

export const setCheckoutStatus = status => ({
    type: 'SET_CHECKOUT_STATUS',
    status
})

export const checkout = (products) => dispatch => {
    //暂存购物车数据
    const savedCartProducts = [...products];
    //清空购物车状态
    dispatch(setCheckoutStatus(null));
    //清空购物车数据
    dispatch(setCartItems([]));
    //处理成功失败
    shop.buyProducts(
        products,
        () => dispatch(setCheckoutStatus('successful')),
        () => {
            dispatch(setCheckoutStatus('fail'));
            dispatch(setCartItems(savedCartProducts));
        }
    )
}