/**
 * Created by Lee on 2016/12/27.
 */
var socket = io.connect('http://' + window.location.host);
var i=true;
var count = 0;
setInterval(function(){
    if (i){
        socket.emit('m',{f:'ok',n:'1',x:1,y:1,t:'r',e:'t'});
        socket.emit('m1',{f:'ok',n:'1',x:1,y:1,t:'r',e:'t'});
        //socket.emit('message','ok:qwertyuiopasd:7878:9898:test1:test2');
        //socket.emit('message1','ok:qwertyuiopasd:7878:9898:test1:test2');
        count++;
        //console.log(count)
    }
},10);

socket.on('m', function (obj) {

});
socket.on('m1', function (obj) {

});

setTimeout(function () {
    i=false;
    console.log(count);
},5000);
