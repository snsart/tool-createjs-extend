/* var bl=true
 var b2=true
$("#demon_BtnA").click(function(){
	if(bl){
			$("#demon_BtnB span").attr('id','abc'); 
			b2=true
			$("#demon_BtnA span").attr('id','arrowRight_cur'); 
			bl=false
			$(".demon_origin").eq(1).css({"display":"block"})
		     
	}else{
		$("#demon_BtnA span").attr('id','abc'); 
		bl=true
	}

})
$("#demon_BtnB").click(function(){
	if(b2){
		  $("#demon_BtnA span").attr('id','abc'); 
		  bl=true
			$("#demon_BtnB span").attr('id','arrowRight_cur'); 
			b2=false
		   $(".demon_origin").eq(0).css({"display":"block"})
	}else{
		
		$("#demon_BtnB span").attr('id','abc'); 
		b2=true
	}

})*/


$("#demon_BtnA").click(function(){
	 $("#demon_BtnA span").toggleClass("arrowRight_cur");
	 console.log("aaaaaaaaa");
})

$("#demon_BtnB").click(function(){
	 $("#demon_BtnB span").toggleClass("arrowRight_cur");
	  console.log("bbbbbbbb");
})

$("#demon_BtnC").click(function(){
	 $("#demon_BtnC span").toggleClass("arrowRight_cur");
	  console.log("ccccccc");
})

$("#demon_BtnD").click(function(){
	 $("#demon_BtnD span").toggleClass("arrowRight_cur");
	  console.log("ddddddd");
})