
(function(){
		var down,moveWindow,Y,y,top,thisObj,go;
		var fObj,fHeight,thisTop,y1,begin;
		moveWindow = $(".move-drag");	
		moveWindow.before("<div style='height:0;clear:both;visibility:hidden;'>.</div>");
		moveWindow.after("<div style='height:0;clear:both;visibility:hidden;'>.</div>");
		moveWindow.mousedown(function(e){
				top = $(this).css("top")=="auto"?0:parseInt($(this).css("top"));
				fObj = $(this).parents(".page-content")[0]||$(this).parents(".innerPage")[0];
				fHeight = fObj.offsetHeight - this.offsetHeight+1000;
				console.log(fHeight)
				Y = e.clientY;
				y1 = Y;
				down = true;
				thisObj = this
				$(this).css({"position":"relative","z-index":51});	
		});	
		$("html").mousemove(function(e){
				if(down){
				  thisTop = (thisObj.offsetTop)*1;
				  y = e.clientY;			
				  if(thisTop<=0&&y-y1<=0){		
				  	y = y1;	
				  }else if(thisTop>=fHeight*1&&y-y1>=0){	
				  	y = y1;
				  }else{
				  	begin = y-Y+top;
				  	if(begin>10||begin<-10){
					  	$(thisObj).css("top",begin);
					  	go = true;	
				 	 }		
					if(-10<begin&&10>begin&&go){
						$(thisObj).css({"top":0,"z-index":39});
						go = false;
					}
					y1 = y;
				  }					  
				}
		});
		$("html").mouseup(function(){
			down = false;
		});
		$("html").find("img").mousedown(function(e){  
    		e.preventDefault()  
   		}); 
   		
    	var initBtn = $("#initBtn");
    	initBtn.click(function(){
    		
    		moveWindow.animate({"top":0},500);
    		moveWindow.css("z-index",0)
    		
    	})
    	
    	var initBtn_mouse=document.getElementById("initBtn")

    	    initBtn_mouse.addEventListener("mousedown",onBtndown)
    	    initBtn_mouse.addEventListener("mouseup",onBtnup)
    	   
    	function onBtndown(e){
    	     initBtn.attr("src","img/fw2.png")
//  		initBtn.css({"width":"0.7rem","height":"0.3rem"})
    	}
    	
    	  	function onBtnup(e){
    	  		 initBtn.attr("src","img/fw.png")
//  		initBtn.css({"width":"0.8rem","height":"0.33rem"})
    	}
    	
})();
$(document).ready(function(){
	handler();	
	$($(".pasteQue_ul").children()[0]).click(function(){
		handler();
	})
});

function handler(){
	var s=$(".content-text").children()[0];

	if($(s).children().length>1){
		$(".nextQueBtn").css("cssText","display:block !important");
	}
	
	var a=$(s).find(".innerPage");
	for(var i=0;i<a.length;i++){
		$(a[i]).css('display','none');
	}
	$(a[0]).css('display','block');
	console.log($(".pasteQue_ul").children()[0]);
}
