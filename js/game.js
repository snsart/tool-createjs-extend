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

}

