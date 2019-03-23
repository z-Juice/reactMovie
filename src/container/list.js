import React from 'react'
import Service from '../service/movieService'
import '../css/movieList.css';

class List extends React.Component {
    constructor () {
        super();
        this.state = {
            movieType: 'in_theaters',
            movieData: {},
            isShow: true
        }
        this.gotoMovie = this.gotoMovie.bind(this);
    }

    componentDidMount () {
        let type = this.props.match.params.type;
        if(type){
            this.getMovieList(type);
        }else{
            this.getMovieList(this.state.movieType);
        }
        
    }

    //在同一个页面相互跳转时触发
    componentWillReceiveProps (nowProps) {
        this.setState({
            isShow: true
        })
        this.getMovieList(nowProps.match.params.type);
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

    //跳转分为两步
    // static contextTypes = {
    //     router: React.PropTypes.object
    // }

    //跳转电影详情页面
    gotoMovie (id) {
        this.props.history.push(`/movie/detail/${id}`)
        // this.context.router.push(`/movie/detail/${id}`)
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
            <div key={item.id} className="item" onClick={()=>{this.gotoMovie(item.id)}}>
                {/* <img src={item.images.medium} alt=""/> */}
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