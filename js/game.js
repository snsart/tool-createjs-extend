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
	
	cjsExtend(root.ballMc).addDragAction(new createjs.Rectangle(0,0,724,543),stage).fillColor("#ff0000");
	cjsExtend(root.rotaMc1).addRotateAction(stage);
	root.ballMc.mouseupHandler=function(){
		console.log("up");
	}
	var ball=cjsExtend.createLibMc("Ball");
	root.addChild(ball);
	
	ball.libName="Ball";
	var ball2=cjsExtend(ball).copy();
	cjsExtend(ball2).fillColor("#ffff00");
	root.addChild(ball2);
	ball2.x=60;
	ball2.y=60;
	
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    circle.x = circle.y = 50;
    root.addChild(circle);
    //为circle添加拖拽功能，第一个参数设置了拖动范围
    cjsExtend(circle).addDragAction(new createjs.Rectangle(0,0,724,543),stage);
    
   

}

