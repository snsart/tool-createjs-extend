/*
 * description:对createjs中的Container方法进行扩展，提供了课件制作中元件所需要的常用方法，如拖动、旋转等行为。
 *@author:jinhailiang
 *createDate:2017.11.15
 *updateDate:2018.3.8
 * 2.0新增：将方法改为链式调用；
 * */


var  cjsExd=function(){
	return cjsExd.fn.init;
};

cjsExd.fn=cjsExd.prototype={
	init:function(mc){
		this[0]=mc;
		this.length=1;
		return this;
	},
	length:0
}








var createjsExtend={};

/*取得库中元件
 * @param  libName 库中元件名
 * @return 获得的元件
 * @date:2017.11.23
 */

createjsExtend.createLibMc=function(libName){
	var newMc
	var thisMc = "new lib." +libName+ "()";
	try{
		newMc=eval(thisMc);
	}catch(error){
		throw new Error("请将库元件命名为:"+libName);
	}
	return newMc;
}

/*计算两个元件之间的距离
 * @param  mc1,mc2
 * @return 距离
 * @date:2017.11.23
 */

createjsExtend.getDistance=function(mc1,mc2){
	return Math.sqrt((mc1.x-mc2.x)*(mc1.x-mc2.x)+(mc1.y-mc2.y)*(mc1.y-mc2.y));
}

/*将表对应的度数转化为旋转度数*/
createjsExtend.watchToRota=function(watch){
	if (watch >= 0 && watch <= 270) {
		watch -= 90;
	} else if (watch > 270 && watch < 360) {
		watch -= 450;
	}
	return watch;
}

/*将旋转度数转化为表的度数*/
createjsExtend.rotaToWatch=function(rota) {
	if (rota >= -90 && rota <= 180) {
		rota += 90;
	} else if (rota > -180 && rota < -90) {
		rota += 450
	}
	return rota;
}


/*画扇形 度数按表的度数为标准，即起始点0度为12:00方向.
 * @param shape 一个形状可以让你在显示列表中显示矢量艺术
 * @param startAngle 扇形第一条边的度数
 * @param endAngle 扇形第二条边的度数
 * @param color 扇形填充颜色
 * @r 扇形半径
 * 2017.12.7新增功能
 */

createjsExtend.drawSectorHandToHand=function(shape, startHandAngle, endHandAngle, color,r) {
	var angleH_H= endHandAngle - startHandAngle;
	var sectorAngle;
	var startFrom;

	if (angleH_H < 0) {
		sectorAngle = 360 + angleH_H;
		startFrom = startHandAngle - 90;
	} else {
		sectorAngle = angleH_H;
		startFrom = startHandAngle - 90;
	}
	createjsExtend.drawSector(shape, 0, 0,r, sectorAngle, startFrom, color);
}

/*画扇形 度数按X轴正向为起点.
 * @param shape 一个形状可以让你在显示列表中显示矢量艺术
 * @param x,y,r 扇形圆心偏移位置及扇形半径
 * @param angle 扇形角度
 * @param startFrom 扇形起始角度
 * @color 扇形颜色
 * 2017.12.7新增功能
 */

createjsExtend.drawSector=function(shape, x, y, r, angle, startFrom, color) {
	shape.graphics.clear();
	shape.graphics.beginFill(color);
	shape.graphics.moveTo(x, y);
	
	angle = (Math.abs(angle) > 360) ? 360 : angle;
	startFrom = startFrom * Math.PI / 180;
	
	var x1=r * Math.cos(startFrom);
	var y1=r * Math.sin(startFrom);
	var x2=x1*Math.cos(angle)-y1*Math.sin(angle);
	var y2=y1*Math.cos(angle)+x1*Math.sin(angle);
	var endAngle=startFrom+angle*Math.PI/180;
	
	shape.graphics.lineTo(x1,y1);
	shape.graphics.arc(x,y,r,startFrom,endAngle,false);
	
	if (angle != 360) {
		shape.graphics.lineTo(x, y);
	}
	shape.graphics.endFill(); 
}



