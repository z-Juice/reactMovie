import React from 'react'
import Service from '../service/movieService'
import '../css/movieDetail.css';

class Detail extends React.Component {
    constructor () {
        super();
        this.state = {
            movieDetail: {},
            isShow: true
        }
    }

    componentDidMount () {
        let id = this.props.match.params.id;
        this.getMoviedetail(id);
    }

    //获取电影详情数据
    getMoviedetail (id) {
        let that = this;
        Service.getMovieDetail({id: id}).then(function(data){
            that.setState({
                movieDetail: data,
                isShow: false
            })
        })
    }

    //渲染页面
    renderMovieDetail (data) {
        return(
            <div className="movieList_container">
                <span>
                    <img src={data.images.large} alt="" />
                </span>
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.summary}</p>
                </div>
            </div>
            
        )
    }
    
    //无数据时渲染页面
    showMsg () {
        return (
            <h1>正在加载中，请稍后...</h1>
        )
    }

    render () {
        if (this.state.isShow) {
            return this.showMsg();
        } else {
            return this.renderMovieDetail(this.state.movieDetail);
        }
    }
}

export default Detail