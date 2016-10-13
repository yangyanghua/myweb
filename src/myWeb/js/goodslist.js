jQuery(function($){
	
	var $classlist = $("#list_content").find(".class").find(".class_list");
	$("#hover_a").hover(function(){
		$(this).html("&nbsp;运动︿");
		$classlist.show();
	},function(){
		$(this).html("&nbsp;运动﹀");
		$classlist.hide();		
	})
	$classlist.hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	
	var $goodslist = $("#listofgoods").find(".list-goods");
	$.ajaxSetup({
		type:"get",
		url:"../js/goods.json",
		async:true,
		success:function(res){
			 $.each(res, function(idx,ele){
 	               var $a1=$("<a/>");
 	               var $a2=$("<a/>");
 	               $a1.attr("href","goodsdetails.html");
 	               $a2.attr("href","goodsdetails.html");
 	              var $span1 =$("<span/>")
 	               $span1.addClass("now_price");
 	              var $span2 =$("<span/>")
 	               $span2.addClass("old_price");
 	              var $li=$("<li/>");
 	              var $br=$("</br>");
 	              $a1.html(ele.img);
 	              $a2.html(ele.txt);
 	              $span1.text(ele.nowprice);
 	              $span2.text(ele.oldprice);
 	              $a1.appendTo($li);
 	              $a2.appendTo($li);
 	              $br.appendTo($li);
 	              $span1.appendTo($li);
 	              $span2.appendTo($li);
 	              $li.appendTo($goodslist);
			            });
					}
		
	});
	$.ajax();
			// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
			var x = 0
			$(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();
                    console.log(123);
				// 当差不多滚动到底部是加载更多内容
				if(scrollTop >= $(document).height() - $(window).height() - 800){
					x++;
					if(x<=5){
					$.ajax();
					}else{
						return
					}
				}
			})	
	
	
	
	
	
	
	
	
})