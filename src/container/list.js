import React from 'react'
import Service from '../service/movieService'
import '../css/movieList.css';

class List extends React.Component {
    constructor () {
        super();
        this.state = {
            movieData: {},
            isShow: true
        }
    }

    componentDidMount () {
        this.getMovieList(this.props.match.params.type);
    }

    getMovieList (type) {
        let that = this;
        Service.getMovieList({type: type}).then(function(data){
            that.setState({
                movieData: data,
                isShow: false
            })
        })
    }

    //无数据时渲染页面
    showMsg () {
        return (
            <h1>正在加载中，请稍后...</h1>
        )
    }

    //渲染电影列表数据
    renderMovieList (data) {
        let that = this;
        return(
            <div className="movieList_container">
                {
                    data.map(function(ele){
                        return that.renderMovieItem(ele)
                    })  
                }
            </div>
            
        )
    }

    //渲染单条数据
    renderMovieItem (item) {
        return (
            <div key={item.id} className="item">
                <img src={item.images.medium} />
                <div className="right">
                    <h1>{item.title}</h1>
                    <span>{item.year}</span>
                </div>
            </div>
        )
    }

    render () {
        if (this.state.isShow) {
            return this.showMsg();
        } else {
            return this.renderMovieList(this.state.movieData.subjects);
        }
    }
}

export default List