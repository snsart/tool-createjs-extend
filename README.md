createjsExtend是基于CreateJS开发的一套工具库，此工具增强了createjs创建的对象的功能，可以帮助开发者更快速的创建游戏和交互应用。下面是一个应用示例：
### 示例

这个例子创建了一个显示对象，并为此显示对象添加了拖拽功能：
```javascript
stage = new createjs.Stage("demoCanvas");
    //创建一个形状的显示对象
    circle = new createjs.Shape();
    circle.graphics.beginFill("red").drawCircle(0, 0, 40);
    circle.x = circle.y = 50;
    stage.addChild(circle);
 	//为circle添加拖拽功能，第一个参数设置了拖动范围
    cjsExtend(circle).addDragAction(new createjs.Rectangle(0,0,724,543),stage);
```
也可以直接为用flashCC创建的影片剪辑添加行为，并且可以链式添加方法：
```javascript
	//root.mc为flashCC创建的示例名为mc的影片剪辑，下面方法设置mc的颜色为红色，并为mc添加拖拽行为
	cjsExtend(root.mc).fillColor("#ff0000").addDragAction(new createjs.Rectangle(0,0,724,543),stage);
```


createjsExtend也提供了一些createjs没提供的常用方法，比如画多边形、画扇形等，下面为画多边形的示例：
```
var shape=new createjs.Shape();
//多边形的顶点
var points=[{x:50,y:50},{x:100,y:50},{x:100,y:200},{x:80,y:200}];
cjsExtend.drawPolygon(shape,points,1,"#ff0000","#ffffff");
```

下面为createjsExtend提供的所有方法：

## createjsExtend中提供的API如下：

### cjsExtend.createLibMc(libName) Container;
创建flashCC库中的一个元素，此元素在库中的连接名为libName，具体参见实例中的demo1
* Parameters:
>libName 库中元件的名字
* Returns:
>Container flashcc库中的元件


### cjsExtend.getDistance(mc1,mc2) number;</br>
计算两个元件之间的距离</br>
* Parameters: </br>
>mc1,mc2 计算距离的两个元件</br>
* Returns:</br>
>Number 两个元件在舞台中的距离</br>


### cjsExtend.drawSectorHandToHand=function(shape, startHandAngle, endHandAngle, color,r)</br>
画扇形 度数按表的度数为标准，即起始点0度为12:00方向.</br>
* param 
>shape 一个形状，扇形画在shape上</br>
>startAngle 扇形第一条边的度数</br>
>endAngle 扇形第二条边的度数</br>
>color 扇形填充颜色</br>
>r 扇形半径</br>
2017.12.7新增功能</br>


### cjsExtend.drawSector=function(shape, x, y, r, angle, startFrom, color)</br>
画扇形 度数按X轴正向为起点.</br>
* param
>shape 一个形状，扇形画在shape上</br>
>x,y,r 扇形圆心偏移位置及扇形半径</br>
>angle 扇形角度</br>
>startFrom 扇形起始角度</br>
>color 扇形颜色</br>
2017.12.7新增功能</br>

### cjsExtend.drawPolygon=function(shape,points,thickness,strokeColor,fillColor)</br>
画多变形.</br>
* param
>shape 一个形状，多边形画在shape上</br>
>points 一个数组，用来存储多边形每一个角的位置</br>
>thickness 线条粗细</br>
>strokeColor 线条颜色</br>
>fillColor 填充颜色</br>
2017.12.8新增功能</br>


### cjsExtend.setCursor(mcArr,stage,cursor)</br>
当鼠标移入mcArr中的元件上时，改变鼠标的状态</br>
* param
>mcArr 数组，存储所有需要设置鼠标效果的元件</br>
>stage 舞台</br>
>cursor 鼠标状态</br>
2017.12.8新增功能</br>

### cjsExtend(mc).addDrawLineAction(targetMc,stageMc,stage,thickness,color)</br>
为显示对象mc添加连线功能，当单击mc时进行连线，当前元件有一个数组属性linkMcs，用来存储所有与其互连的元件,当完成连线时，会发送"drawLine"事件,需用到arrayUtils文件;</br>
* param
>targetMc 所要连接的目标元件(影片剪辑)</br>
>stageMc 存储线条的画板(影片剪辑)</br>
>stage 舞台</br>
>thickness 线条粗细</br>
>color 线条颜色</br>
2017.12.7新增功能</br>

### cjsExtend(mc).fillColor(color)</br>
改变显示对象mc的填充颜色</br>
* param
>color 要填充的颜色</br>

### cjsExtend(mc).strokeColor(color)</br>
改变显示对象mc的边线颜色</br>
* param
>color 要填充的颜色</br>



### cjsExtend(mc).addDragAction(rect,stage,center=false,down=false);</br>
为显示对象mc添加拖动行为，可为拖动的对象定义mouseupHandler方法，当鼠标释放时会执行此方法，也可定义moveHandler方法，当鼠标移动时执行此方法；</br>
 * param 
>rect createjs.Rectangle对象,限定了对象可拖动的范围</br>
>stage 舞台对象，当鼠标在stage上移动时会拖动对象</br>
>center 可选参数，当为true时，鼠标会限定在对象的注册中心点，默认为false</br>
>down 可选参数，规定鼠标初始状态是否按下，默认为false</br>

### cjsExtend(mc).addRotateAction(stage)</br>
为显示对象添加旋转行为，可为旋转的对象定义mouseupHandler方法，当鼠标释放时会执行此方法，也可定义moveHandler方法，当鼠标移动时执行此方法；</br>
* param
>stage 舞台对象，当鼠标在stage上移动时会拖动对象</br>

### cjsExtend(mc).adsorb(targetArr,dis)</br>
当元件mc与数组targetArr中的任一元件targetMc的距离小于dis时，元件会被吸附到targetMc所在位置；</br>
 * param 
 >targetArr 目标</br>
 >dis 吸附距离</br>
 
### cjsExtend(mc).copy()</br>
返回mc的一个拷贝，需要先设置mc的libName属性为库中链接的元件名</br>

 
### cjsExtend(mc).moveBy(paths)</br>
元件mc沿着paths中的路径进行运动,完成后可以通过call函数执行回调函数</br>
 * param 
 >paths 路径节点</br>
 
举例：mc沿着路径paths运动，运动完成后mc变成红色
```javascript
var paths=[{x:10,y:10},{x:200,y:10},{x:200,y:200},{x:10,y:200}];
cjsExtend(mc).moveBy(paths).call(function(){
	cjsExtend(mc).fillColor("#ff0000");
})
```
