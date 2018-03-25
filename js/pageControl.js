var btnUI=document.getElementById("title-btns");
console.log(btnUI);
btnUI.addEventListener("click",function(e){
	var currentTitle=e.target;	
	//当单击标题时才切换页面
	if($(currentTitle).hasClass("title")){
		turnPageTo(currentTitle);
	}
})

//翻到title的页面
function turnPageTo(title){
	//关闭当前页
	var currentPage=getPage($(".selected").index());
	$(currentPage).fadeOut();
	$(currentPage).css("display","none");
	$(".selected").removeClass("selected");
	
	//加入title对应的页
	$(title).addClass("selected");
	var index=$(title).index();
	currentPage=getPage(index);
	$(currentPage).fadeIn();
	$(currentPage).css("display","block");
	
}

//取得element在父元素ul中的索引,发现jquery中存在此API:$(element).index();
function getIndex(element){
	var tags=element.parentNode.getElementsByTagName("li");
	console.log(tags[0]);
	for(var i=0;i<tags.length;i++){	
		if(element==tags[i]){
			console.log(element);
			console.log(tags[i]);
			return i;
			
		}
	}
	return -1;
}

//取得tages中索引为index的tabpage
function getPage(index){
	var pages=$(".pages").find(".tabPage");
	return pages[index];
}
