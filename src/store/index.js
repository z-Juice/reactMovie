import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import products from '../reducers/products'
import cart from '../reducers/cart'

// function reducer( state = { foo : 'bar'}, action = {}) {
//     return state
// }

const rootRudcer = combineReducers({
    products,
    cart
})

const store = createStore(
    rootRudcer,
    applyMiddleware(thunk)
)

export default store