//获取歌单内的歌曲列表
/**
 歌曲：
    {
        id:null,        //歌曲id
        title:null,     //歌名
        author:null,    //作者
        img:null        //图
    }
 */
let cheerio = require('cheerio')
let axios = require('axios')
let fs = require('fs')
let music = {
    "author":"nanxuanzi",
    "playlist":[]
}

//请求
axios({
    method:'get',
    url:'https://music.163.com/#/playlist?id=6585057993',
    headers:{
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36 Edg/91.0.864.48'   }

}).then(
   function (res){
    $ = cheerio.load(res.data)
    var a = $('span.name a').text()
    console.log(a)
   }
)


//解析 

//获取id

function info(){
    let id,title,author,img
    //获取id
    function getId(){

    }
    
    //获取歌名
    function getTitle(){
    
    }
    
    //获取作者
    function getAuthor(){
    
    }

    //获取封面
    function getCover(){

    }
}
