import { connect } from 'react-redux'
import Products from '../components/Products'
import { getAllProducts, addToCart } from '../actions'

function mapStateToProps (state) {
    return {
        products: state.products.all
    }
}

// function mapDispatchToProps (dispatch) {
//     return {
//         getAllProducts () {
//             dispatch({
//                 type: 'RECIVE_PRODUCTS',
//                 products: [1, 2, 3]
//             })
//         }
//     }
// }

const mapDispatchToProps = {
    getAllProducts,
    addToCart
}

const ProductsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Products)

export default ProductsContainer