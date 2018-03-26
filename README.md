# createjsExtend中提供的功能的API如下：

#createjsExtend.createLibMc(libName) Container;
创建flashCC库中的一个元素，此元素在库中的连接名为libName，具体参见实例中的demo1

#Parameters:
libName 库中元件的名字
#Returns:
Container flashcc库中的元件


#createjsExtend.getDistance(mc1,mc2) number;
计算两个元件之间的距离
#Parameters: 
mc1,mc2 计算距离的两个元件
#Returns:
Number 两个元件在舞台中的距离


#createjsExtend.drawSectorHandToHand=function(shape, startHandAngle, endHandAngle, color,r)

画扇形 度数按表的度数为标准，即起始点0度为12:00方向.
@param shape 一个形状，扇形画在shape上
@param startAngle 扇形第一条边的度数
@param endAngle 扇形第二条边的度数
@param color 扇形填充颜色
@r 扇形半径
* 2017.12.7新增功能*/


#createjsExtend.drawSector=function(shape, x, y, r, angle, startFrom, color)
画扇形 度数按X轴正向为起点.
@param shape 一个形状，扇形画在shape上
@param x,y,r 扇形圆心偏移位置及扇形半径
@param angle 扇形角度
@param startFrom 扇形起始角度
@color 扇形颜色
* 2017.12.7新增功能*/

#createjsExtend.drawPolygon=function(shape,points,thickness,strokeColor,fillColor)
画多变形.
@param shape 一个形状，多边形画在shape上
@param points 一个数组，用来存储多边形每一个角的位置
@param thickness 线条粗细
@param strokeColor 线条颜色
@fillColor 填充颜色
* 2017.12.8新增功能*/
