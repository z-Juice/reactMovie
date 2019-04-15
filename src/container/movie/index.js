import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import List from './list'
import Detail from './detail'
import './movie.css';

class Movie extends React.Component {
    constructor () {
        super();
        this.state = {
            title: '',
            isShow: true
        }
    }

    componentDidMount () {
        
    }

    render () {
        return (
          <div className="movie_container">
              <div className="left">
                  <Link to="/movie/list/in_theaters">正在上映</Link>
                  <Link to="/movie/list/coming_soon">即将上映</Link>
                  <Link to="/movie/list/top250">top250</Link>
              </div>
              <div className="right">
                  <Switch>
                      <Route path="/movie/list/:type" component={List}></Route>
                      <Route path="/movie/detail/:id" component={Detail}></Route>
                      <Route component={List}></Route>
                  </Switch>
              </div>
          </div>
        )
        
    }
}

export default Movie