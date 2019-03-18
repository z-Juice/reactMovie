import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import Home from '../container/home'
import Movie from '../container/movie'
import Info from '../container/info'

class MainRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="app_container">
                    <div className="header">
                        <Link to="/home">首页</Link>
                        <Link to="/movie">电影</Link>
                        <Link to="/info">我的</Link>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/movie" component={Movie}></Route>
                            <Route path="/info" component={Info}></Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default MainRouter