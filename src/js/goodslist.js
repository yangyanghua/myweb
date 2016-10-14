jQuery(function($){
	// 鼠标移到您的位置：运动 处的效果
	var $classlist = $("#list_content").find(".class").find(".class_list");
	$("#hover_a").hover(function(){
		$(this).html("&nbsp;运动︿");
		//隐藏菜单显示
		$classlist.show();
	},function(){
		$(this).html("&nbsp;运动﹀");
	   //隐藏菜单隐藏
		$classlist.hide();		
	})
	$classlist.hover(function(){
		$(this).show();
	},function(){
		$(this).hide();
	})
	//获取ajax数据加载到的地方
	var $goodslist = $("#listofgoods").find(".list-goods");
	//创建全局ajax请求
	$.ajaxSetup({
		type:"get",
		url:"../js/goods.json",
		async:true,
		success:function(res){
			 $.each(res, function(idx,ele){
			 	//创建a标签
 	            var $a1=$("<a/>");
 	            var $a2=$("<a/>");
 	            //给a标签添加跳转属性；跳转到商品详情页   
 	            $a1.attr("href","goodsdetails.html");
 	            $a2.attr("href","goodsdetails.html");
 	            //创建span并添加类名；
 	            var $span1 =$("<span/>").addClass("now_price");
 	            var $span2 =$("<span/>").addClass("old_price");
 	            //创建li
 	            var $li=$("<li/>");
 	            //创建换行
 	            var $br=$("</br>");
 	            //添加内容
 	            //图片
 	            $a1.html(ele.img);
 	            //信息
 	            $a2.html(ele.txt);
 	            //现在的价格
 	            $span1.text(ele.nowprice);
 	            //降价前的价格
 	            $span2.text(ele.oldprice);
 	            //全部添加到li
 	            $a1.appendTo($li);
 	            $a2.appendTo($li);
 	            $br.appendTo($li);
 	            $span1.appendTo($li);
 	            $span2.appendTo($li);
 	            //li添加到显示区
 	            $li.appendTo($goodslist);
			            });
					}
		
	});
	//页面刷新，进行一次ajax请求
	$.ajax();
			// 给window绑定scroll事件，当差不多滚动到底部是加载更多内容
			var x = 0
			$(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();
                    console.log(123);
				// 当差不多滚动到底部是加载更多内容
				if(scrollTop >= $(document).height() - $(window).height() - 800){
					
					//每次滚动到位置x加1
					x++;
					//判断是否请求了5次，如果不是，继续加载，如果是，则停止加载
					if(x<=5){	
					$.ajax();
					}else{
						return
					}
				}
			})	
	
	
	
	
	
	
	
	
})