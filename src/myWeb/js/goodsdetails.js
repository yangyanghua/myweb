		window.onload = function(){
			//var prodForm = document.getElementById("prod-form");
			
			
			document.getElementById("add").onclick = function(){
		     var count = this.parentNode.previousElementSibling;	
		      count.value++;
			}
			document.getElementById("mulp").onclick = function(){
				  var count = this.parentNode.previousElementSibling;	
		      
		      count.value-1==0?count.value=1:count.value--;
			}
    
	var bigImg =document.getElementById("big_img");
	var prodLook=document.getElementById("prod-look");
	var lImg=document.getElementById("l_img");
	var oList=document.getElementById("list");
	var oLi =oList.getElementsByTagName("li");

	for(var i=0;i<oLi.length;i++){
		  oLi[i].index=i;
		
		   oLi[i].onmouseover=function(){
		   
			bigImg.style.backgroundImage="url(../img/l" + (this.index+1) +".jpg)";
			lImg.innerHTML="<img src='../img/l"+(this.index+1) +".jpg'/>" ;	
		}
	}
	var i=0;
	lImg.onmouseover=function(evt){
		var oEvent = evt||window.event;
		prodLook.style.display="block";
		bigImg.style.display="block";
		prodLook.style.left= oEvent.clientX-prodLook.clientWidth/2+"px";
	    prodLook.style.top=oEvent.clientY-prodLook.clientHeight/2+"px";
		
	   prodLook.onmousemove=function(evt){
	   	var oEvent = evt||window.event;
        var divX =oEvent.clientX-prodLook.clientWidth/2+"px";
		var divY =oEvent.clientY-prodLook.clientHeight/2+"px";
	    prodLook.style.left=oEvent.clientX-prodLook.clientWidth/2+"px";
	    prodLook.style.top=oEvent.clientY-prodLook.clientHeight/2+"px";
	  
	   
	   
	    if(oEvent.clientX-prodLook.clientWidth/2<=0){
			prodLook.style.left=0;
		}
	    if(oEvent.clientX-prodLook.clientWidth/2>=215){
	    	prodLook.style.left=215+"px";
	    }

	    if(oEvent.clientY-prodLook.clientHeight/2<=0){
	    	prodLook.style.top=0;
	    }
	    if(oEvent.clientY-prodLook.clientHeight/2>=215){
	    	prodLook.style.top=215+"px";
	    }
        var left=parseInt(prodLook.style.left)/215*100;
        var top =parseInt(prodLook.style.top)/215*100;
        bigImg.style.backgroundPosition= left +"%"+"  "+  top+"%";
	   }
       prodLook.onmouseout=function(){
           prodLook.style.display="none";
           bigImg.style.display="none";
       	
       }
		
		
	}
		   	
		}
jQuery(function($){
	
	var $lookli = $("#look_and_see").find(".look-list").find("li");
	var index=0;
		$lookli.hide();
		$lookli.eq(index).show();	
	$("#look_and_see").find(".top_page").click(function(){
		if(index<=0){
			index=3;
		}else{index--;}	
		$lookli.hide();
		$lookli.eq(index).show();	      
	})
	$("#look_and_see").find(".bot_page").click(function(){
		if(index>=3){
			index=0;
		}else{index++;}	
		$lookli.hide();
		$lookli.eq(index).show();			
		
		
	})	
	
	var $addcart =$("#addCart");
	var goodsData = [];
	$addcart.click(function(){
		var name=$("#details_content").find(".txt").find("p").text();
		var price=$("#details_content").find(".txt").find(".now_price").text();
               var size=$('input:radio[name="size"]:checked').val();
               var img=$('input:radio[name="color"]:checked').val();
   			goodsData.push({name:name,price:price,size:size,img:img});
 					var d = new Date;
 					d.setDate(d.getDate() + 10);
 					var str_goods = JSON.stringify(goodsData);
 					document.cookie ="goods="+str_goods;

         	var n=$("#l_img").offset();
		 	var $l_img = $("#l_img").clone().css("position","absolute").css("z-index","10");
			var y=$("#shoppingCart").offset().top;
			var x=$("#shoppingCart").offset().left;		  
		  $l_img.insertAfter($("#prod-show")).offset(n).animate({
		   	     width:0,
		   	     height:0,
		   	     opacity:0,
		   	     top:y,
		   	     left:x
		   	
		     },1000);

			
	
	})

})