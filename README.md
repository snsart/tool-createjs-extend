## createjsExtend中提供的功能的API如下：

### createjsExtend.createLibMc(libName) Container;
创建flashCC库中的一个元素，此元素在库中的连接名为libName，具体参见实例中的demo1
* Parameters:
>libName 库中元件的名字
* Returns:
>Container flashcc库中的元件


### createjsExtend.getDistance(mc1,mc2) number;</br>
计算两个元件之间的距离</br>
* Parameters: </br>
>mc1,mc2 计算距离的两个元件</br>
* Returns:</br>
>Number 两个元件在舞台中的距离</br>


### createjsExtend.drawSectorHandToHand=function(shape, startHandAngle, endHandAngle, color,r)</br>
画扇形 度数按表的度数为标准，即起始点0度为12:00方向.</br>
* param 
>shape 一个形状，扇形画在shape上</br>
>startAngle 扇形第一条边的度数</br>
>endAngle 扇形第二条边的度数</br>
>color 扇形填充颜色</br>
>r 扇形半径</br>
2017.12.7新增功能</br>


### createjsExtend.drawSector=function(shape, x, y, r, angle, startFrom, color)</br>
画扇形 度数按X轴正向为起点.</br>
* param
>shape 一个形状，扇形画在shape上</br>
>x,y,r 扇形圆心偏移位置及扇形半径</br>
>angle 扇形角度</br>
>startFrom 扇形起始角度</br>
>color 扇形颜色</br>
2017.12.7新增功能</br>

### createjsExtend.drawPolygon=function(shape,points,thickness,strokeColor,fillColor)</br>
画多变形.</br>
* param
>shape 一个形状，多边形画在shape上</br>
>points 一个数组，用来存储多边形每一个角的位置</br>
>thickness 线条粗细</br>
>strokeColor 线条颜色</br>
>fillColor 填充颜色</br>
2017.12.8新增功能</br>

### createjs.Container.prototype.addDrawLineAction=function(targetMc,stageMc,stage,thickness,color)</br>
单击当前元件进行连线，当前元件有一个数组属性linkMcs，用来存储所有与其互连的元件,当完成连线时，会发送"drawLine"事件,需用到arrayUtils文件;</br>
* param
>targetMc 所要连接的目标元件(影片剪辑)</br>
>stageMc 存储线条的画板(影片剪辑)</br>
>stage 舞台</br>
>thickness 线条粗细</br>
>color 线条颜色</br>
2017.12.7新增功能</br>

### createjs.Container.prototype.fillColor=function(color)</br>
改变显示对象的填充颜色</br>
* param
>color 要填充的颜色</br>

### createjs.Container.prototype.strokeColor=function(color)</br>
改变显示对象的边线颜色</br>
* param
>color 要填充的颜色</br>


### createjs.Container.prototype.addDragAction=dragAction;</br>
### createjs.DisplayObject.prototype.addDragAction=dragAction;</br>
function dragAction(rect,stage,center=false,down=false);</br>
为显示对象添加拖动行为，可为拖动的对象定义mouseupHandler方法，当鼠标释放时会执行此方法，也可定义moveHandler方法，当鼠标移动时执行此方法；</br>
 * param 
>rect createjs.Rectangle对象,限定了对象可拖动的范围</br>
>stage 舞台对象，当鼠标在stage上移动时会拖动对象</br>
>center 可选参数，当为true时，鼠标会限定在对象的注册中心点，默认为false</br>
>down 可选参数，规定鼠标初始状态是否按下，默认为false</br>

### createjs.Container.prototype.addRotateAction=function(stage)</br>
为显示对象添加旋转行为，可为旋转的对象定义mouseupHandler方法，当鼠标释放时会执行此方法，也可定义moveHandler方法，当鼠标移动时执行此方法；</br>
* param
>stage 舞台对象，当鼠标在stage上移动时会拖动对象</br>

### createjs.Container.prototype.adsorb=function(targetArr,dis)</br>
当元件与数组targetArr中的任一元件mc的距离小于dis时，元件会被吸附到mc所在位置；</br>
 * param 
 >targetArr 目标</br>
 >dis 吸附距离</br>
 
 

