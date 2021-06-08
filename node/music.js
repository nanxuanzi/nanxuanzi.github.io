/*
 
*/
let music ={
    'author':'nanxuanzi',
    list:null,
    prev:null,
    next:null,
    stop:null,
    start:null
}
//歌单信息：id:歌名
music.list = {
    '10086':'歌名',
    '10088':'gee'
}

//上一首
music.prev = function(){
    console.log('prev')
}

//下一首
music.next = function(){
    console.log('next')
}

//停止
music.stop = function(){
    console.log('stop')
}

//播放
music.start = function(){

}

var ids =[]
for (x in music.list){
    ids.push(x)
}
console.log(ids)