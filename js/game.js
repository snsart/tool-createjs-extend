var canvas, stage, root;
var initPos=[];
var currentMc;

init();

function init() {
	canvas = document.getElementById("canvas1");
	root = new lib.donghua();

	stage = new createjs.Stage(canvas);
	stage.addChild(root);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
	gameInit()
}

function gameInit(){
	var left=window.screenLeft;
	console.log(left);
	window.moveTo(0,0);
	console.log(left);
	var ss=window.open("https://www.baidu.com");
	console.log(ss);
	//location.href="https://www.baidu.com";
	console.log(navigator.cpuClass);
	console.log(document.childNodes);
	console.log(document.domain);
	
	window.addEventListener("beforeunload",function(e){
		console.log(12345454545445);
		e.returnValue="ok!!!!!!";
		return "ok!!!1";
	})
	
	
	
	//复制拖动行为测试
	
	root.ballMc.libName="ball";
	
	//元件复制
	var ball2=root.ballMc.copy();
	
	//元件拖动
	root.ballMc.addDragAction(new createjs.Rectangle(0,0,930,540),stage);
	ball2.addDragAction(new createjs.Rectangle(0,0,930,540),stage);
	//拖动释放执行mouseupHandler函数
	ball2.mouseupHandler=upmouse;
	
	ball2.x=200;
	ball2.y=200;
	root.addChild(ball2);
	
	//旋转行为测试
	root.rotaMc1.addRotateAction(stage);
	root.rotaMc2.addDragAction(new createjs.Rectangle(0,0,930,540),stage);
	root.rotaMc2.addRotateAction(stage);
	
	//数字键盘测试
	root.keyboard.type="keyboard";
	root.keyboard.enterHandler=function(){
		console.log("ok-------------------------------");
	}
	root.keyboard.keyboardInit(root.ansTxt,100);
	
	//画线条测试
	root.ball1.addDrawLineAction(root.ball2,root.stageMc,stage,3,"#ffffff");
	
	//画多边形
	var shape=new createjs.Shape();
	root.canvasMc.addChild(shape);
	var points;
	for(var i=1;i<=6;i++){
		root["b"+i].addDragAction(new createjs.Rectangle(0,0,930,540),stage);
		root["b"+i].moveHandler=moveFunc;
	}
	
	function moveFunc(){
		points=[];
		for(var i=1;i<=6;i++){
			var obj={x:root["b"+i].x-root.canvasMc.x,y:root["b"+i].y-root.canvasMc.y};
			points.push(obj);
		}
		createjsExtend.drawPolygon(shape,points,2,"#ff0000","#ffff00");
	}
	
	function Func(){
		this.x=10;
		this.y=10;
		var x1=15;
	}
	
	var a1=new Func();
	console.log(a1 instanceof Func);
	console.log(Func.prototype);
	console.log(a1.prototype);

}

function upmouse(){
	console.log(this);
}