/*画多变形.
 * @param shape 一个形状可以让你在显示列表中显示矢量艺术
 * @param points 存储多边形每一个角的位置
 * @param thickness 线条粗细
 * @param strokeColor 线条颜色
 * @fillColor 填充颜色
 * 2017.12.8新增功能
 */

createjsExtend.drawPolygon=function(shape,points,thickness,strokeColor,fillColor) {
	if(points.length<3){
		throw new Error("至少需要三个点");
	}
	shape.graphics.clear();
	shape.graphics.setStrokeStyle(thickness,"round","round");
	shape.graphics.beginStroke(strokeColor);
	shape.graphics.beginFill(fillColor);

	shape.graphics.moveTo(points[0].x, points[0].y);
	for(var i=1;i<points.length;i++){
		shape.graphics.lineTo(points[i].x, points[i].y);
	}
	shape.graphics.lineTo(points[0].x, points[0].y);
	shape.graphics.endFill(); 
}


/******************************createjs.Container 原型方法扩展***********************************/

/*单击当前元件进行连线，当前元件有一个数组属性linkMcs，用来存储所有与其互连的元件,当完成连线时，会发送"drawLine"事件；需用到arrayUtils文件
 * @param targetMc 所要连接的目标元件(影片剪辑)
 * @param stageMc 存储线条的画板(影片剪辑)
 * @param stage 舞台
 * @param thickness 线条粗细
 * @color 线条颜色
 * 2017.12.7新增功能
 */

createjs.Container.prototype.addDrawLineAction=function(targetMc,stageMc,stage,thickness,color){
	
	stage.enableMouseOver(10);
	var mousedown=false;
	var shape;
	var isOver=false;
	var startMc=this;
	
	this.addEventListener("mousedown",function(){
		mousedown=true;
		shape = new createjs.Shape();
		stageMc.addChild(shape);
	})
	
	//当划入目标元件时
	targetMc.addEventListener("mouseover",function(){
		if(mousedown){
			isOver=true;
		}
	})
	
	targetMc.addEventListener("mouseout",function(){
		isOver=false;
	})
	
	//当鼠标移动时
	stage.addEventListener("stagemousemove",function(){
		if(mousedown){
			shape.graphics.clear();
			shape.graphics.setStrokeStyle(thickness, 0, 0, 0, false).beginStroke(color);
			shape.graphics.moveTo(startMc.parent.x+startMc.x-stageMc.x, startMc.parent.y+startMc.y-stageMc.y);
			shape.graphics.lineTo(stage.mouseX-stageMc.x, stage.mouseY-stageMc.y);
		}
	});
	
	//当鼠标抬起时
	stage.addEventListener("stagemouseup",function(){
		mousedown=false;
		if(isOver){
			drawLine(targetMc);
		}else{
			if(shape!=null){
				shape.graphics.clear();
				stage.removeEventListener("stagemousemove");
				stageMc.removeChild(shape);
				shape=null;
			}
		}	
	});
	
	this.drawLine=drawLine;
	
	function drawLine(targetMc){
		if(shape==null){
			shape = new createjs.Shape();
			stageMc.addChild(shape);
		}
		shape.graphics.clear();
		shape.graphics.setStrokeStyle(thickness, 0, 0, 0, false).beginStroke(color);
		shape.graphics.moveTo(startMc.parent.x+startMc.x-stageMc.x, startMc.parent.y+startMc.y-stageMc.y);
		shape.graphics.lineTo(targetMc.parent.x+targetMc.x-stageMc.x, targetMc.parent.y+targetMc.y-stageMc.y);
		stage.removeEventListener("stagemousemove");
		
		//添加已连接的路径
		if(startMc.linkMcs==null||!startMc.linkMcs instanceof(Array)){
			startMc.linkMcs=[];
		}
		
		if(targetMc.linkMcs==null||!targetMc.linkMcs instanceof(Array)){
			targetMc.linkMcs=[];
		}
		
		arrayUtils.addSingleEleToArray(startMc.linkMcs,targetMc);
		arrayUtils.addSingleEleToArray(targetMc.linkMcs,startMc);
		
		startMc.dispatchEvent("drawLine");
		shape=null;
	}
}

