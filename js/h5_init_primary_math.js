/**
 * 功能：每个切片特有的js，配置加载的js和css。
 * 适用范围:小学数学
 * @thinlong
 * v2.0
 * 2016.11.7
 * 
 */

/*
 * 全学科公共文件
 * --必加--
 * js/jquery.min.js
 * css/preload.min.css
 * js/preload.min.js
 * 
 * --选加-- 
 * --createjs相关--
 * js/preloadjs-0.6.1.min.js
 * js/easeljs-0.8.1.min.js
 * js/tweenjs-0.6.1.min.js
 * js/movieclip-0.8.1.min.js
 * 
 * --其他--
 * 视具体情况而定
 */
var myPublicFiles = [
	'js/jquery.min.js',
	'css/preload.min.css',
	'js/preload.min.js',
	'js/easeljs-0.8.1.min.js',
	'js/tweenjs-0.6.1.min.js',
	'js/movieclip-0.8.1.min.js',
	'js/preloadjs-0.6.1.min.js',
	'js/animaCreateJs.js',
];

/**
 * 学科(小学数学)通用文件
 * --必加--
 * css/primary_math.css
 * js/primary_math.js
 */
var myCommonFiles = [
	'css/primary_math.css',
	'css/pasteQue.css',
	'css/audio.css',
	'css/videoControl.css',
	'js/primary_math.js',
	//'js/pasteQue.js',
	'css/canvasController.css',
	'js/audio.js',
	'js/animaCreateJsContrl.js',
	'js/videoControls.js'
	
];

/**
 * 课件私有文件
 */
var myPrivateFiles = [
	'js/createjsExtend.js',
   'js/arrayUtils.js',//素材
   'js/donghua.js',//素材
   'js/game.js',//素材程序
   
	'js/nav_btn_arw.js',//不能删除
	'js/pasteQue.js',
	'js/div_move.js',
];

var loader = new h5_loader();
loader.addPublicFiles(myPublicFiles)
loader.addCommonFiles(myCommonFiles);
loader.addPrivateFiles(myPrivateFiles);
loader.load();