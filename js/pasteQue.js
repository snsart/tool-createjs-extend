/*
 * 小高粘题js
 * siyao
 * 2016 9 29
 */

$(document).ready(function() {

	var index = 0;
	var li_enabled = false;
	var prelodminBoo, exist;
	initPasteQue();

	li_enabled = chenckLiToShow($(".pasteQue_ul li:nth-child(1)"));
	if(li_enabled) {
		judgeIndexToHideBtn($(".tabPage").eq(0));
	} else {
		$(".tabPage").eq(0).children(".innerPage").css("display", "block");
	}

	function initPasteQue() {
		var len = $(".tabPage").length;
		for(var i = 0; i < len; i++) {
			$(".tabPage").eq(i).children(".innerPage").eq(0).css("display", "block");
		}
		$(".pasteQue_ul li").each(function() {
			$(this).attr('xesdata', "按钮-顶部导航-" + $(this).children('span').text());
		});
		$(".nextQueBtn").attr('xesdata', "按钮-下一题");
		$(".prevQueBtn").attr('xesdata', "按钮-上一题");
		$(".demon_Btn").attr('xesdata', "按钮-演示动画");

		try {
			xesUtils;
			prelodminBoo = true;
		} catch(e) {
			prelodminBoo = false;
		}
		
	}

	/* 三角移动  */
	function posTriangle(num) {

	}

	function chenckLiToShow($li) {
		var enabled = false;
		if($li.text().substr(0, 1) == "例") {
			$(".nextQueBtn").hide();
			$(".prevQueBtn").hide();

			enabled = false;
		} else {
			enabled = true;
		}
		return enabled;
	};
	//顶部导航栏
	$(".pasteQue_ul li").click(function() {

		if(prelodminBoo) {
			xesUtils.sendElementStatisticalData($(this).attr('xesdata'));
		}

		//顶部导航状态变化
		$(this).siblings().children("span").removeClass("selected");
		$(this).children("span").addClass("selected");
		$(this).addClass("selected").siblings().removeClass("selected");

		//关闭所有演示动画
//		if(exist) {
//			var $visibleDemo = $('.demon_Btn.animaStep:visible');
//			var len = $visibleDemo.length;
//			if(len > 0) {
//				var $demo, $demonstration, idStr, canvasIndex, animaObj, anima;
//				var $arrow;
//				for(var i = 0; i < len; i++) {
//					$demo = $visibleDemo.eq(i);
//					$demo.next(".demon_origin").show();
//					$demonstration = $demo.siblings(".demonstration");
//					$demonstration.hide();
//					idStr = $demonstration.find("canvas").attr('id');
//					console.log()
//					canvasIndex = animaCreateJs.prototype.getIndexById(idStr);
//					animaObj = animaCreateJs.prototype.animationArr[canvasIndex];
//					anima = animaObj["anima"];
//					anima.stop();
//					$demo.children(".arrowRight").removeClass("arrowRight_cur");
//
//				}
//			}
//		}

		//内容
		var tabPages = $(".content-text").children(".tabPage");
		tabPages.hide();
		index = $(this).index();
		var tab = tabPages.eq(index);
		tab.show();
		//判断是否显示上下题按钮
		li_enabled = chenckLiToShow($(this));
		if(li_enabled) judgeIndexToHideBtn(tab);

		//判断是否显示动画上下步按钮
		if(index != 0) {
			$(".next-btn.animaHideBtn").css('visibility', 'hidden');
			$(".prev-btn.animaHideBtn").css('visibility', 'hidden');
		}
	});

	//左侧腰侧按钮
	$(".nextQueBtn").click(function() {

		if(prelodminBoo) {
			xesUtils.sendElementStatisticalData($(this).attr('xesdata'));
		}
		$(".prevQueBtn").show();
		var inners = $(".tabPage:visible").children(".innerPage");
		var innerVisible = $(".tabPage:visible").children(".innerPage:visible");
		var len = inners.length;
		if(len != 0) {
			var innerIndex = inners.index(innerVisible);
			innerIndex++;
			innerVisible.hide();
			var currentInner = inners.eq(innerIndex);
			currentInner.show();

			if(innerIndex >= len - 1) {
				$(this).hide();
			}
		}
	});

	function judgeIndexToHideBtn($tab) {
		var inners = $tab.children(".innerPage");
		var innerVisible = $(".tabPage:visible").children(".innerPage:visible");
		var len = inners.length;
		var innerIndex = inners.index(innerVisible);
		if(len <= 1) {
			$(".nextQueBtn").hide();
			$(".prevQueBtn").hide();
		} else if(innerIndex >= len - 1) {
			$(".prevQueBtn").show();
			$(".nextQueBtn").hide();
		} else if(innerIndex <= 0) {
			$(".nextQueBtn").show();
			$(".prevQueBtn").hide();
		} else {
			$(".prevQueBtn").show();
			$(".nextQueBtn").show();
		}

	}
	//右侧腰侧按钮
	$(".prevQueBtn").click(function() {

		if(prelodminBoo) {
			xesUtils.sendElementStatisticalData($(this).attr('xesdata'));
		}
		$(".nextQueBtn").show();
		var inners = $(".tabPage:visible").children(".innerPage");
		var innerVisible = $(".tabPage:visible").children(".innerPage:visible");
		var len = inners.length;
		if(len != 0) {
			var innerIndex = inners.index(innerVisible);
			innerIndex--;
			innerVisible.hide();
			var currentInner = inners.eq(innerIndex);
			currentInner.show();

			if(innerIndex <= 0) {
				$(this).hide();
			}
		}
	});
	//演示动画展开按钮
	$(".demon_Btn").click(function() {

		if(prelodminBoo) {
			xesUtils.sendElementStatisticalData($(this).attr('xesdata'));
		}
		try {
			createjs;
			animaCreateJs;
			exist = true;
		} catch(e) {
			exist = false;
		}
		var idStr = $(this).siblings(".demonstration").find("canvas").attr("id");

		if(!exist) {
			if($(this).children(".arrowRight").hasClass("arrowRight_cur")) {
				$(this).children(".arrowRight").removeClass("arrowRight_cur");
			} else {
				$(this).children(".arrowRight").addClass("arrowRight_cur");
			}

		} else {
			var arr = animaCreateJs.prototype.animationArr;
			if(arr.length != 0) {
				var canvasIndex = animaCreateJs.prototype.getIndexById(idStr);
				if(!isNaN(canvasIndex) && canvasIndex <= arr.length) {
					var animaObj = animaCreateJs.prototype.animationArr[canvasIndex];
					var anima = animaObj["anima"];

					if($(this).children(".arrowRight").hasClass("arrowRight_cur")) {

						$(this).children(".arrowRight").removeClass("arrowRight_cur");
						anima.stop();
					} else {
						$(this).children(".arrowRight").addClass("arrowRight_cur");
						anima.gotoAndPlay(0);
					}
				} else {
					console.log('idnex索引无效 或 索引超范围');
				}
			}
		}

		$(this).siblings(".demon_origin").toggle(300);
		$(this).siblings(".demonstration").toggle(300);
		var $parent = $(this).parent().parent();
		if($parent.get(0).className == "innerPage") {
			var $innerpage = $parent.siblings(".innerPage");
			if($innerpage.length > 0) {
				$innerpage.toggle(300);
			}
		}

	});

});