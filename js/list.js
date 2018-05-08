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


    //这样循环遍历的var i 传进function里面的永远是最后一个数  -- 用let就可以了 
    for(let i = 0;i<oDeletes.length;i++){



        oDeletes[i].onclick=function(){
          console.log(this)
          console.log(i)
            for(var j = 0;j<oLists.length;j++){
                //循环遍历   List   并且获取List内部的index值是否和删除按钮的一致，，一致则删除
                if (i==oLists[j].attributes.index.value) {
                    oLists[j].remove();
                }
            }
            
        }
    }