$(function(){
	
	
	
//顶部菜单移入效果	
	$("#top_nav").find(".yg_link_seoul_show").hover(function(){
		//鼠标移入，“首尔站”栏内容改变
		$(this).text("Seoul Station").css("fontSize","12px")
	},function(){$(this).text("首尔站");})
	$("#top_nav").find(".phone").hover(function(){
		//鼠标移入“手机优购”栏变化
		$(this).css("background","white");
		$("#phone_link_hover").show();
	},function(){
		$(this).css("background","");
		$("#phone_link_hover").hide();
	})
	$("#phone_link_hover").hover(function(){
		$("#top_nav").find(".phone").css("background","white");
		$(this).show();
	},function(){
		$("#top_nav").find(".phone").css("background","");
		$(this).hide();
	})


//鼠标移入“公告”栏变化

	$("#top_nav").find(".list1").find(".gonggao").hover(function(){
		     $("#notice").show();      
	},function(){$("#notice").hide();})
	$("#notice").hover(function(){
		$(this).show();
		
	},function(){
		$(this).hide();
	})
	//鼠标移入“更多栏”变化
	$("#top_nav").find(".list1").find(".gengduo").hover(function(){
		     $("#more").show();      
	},function(){$("#more").hide();})
	$("#more").hover(function(){
		$(this).show();
		
	},function(){
		$(this).hide();
	})
	//鼠标移入“购物车”按钮，隐藏部分显示
	$("#shoppingCart").hover(function(){
		$("#cartContent").show();
	},function(){$("#cartContent").hide();})
/*******************公共头部JS结束*************************************/

/*********************************************************************/
 //底部“优购导购”的JS代码
 
  var index = 0;
  //找到logo列表的长度
  var length = $("#yg_shoppers").find(".lg_list").find("li").length;
  //按钮点击：左按钮
  $("#yg_shoppers").find(".logo").find(".left").click(function(){
  	  index--;
  	  if(index<=0){
  	  	index=0;
  	  }
  	    $("#yg_shoppers").find(".lg_list").find("li").hide();
  	   $("#yg_shoppers").find(".lg_list").find("li").eq(index).show();
  })
  //按钮点击：右按钮
  $("#yg_shoppers").find(".logo").find(".right").click(function(){
  		index++;
  		if(index>=length){
  			index=1;
  	}
  	 	$("#yg_shoppers").find(".lg_list").find("li").hide();
  	 	$("#yg_shoppers").find(".lg_list").find("li").eq(index).show();
 })
   		$("#yg_shoppers").find(".lg_list").find("li").hide();
 		 $("#yg_shoppers").find(".lg_list").find("li").eq(index).show();
//页面刷新；动态生成logo
          var $lglist=$("#yg_shoppers").find(".lg_list");
         	var $li = $("<li/>")
         	var $li1 =$("<li/>")
         	//第一循环开始：生成li，及li内容
         	for(var j =1;j<=48;j++){
         		var $p=$("<p/>");
         		
         		 $p.html("<a href='#'><img src='../img/lg"+j+".jpg' /></a>")
         		 $p.appendTo($li);
         	}
         	//第二次循环，生成li，及li内容
         	for(var i =48;i>=1;i-- ){
         		var $p=$("<p/>");
         		 $p.html("<a href='#'><img src='../img/lg"+i+".jpg' /></a>")
         		 $p.appendTo($li1);         		
         	}
         	$li1.appendTo($lglist);
         	$li.appendTo($lglist);

$("#shoppingCart").click(function(){window.open("shoppingCart.html")})

//设置购物车栏显示商品个数
			if(document.cookie){
				var goods_list = JSON.parse(getCookie("goods"));
				$("#shoppingCart").find("p").find(".quantity").text(goods_list.length);
				}


})