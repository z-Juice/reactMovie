import React from 'react'

class List extends React.Component {
    render () {
        console.log(this.props.match.params)
        return (
            
            <h2>列表</h2>
        )
    }
}

export default List