/*改变显示对象的填充颜色
 * @param  color 要填充的颜色
 */

createjs.Container.prototype.fillColor=function(color){
	var child=this.children;
	for(var i=0;i<child.length;i++){
		if(child[i].graphics._fill!=null){
			child[i].graphics._fill.style=color;
		}
	}
}

/*改变显示对象的边线颜色
 * @param  color 要填充的颜色
 */
createjs.Container.prototype.strokeColor=function(color){
	var child=this.children;
	for(var i=0;i<child.length;i++){
		if(child[i].graphics._stroke!=null){
			child[i].graphics._stroke.style=color;
		}
	}
}

/*
 * 为显示对象添加拖动行为，可为拖动的对象定义mouseupHandler方法，当鼠标释放时会执行此方法，也可定义moveHandler方法，当鼠标移动时执行此方法；
 * @param rect createjs.Rectangle对象,限定了对象可拖动的范围
 * @param stage 舞台对象，当鼠标在stage上移动时会拖动对象
 * @param center 可选参数，当为true时，鼠标会限定在对象的注册中心点，默认为false
 * @param down 可选参数，规定鼠标初始状态是否按下，默认为false
 * 2017.11.27:添加dragable属性
 */

createjs.Container.prototype.addDragAction=dragAction;
createjs.DisplayObject.prototype.addDragAction=dragAction;

function dragAction(rect,stage,center=false,down=false){
	if(this.dragable==null){
		this.dragable=true;
	}
	var mcdown = down;
	var offsetX;
	var offsetY;
	
	if(center){
		offsetX=0;
		offsetY=0;
	}else{
		offsetX=stage.mouseX-this.x;
		offsetY=stage.mouseY-this.y;
	}
	
	var dragMc=this;
	
	if(this.dragBtn!=null){
		this.dragBtn.addEventListener("mousedown", function(e) {
			mcdown = true;
			offsetX=stage.mouseX-dragMc.x;
			offsetY=stage.mouseY-dragMc.y;
			if(dragMc.mousedownHandler!=null&&dragMc.mousedownHandler instanceof(Function)){
				dragMc.mousedownHandler();
			}
		})
	}else{
		this.addEventListener("mousedown", function(e) {
			mcdown = true;
			if(center){
				offsetX=0;
				offsetY=0;
			}else{
				offsetX=stage.mouseX-dragMc.x;
				offsetY=stage.mouseY-dragMc.y;
			}
			
			if(dragMc.mousedownHandler!=null&&dragMc.mousedownHandler instanceof(Function)){
				dragMc.mousedownHandler();
			}
		})
	}

	stage.addEventListener("stagemousemove", function() {
		if(mcdown&&dragMc.dragable) {
			dragMc.x = Math.max(rect.x, Math.min(rect.x + rect.width, stage.mouseX-offsetX));
			dragMc.y = Math.max(rect.y, Math.min(rect.y + rect.height, stage.mouseY-offsetY));
			if(dragMc.moveHandler!=null&&dragMc.moveHandler instanceof(Function)){
				dragMc.moveHandler();
			}
		}
	})

	stage.addEventListener("stagemouseup", function() {
		if(mcdown&&dragMc.dragable) {
			if(dragMc.mouseupHandler!=null&&dragMc.mouseupHandler instanceof(Function)){
				dragMc.mouseupHandler();
			}
		}
		mcdown=false;
	})
}

/*
 * 为显示对象添加旋转行为，可为旋转的对象定义mouseupHandler方法，当鼠标释放时会执行此方法，也可定义moveHandler方法，当鼠标移动时执行此方法；
 * @param stage 舞台对象，当鼠标在stage上移动时会拖动对象
 */

