import React from 'react'
import Cart from './Cart'
import Products from './Products'
import './home.less'

class Home extends React.Component {
    render () {
        return (
           <div className='home'>
               <Products />
               <Cart />
           </div>
        )
    }
}

export default Home