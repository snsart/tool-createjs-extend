/**
 * h5切片通用加载器
 * 小学数学
 * @thinlong
 * v2.0
 * 功能:增加了读取common文件夹下文件功能。
 */

var h5_loader = (function(){
	
function h5_loader(){
	
	var index = 0;
	var files = [];
	//所有学科公共文件
	var publicFilePath= '../../xes/common/';
	//该学科通用文件
	var commonFilePath = '../../xes/primary_math/';
	
	var tempPublicFile = [];
	var tempCommonFile = [];
	var tempPrivateFile = [];
	
	var isReady = false;
	var canLoad = false;
	var isLoad = false;

	//判断资源读取的方式
	var XMLHTTP;
	if (window.XMLHttpRequest) { 
		// code for IE7+, Firefox, Chrome, Opera, Safari
	    XMLHTTP = new XMLHttpRequest();
	} else { 
		// code for IE6, IE5
	    XMLHTTP = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	if(XMLHTTP == null)
	{
		alert("Your browser does not support XMLHTTP.");
	}
	else
	{
		XMLHTTP.open("GET",commonFilePath + "js/flag.js",true);
		XMLHTTP.send(null);
	}
	
	XMLHTTP.onreadystatechange=function(){
	    if(XMLHTTP.readyState==4){ 	
	        if(XMLHTTP.status==200){
	            //console.log("xes资源包js");
	        }else{
	            //console.log("网络js");
	            publicFilePath = 'http://kjds2.speiyou.com/courseware/xes/common/';
	            commonFilePath = 'http://kjds2.speiyou.com/courseware/xes/primary_math/';
	        }
	        
	        console.log('开始加载资源包，地址:' + commonFilePath);
	        
	        if(canLoad == true)
	        {
	        	if(isLoad == false)
	        	{
	        		isLoad = true;
	        		composeFiles();
	        		checkProcess();	  
	        	}
	        }
	        
	        isReady = true;
	    }
	}    
	
	//添加单个文件
	function addSingleFile(fPath)
	{
		var index = fPath.indexOf('.js');
		if(fPath.indexOf('.js') == fPath.length - 3)
		{
			//console.log('加载js:' + fPath);
			addJs(fPath);
		}
		else if(fPath.indexOf('.css') == fPath.length - 4)
		{
			//console.log('加载css:' + fPath);
			addCss(fPath);
		}
	}
	
	//添加js
	function addJs(jsPath)
	{
		var j1 = document.createElement('script');
		j1.src = jsPath;	
		document.body.appendChild(j1);
		j1.onload = function(){
			index++;
			checkProcess();
		}
	}
	
	//添加css
	function addCss(cssPath)
	{
		var c1 = document.createElement('link');
		c1.type = "text/css";
		c1.rel = "stylesheet";
		c1.href = cssPath;	
		document.body.appendChild(c1);	
	
		index++;
		checkProcess();
	}
	
	//判断进度
	function checkProcess(){
		if(index >= files.length)
		{
			console.log("资源包全部加载完毕,文件数量:" + index);
		}
		else
		{
			var tempFilePath = files[index];
			addSingleFile(tempFilePath);	
		}
	}
	
	//添加所有学科公用文件 common文件夹下
	this.addPublicFiles = function(fs){
		for(var i = 0; i < fs.length; i++)
		{
			
			var tempFile = fs[i];
			tempPublicFile.push(tempFile);
		}
	}
	
	//添加该学科通用文件 学科文件夹下
	this.addCommonFiles = function(fs){
		for(var i = 0; i < fs.length; i++)
		{
			var tempFile = fs[i];
			tempCommonFile.push(tempFile);
		}
	}
	
	//添加私有文件 课件文件夹下
	this.addPrivateFiles = function(fs){			
		for(var i = 0; i < fs.length; i++)
		{
			var tempFile = fs[i];
			tempPrivateFile.push(tempFile);
		}
	}
	
	//拼合需要引入的文件
	composeFiles = function(){
		for(var k = 0; k < tempPublicFile.length; k++)
		{
			var tempFileA = tempPublicFile[k];
			files.push(publicFilePath + tempFileA);
		}
		
		for(var i = 0; i < tempCommonFile.length; i++)
		{
			var tempFileC = tempCommonFile[i];
			files.push(commonFilePath + tempFileC);
		}
		
		for(var j = 0; j < tempPrivateFile.length; j++)
		{
			var tempFileP = tempPrivateFile[j];
			files.push(tempFileP);
		}
		//console.log("引入的文件:" + files);
	}
	
	this.getPublicFilePath = function(){
		return publicFilePath;	
	}
	
	this.getCommonFilePath = function(){
		return commonFilePath;	
	}
	
	this.load = function(){						
		if(isReady == true)
		{
			if(isLoad == false)
        	{
        		isLoad = true;
        		composeFiles();
        		checkProcess();	  
        	}
		}
		
		canLoad = true;
	}

}

return h5_loader;
})();