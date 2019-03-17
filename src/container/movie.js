import React from 'react'
import Service from '../service/movieService'

class Movie extends React.Component {
    constructor () {
        super();
        this.state = {
            title: '',
            isShow: true
        }
    }

    componentDidMount () {
        let that = this;
        Service.getMovieList({type: 'in_theaters'}).then(function(data){
            that.setState({
                title: data.title,
                isShow: false
            })
        })
    }

    render () {
        if (this.state.isShow) {
            return (
                <h1>正在加载请稍后...</h1>
            )
        } else {
            return(
                <div>
                    <h2>{this.state.title}</h2>
                    <p></p>
                </div>
            )
        }
    }
}

export default Movie