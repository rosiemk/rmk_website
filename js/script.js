$(document).ready(function(){


	$(".name > li").mouseover(function(){
		$(this).css('color', '#35e890');
	});
	$(".name > li").mouseleave(function(){
		$(this).css('color', '#000000');
	});

	$("li > a").mouseover(function(){
		$(this).css('color', '#35e890');
	});
	$("li > a").mouseleave(function(){
		$(this).css('color', '#000000');
	});


//content pages
//	$("#content_title_so").mouseover(function(){
//		$(this).css('color', '#00FF00');
//	});
//	$("#content_title_so").mouseleave(function(){
//		$(this).css("color", "#000000");
//	});
//	$("#content_title_tsab").mouseover(function(){
//		$(this).css('color', '#00FFFF');
//	});
//	$("#content_title_tsab").mouseleave(function(){
//		$(this).css("color", "#000000");
//	});
//

});