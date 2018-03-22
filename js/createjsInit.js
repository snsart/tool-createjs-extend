$(document).ready(function(){
	init();
	function init(){
		new animaCreateJs(
			[
				//{ canvasId:"canvas1", name:"l1", lib:l1, autoPlay:false ,loadJson:false },
				//{ canvasId:"canvas2", name:"l1", lib:l1, autoPlay:false ,loadJson:false },
			]
		);
		$.controlVideo('video-container2','video1');
	}
	
});

