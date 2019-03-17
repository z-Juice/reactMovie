/**
 * Created by J on 2017/3/27.
 */
//请求数据 fetch-jsonp来请求数据
import fetchJsonp from 'fetch-jsonp'
export  default {
    //获取电影数据
    //调用方法时传递一个对象
    //type:电影类型如 in_theaters 、 top250
    getMovieList(config){
        let url=`https://api.douban.com/v2/movie/${config.type}`;
       return fetchJsonp(url,{
            jsonpCallback:'callback'
        })
            .then(function (response) {
                return response.json();
            })

    }
}