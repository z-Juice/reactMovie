import React from 'react'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'

import Home from '../container/home/'
import Movie from '../container/movie/'
import Ucenter from '../container/ucenter/'

class MainRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="app_container">
                    <div className="header">
                        <Link to="/home">首页</Link>
                        <Link to="/movie">电影</Link>
                        <Link to="/ucenter">我的</Link>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/movie" component={Movie}></Route>
                            <Route path="/ucenter" component={Ucenter}></Route>
                            <Redirect exact from='/' to='/home'/>
                            <Route component={Home}></Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default MainRouter