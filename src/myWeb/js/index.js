jQuery(function($){
			
			$("#rolling_img").xcarousel({
	
//				autoPlay:false,
				 buttons:false,
				type:'fade'
			});
		    var $hideNav =$("#hide_nav");
		    var $hideNavList = $("#hide_nav").find(".hide_nav_list");
		    var $hideLi=$hideNavList.find("li");
            $("#show_nav").find(".bd_rel_navlist").find("li").hover(function(){
            	var n =$(this).index();
            	$hideNav.show();
            	$hideLi.hide();
            	$hideLi.eq(n).show();	
            },function(){
            		$hideNav.hide();
            })
           $hideNav.hover(function(){
           	$(this).show();
           },function(){$(this).hide()});
           
           
           var $brandlist =$("#morebrand").find(".brandlist")    
           for(var i=1;i<=37;i++){
           	 var $li=$("<li/>");
           	 $li.html("<a href='#'><img src='img/lg"+i+".jpg' /></a>");
           	 $li.appendTo($brandlist);
           }
          
          $("#temai").find(".temai_content").find(".classification").find(".classification-list").find("li").eq(0).addClass("active");
           $("#temai").find(".temai_content").find(".temai_goods").find(".temai_goods_list").find("li").eq(0).show();
          $("#temai").find(".temai_content").find(".classification").find(".classification-list").find("li").hover(
          	function(){
          		 $("#temai").find(".temai_content").find(".classification").find(".classification-list").find("li").removeClass();
          		 $(this).addClass("active");
          		 var n =$(this).index();
          		 $("#temai").find(".temai_content").find(".temai_goods").find(".temai_goods_list").find("li").hide();
          		 $("#temai").find(".temai_content").find(".temai_goods").find(".temai_goods_list").find("li").eq(n).show(); 
          	}
          	
          )
         
          var $lglist=$("#yg_shoppers").find(".lg_list");
         	var $li = $("<li/>")
         	var $li1 =$("<li/>")
         	for(var j =1;j<=48;j++){
         		var $p=$("<p/>");
         		
         		 $p.html("<a href='#'><img src='img/lg"+j+".jpg' /></a>")
         		 $p.appendTo($li);
         	}
         	for(var i =48;i>=1;i-- ){
         		var $p=$("<p/>");
         		 $p.html("<a href='#'><img src='img/lg"+i+".jpg' /></a>")
         		 $p.appendTo($li1);         		
         	}
         	$li1.appendTo($lglist);
         	$li.appendTo($lglist);
         
            var $fix_nav = $("#nav_right_fix");
            var $btn_top =$("#fix_nav_list").find(".top");
			$(window).on('scroll',function(){
				// 获取滚动条滚动过的距离
				var scrollTop = $(window).scrollTop();
                    
				// 当差不多滚动到底部是加载更多内容
				if(scrollTop >= 200){
                    $fix_nav.css("position","fixed")     
					}else{
					$fix_nav.css("position","absolute")	
					}
				
			})
			$btn_top.click(function(){
				$(window).scrollTop(0);
			})
			
$("#shoppingCart").click(function(){window.open("html/shoppingCart.html")})			        
          
          

});
