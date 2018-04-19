$(function(){
	// tab
	$(".table_01 a").click(function(){
		$(this).addClass("on").parent("td").parent("tr").siblings("tr").children("td").children("a").removeClass("on");
	})
	$(".table_02 a").click(function(){
		$(this).addClass("on").parent("td").parent("tr").siblings("tr").children("td").children("a").removeClass("on");
	})
	// address
	$(".zg_address ul li").click(function(){
		$(this).addClass("on").siblings("li").removeClass("on");
		$(".address_section").eq($(this).index()).show().siblings(".address_section").hide();
	})
})