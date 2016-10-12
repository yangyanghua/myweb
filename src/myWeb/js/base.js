$(function(){
	$("#top_nav").find(".yg_link_seoul_show").hover(function(){
		$(this).text("Seoul Station").css("fontSize","12px")
	},function(){$(this).text("首尔站");})
	$("#top_nav").find(".phone").hover(function(){
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

	$("#top_nav").find(".list1").find(".gonggao").hover(function(){
		     $("#notice").show();      
	},function(){$("#notice").hide();})
	$("#notice").hover(function(){
		$(this).show();
		
	},function(){
		$(this).hide();
	})
	
	$("#top_nav").find(".list1").find(".gengduo").hover(function(){
		     $("#more").show();      
	},function(){$("#more").hide();})
	$("#more").hover(function(){
		$(this).show();
		
	},function(){
		$(this).hide();
	})
	
	$("#shoppingCart").hover(function(){
		$("#cartContent").show();
	},function(){$("#cartContent").hide();})
/*******************公共头部JS结束*************************************/

/*********************************************************************/
  var index = 0;
  var length = $("#yg_shoppers").find(".lg_list").find("li").length; 
  $("#yg_shoppers").find(".logo").find(".left").click(function(){
  	  index--;
  	  if(index<=0){
  	  	index=0;
  	  }
  	    $("#yg_shoppers").find(".lg_list").find("li").hide();
  	   $("#yg_shoppers").find(".lg_list").find("li").eq(index).show();
  })
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


          var $lglist=$("#yg_shoppers").find(".lg_list");
         	var $li = $("<li/>")
         	var $li1 =$("<li/>")
         	for(var j =1;j<=48;j++){
         		var $p=$("<p/>");
         		
         		 $p.html("<a href='#'><img src='../img/lg"+j+".jpg' /></a>")
         		 $p.appendTo($li);
         	}
         	for(var i =48;i>=1;i-- ){
         		var $p=$("<p/>");
         		 $p.html("<a href='#'><img src='../img/lg"+i+".jpg' /></a>")
         		 $p.appendTo($li1);         		
         	}
         	$li1.appendTo($lglist);
         	$li.appendTo($lglist);


})