import React from 'react'
import { BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'

import Home from '../container/home/'
import Movie from '../container/movie/'
import Ucenter from '../container/ucenter/'

class MainRouter extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className="app_container">
                    <div className="header">
                        <NavLink to="/home" activeClassName="active">首页</NavLink>
                        <NavLink to="/movie" activeClassName="active">电影</NavLink>
                        <NavLink to="/ucenter" activeClassName="active">我的</NavLink>
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