createjs.Container.prototype.addRotateAction=function(stage){
	var mcdown=false;
	var rotaMc=this;
	if(this.rotaBtn==null){
		this.addEventListener("mousedown",function(){
			mcdown=true;
		});
	}else{
		this.rotaBtn.addEventListener("mousedown",function(){
			mcdown=true;
		});
	}

	stage.addEventListener("stagemousemove", function () {
		if (mcdown) {
			var dx=stage.mouseX-rotaMc.x;
			var dy=stage.mouseY-rotaMc.y;
			var r=Math.atan2(dy,dx)*180/Math.PI;
			rotaMc.rotation=r;
			
			if(rotaMc.moveHandler!=null&&rotaMc.moveHandler instanceof(Function)){
				rotaMc.moveHandler();
			}
		}
	})
	
	stage.addEventListener("stagemouseup", function () {
		if(mcdown) {
			if(rotaMc.mouseupHandler!=null&&rotaMc.mouseupHandler instanceof(Function)){
				rotaMc.mouseupHandler();
			}
		}
		mcdown=false;
	})
}


/*
 * 复制显示对象，必须为要复制的对象添加libName属性，属性值为库中对应元件的名字；
 * @return 新对象
 */

createjs.Container.prototype.copy=function(){
	var newMc;
	if(this.libName==null||this.libName==""){
		throw new Error("请为元件添加libName属性");
	}
	newMc=createjsExtend.createLibMc(this.libName)
	newMc.libName=this.libName;
	return newMc;
}

/*
 * 为数字键盘提供功能
 * 说明：(1)必须将要作为键盘的type类型设置为keyboard；
 * 		(2)若改变输入文本框时，改变该对象的inptTxt属性即可；
 * 		(3)需为键盘提供enterHandler函数，当点击确定键时，会调用此函数；
 * 
 * @param inputTxt 默认的输入文本
 * @param maxLength 输入文本框的最大长度
 */

createjs.Container.prototype.keyboardInit=function(inputTxt,maxLength=3){
	if(this.type==null||this.type!="keyboard"){
		throw new Error("请将元件的type设置为keyboard")
	}
	
	//命名键盘
	for(var i=0;i<=9;i++){
		if(this["key"+i]==null){
			throw new Error("请命名按键key"+i)
		}
		this["key"+i].name="key"+i;	
	}
	if(this.keyd==null||this.keye==null){
		throw new Error("请将删除键和确定键命名为keyd和keye")
	}
	this.keyd.name="keyd";
	this.keye.name="keye";
	
	if(this.enterHandler==null||!this.enterHandler instanceof(Function)){
		throw new Error("需定义enterHander函数，用来处理按确定键时的行为")
	}
	this.inputTxt=inputTxt;
	this.maxLength=maxLength;
	//添加事件
	if(!this.hasEventListener()){
		this.addEventListener("click",keyBoardHandler.bind(this));
	}
	
	function keyBoardHandler(e){
		var btn=e.target;
		var name=btn.name.substr(3,1);
		switch(name){
			case "1":
			case "2":
			case "3":
			case "4":
			case "5":
			case "6":
			case "7":
			case "8":
			case "9":
			case "0":
				if(this.inputTxt.text.length<this.maxLength){
					this.inputTxt.text+=name;
				}
				break;
			case "d":
				this.inputTxt.text="";
				break;
			case "e":
				this.enterHandler();
				break;
		}
	}	
}

/*
 * 吸附
 * @param targetArr 目标
 * @param dis 吸附距离
 */
createjs.Container.prototype.goto=function(targetArr,dis){
	for(var i=0;i<targetArr.length;i++){
		if(createjsExtend.getDistance(this,targetArr[i])<dis){
			this.x=targetArr[i].x;
			this.y=targetArr[i].y;
			return true;
		}
	}
	return false;
}
