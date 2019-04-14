import React from 'react'
import Cart from '../container/Cart'
import Products from '../container/Products'

class Home extends React.Component {
    render () {
        return (
           <div>
               <Products />
               <Cart />
           </div>
        )
    }
}

export default Home