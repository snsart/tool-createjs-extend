var arrayUtils = {};

arrayUtils.addSingleEleToArray = function(arr, ele) {
	if(arr.indexOf(ele) == -1) {
		arr.push(ele);
	}
}

//合并数组a1，a2，并过滤掉a1和a2中的重复元素；

arrayUtils.merge = function(a1, a2) {

	var a3;
	if(a1.length <= a2.length) {
		a3 = a2.concat();
		for(var i = 0; i < a1.length; i++) {
			if(a2.indexOf(a1[i]) == -1) {
				a3.push(a1[i]);
			} else {
				continue;
			}
		}

	} else {
		a3 = a1.concat();
		for(var j = 0; j < a2.length; j++) {
			if(a1.indexOf(a2[j]) == -1) {
				a3.push(a2[j]);

			} else {
				continue;
			}
		}
	}
	return a3;
}

//打乱数组

arrayUtils.shuffle = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		var index = i + Math.floor(Math.random() * (arr.length - i));
		var temp = arr[index];
		arr[index] = arr[i];
		arr[i] = temp;
	}
}

//从min至max之间生成n个不重复的随机数,含min不包含max

arrayUtils.generateRand=function(n,min,max){
	var arr=[];
	var num=max-min;
	if(n>num){
		throw new Error("最多生成"+num+"个随机数，输入的参数超出范围!");
	}
	for(var i=min;i<max;i++){
		arr.push(i);
		
	}
	for(var j=0;j<num-n;j++){
		var index=Math.floor(Math.random()*arr.length);
		arr.splice(index,1);
	}
	return arr;
}

//将二维数组转换为一维数组

arrayUtils.twoToOne=function(arr2){
	var arr1=[];
	var len=arr2[0].length;
	for(var i=0;i<arr2.length;i++){
		for(var j=0;j<len;j++){
			arr1.push(arr2[i][j]);
		}
	}
	return arr1;
}
