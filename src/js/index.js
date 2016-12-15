jQuery(function($){
			//图片轮播
			//调用插件
			$("#rolling_img").xcarousel({
	 		//设置参数
//				autoPlay:false,
				 buttons:false,
				type:'fade'
			});
			
			//二级菜单
			//获取菜单
		    var $hideNav =$("#hide_nav");
		    var $hideNavList = $("#hide_nav").find(".hide_nav_list");
		    var $hideLi=$hideNavList.find("li");
		    //一级菜单鼠标移入移出时执行函数
            $("#show_nav").find(".bd_rel_navlist").find("li").hover(function(){
            	var n =$(this).index();
            	$hideNav.show();
            	$hideLi.hide();
            	$hideLi.eq(n).show();	
            },function(){
            		$hideNav.hide();
            })
           //二级菜单鼠标移入时执行的函数 
           $hideNav.hover(function(){
           		$(this).show();
           },function(){$(this).hide()});
          
          //动态生成 热门品牌栏下的品牌logo列表
           var $brandlist =$("#morebrand").find(".brandlist")    
           for(var i=1;i<=37;i++){
           	 var $li=$("<li/>");
           	 $li.html("<a href='#'><img src='img/lg"+i+".jpg' /></a>");
           	 $li.appendTo($brandlist);
           }
          
          //特卖区菜单设置
          //获取元素
          $("#temai").find(".temai_content").find(".classification").find(".classification-list").find("li").eq(0).addClass("active");
           $("#temai").find(".temai_content").find(".temai_goods").find(".temai_goods_list").find("li").eq(0).show();
          //特卖菜单鼠标移入数执行的函数
          $("#temai").find(".temai_content").find(".classification").find(".classification-list").find("li").hover(
          	function(){
          		 //移除高亮效果
          		 $("#temai").find(".temai_content").find(".classification").find(".classification-list").find("li").removeClass();
          		 //给当前元素添加高亮效果
          		 $(this).addClass("active");
          		 //获取当前元素下标
          		 var n =$(this).index();
          		 //隐藏所有特卖商品菜单
          		 $("#temai").find(".temai_content").find(".temai_goods").find(".temai_goods_list").find("li").hide();
          		 //显示当前元素下标对应的商品菜单
          		 $("#temai").find(".temai_content").find(".temai_goods").find(".temai_goods_list").find("li").eq(n).show();
          	}
          	
          )
          
          //动态生产优购导航模块下的品牌logo列表
     
          var $lglist=$("#yg_shoppers").find(".lg_list");
         	var $li = $("<li/>")
         	var $li1 =$("<li/>")
         	//为实现切换效果，正反各循环一次
         	for(var j =1;j<=48;j++){
         		var $p=$("<p/>");
         		
         		 $p.html("<a href='#'><img src='img/lg"+j+".jpg' /></a>")
         		 $p.appendTo($li);
         	}

         	$li1.appendTo($lglist);
         	$li.appendTo($lglist);
         
         
         
           //窗口右边 吸顶导航
           //获取元素
            var $fix_nav = $("#nav_right_fix");
            var $btn_top =$("#fix_nav_list").find(".top");
			$(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();
                //判断距离， 
				if(scrollTop >= 200){
                    $fix_nav.css("position","fixed")     
					}else{
					$fix_nav.css("position","absolute")	
					}
				
			})
			//一键回到顶部
			$btn_top.click(function(){
				$(window).scrollTop(0);
			})
		
		//点击顶部“购物车”打开购物车页面
       $("#shoppingCart").click(function(){window.open("html/shoppingCart.html")})			        
       

    
    
    
    

});
