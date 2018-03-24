var myFiles=[
	'js/easeljs.min.js',
	'js/tweenjs.min.js',
	
	'js/createjsExtendInit.js',
  	'js/arrayUtils.js',
   	'js/donghua.js',//flashCC导出来的动画资源
   	'js/game.js',//程序
]
var index=0;
addScripts(myFiles);

function addScripts(myFiles){
	if(index<myFiles.length){
		var script=document.createElement("script");
		script.src=myFiles[index];
		document.body.appendChild(script);
		script.onload=function(){
			index++;
			addScripts(myFiles);
		}
	}	
}


