import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
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
                  <NavLink to="/movie/list/in_theaters" activeClassName="active">正在上映</NavLink>
                  <NavLink to="/movie/list/coming_soon" activeClassName="active">即将上映</NavLink>
                  <NavLink to="/movie/list/top250" activeClassName="active">top250</NavLink>
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