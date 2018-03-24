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

}

function upmouse(){
	console.log(this);
}

