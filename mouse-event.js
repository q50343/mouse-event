var ball = document.querySelector('.ball');
var arr = [];

// ball move
ball.onmousedown = function(e){

    var grapX = e.offsetX;
    var grapY = e.offsetY;

    document.onmousemove = function (e){
        var _left = e.clientX - grapX;
        var _top = e.clientY - grapY;
        ball.style.transform = 'translate(0%,0%)';
        ball.style.left = _left + 'px';
        ball.style.top = _top + 'px';
        arr.push({left:_left, top:_top});
        
    }
    ball.onmouseup = function (){
        document.onmousemove = null
    }
}

// return
var btn = document.getElementById('button');
btn.onclick = function(){
    var index = arr.length - 1;
    var timer = setInterval(function(){
        
        ball.style.left = arr[index].left+'px';
        ball.style.top = arr[index].top+'px';

        index--;
        if(index < 0){
            clearInterval(timer);
            arr = [];
        }
    },30)
}