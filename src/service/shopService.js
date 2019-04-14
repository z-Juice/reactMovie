//购物车数据
export const getAllProducts = callback => {
    let _products = [
        { "id": 1, "title": "title1", "price": 1, "inventory": 1 },
        { "id": 2, "title": "title2", "price": 2, "inventory": 2 },
        { "id": 3, "title": "title3", "price": 3, "inventory": 3 }
    ];
    setTimeout(function () {
        callback(_products)
    }, 100)
}

export const buyProducts = (products, callback, errorCallback) => {
    setTimeout(function () {
        Math.random() > 0.5 ? callback() : errorCallback()
    }, 100)
}