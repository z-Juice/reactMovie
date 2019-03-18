import React from 'react'
// import Service from '../service/movieService'
import { Switch, Route, Link } from 'react-router-dom'
import List from '../container/list'
import '../css/movie.css';

class Movie extends React.Component {
    constructor () {
        super();
        this.state = {
            title: '',
            isShow: true
        }
    }

    componentDidMount () {
        // let that = this;
        // Service.getMovieList({type: 'in_theaters'}).then(function(data){
        //     that.setState({
        //         title: data.title,
        //         isShow: false
        //     })
        // })
    }

    render () {
        return (
            <div>
                <div className="movie_container">
                    <div className="left">
                        <Link to="/movie/list/in_theaters">正在上映</Link>
                        <Link to="/movie/list/coming_soon">即将上映</Link>
                        <Link to="/movie/list/top250">top250</Link>
                    </div>
                    <div className="right">
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/movie/list/:type" component={List}></Route>
                </Switch>
            </div>
        )
        // if (this.state.isShow) {
        //     return (
        //         <h1>正在加载请稍后...</h1>
        //     )
        // } else {
        //     return(
        //         <div>
        //             <h2>{this.state.title}</h2>
        //             <p></p>
        //         </div>
        //     )
        // }
    }
}

export default Movie