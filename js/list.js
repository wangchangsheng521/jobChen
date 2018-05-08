  //实现点击播放效果
   var playState=1;
   var playStart = document.querySelector('.playStart');//获取播放按钮
   var oVideo = document.querySelector("video");//获取视频
    //点击实现播放暂停效果
 	playStart.onclick = function(){
 		if (playState==1) {          
           	oVideo.play();
           	playState=0;
  		}else{
            oVideo.pause();
            playState=1;
  		}
 	}
 
    //实现删除功能
    // var oDelete = document.querySelector(".delete");
    // var Olist = document.querySelector("#List");
    // oDelete.onclick = function(){
    // 	Olist.remove();
    // }
    
    var oDeletes = document.querySelectorAll(".delete");//获取所有的删除标签
    var oLists = document.querySelectorAll("#List");
    for(var i = 0;i<oDeletes.length;i++){
        oDeletes[i].onclick=function(){
            for(var j = 0;j<oLists.length;j++){
                if (i==j) {
                    oLists[j].remove();
                }
            }
        }
    }