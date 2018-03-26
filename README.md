# createjsExtend中提供的功能的API如下：

## createjsExtend.createLibMc(libName) Container;
创建flashCC库中的一个元素，此元素在库中的连接名为libName，具体参见实例中的demo1
* Parameters:
>libName 库中元件的名字
* Returns:
>Container flashcc库中的元件


## createjsExtend.getDistance(mc1,mc2) number;</br>
计算两个元件之间的距离</br>
* Parameters: </br>
>mc1,mc2 计算距离的两个元件</br>
* Returns:</br>
>Number 两个元件在舞台中的距离</br>


## createjsExtend.drawSectorHandToHand=function(shape, startHandAngle, endHandAngle, color,r)</br>
画扇形 度数按表的度数为标准，即起始点0度为12:00方向.</br>
* param 
>shape 一个形状，扇形画在shape上</br>
>startAngle 扇形第一条边的度数</br>
>endAngle 扇形第二条边的度数</br>
>color 扇形填充颜色</br>
>r 扇形半径</br>
2017.12.7新增功能</br>


## createjsExtend.drawSector=function(shape, x, y, r, angle, startFrom, color)</br>
画扇形 度数按X轴正向为起点.</br>
* param
>shape 一个形状，扇形画在shape上</br>
>x,y,r 扇形圆心偏移位置及扇形半径</br>
>angle 扇形角度</br>
>startFrom 扇形起始角度</br>
>color 扇形颜色</br>
2017.12.7新增功能</br>

## createjsExtend.drawPolygon=function(shape,points,thickness,strokeColor,fillColor)</br>
画多变形.</br>
* param
>shape 一个形状，多边形画在shape上</br>
>points 一个数组，用来存储多边形每一个角的位置</br>
>thickness 线条粗细</br>
>strokeColor 线条颜色</br>
>fillColor 填充颜色</br>
2017.12.8新增功能</br>
