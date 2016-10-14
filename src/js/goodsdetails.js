		window.onload = function(){
			//var prodForm = document.getElementById("prod-form");
			
		//设置商品数量 点击“加”时商品数量加1
			document.getElementById("add").onclick = function(){
		     var count = this.parentNode.previousElementSibling;	
		      count.value++;
			}
		//设置商品数量 点击“减”时商品数量减1	
			document.getElementById("mulp").onclick = function(){
				  var count = this.parentNode.previousElementSibling;	
		      //判断是否减到0；到0则等于1；
		      count.value-1==0?count.value=1:count.value--;
			}
    //获取页面元素 
	var bigImg =document.getElementById("big_img");
	var prodLook=document.getElementById("prod-look");
	var lImg=document.getElementById("l_img");
	var oList=document.getElementById("list");
	var oLi =oList.getElementsByTagName("li");
    
    //对小图列表进行遍历
	for(var i=0;i<oLi.length;i++){
		//获取当前小图li的下标
		  oLi[i].index=i;
		//当前小图鼠标移入事件
		   oLi[i].onmouseover=function(){
		  //改变放大区域的背景为要放大的图片
			bigImg.style.backgroundImage="url(../img/l" + (this.index+1) +".jpg)";
			 //改变商品展览的图片
			lImg.innerHTML="<img src='../img/l"+(this.index+1) +".jpg'/>" ;	
		}
	}
	var i=0;
	lImg.onmouseover=function(evt){
		//鼠标移入商品展览区时
		var oEvent = evt||window.event;
		prodLook.style.display="block";
		bigImg.style.display="block";
		//要放大区域的位置
		prodLook.style.left= oEvent.clientX-prodLook.clientWidth/2+"px";
	    prodLook.style.top=oEvent.clientY-prodLook.clientHeight/2+"px";
		//鼠标移入要放大区域的位置
	   prodLook.onmousemove=function(evt){
	   	var oEvent = evt||window.event;
	   	
        var divX =oEvent.clientX-prodLook.clientWidth/2+"px";
		var divY =oEvent.clientY-prodLook.clientHeight/2+"px";
	    prodLook.style.left=oEvent.clientX-prodLook.clientWidth/2+"px";
	    prodLook.style.top=oEvent.clientY-prodLook.clientHeight/2+"px";
	  
	   
	   //判断需要放大区域是否移除商品展示区
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
          //设置放大区域的背后图片的位置
        bigImg.style.backgroundPosition= left +"%"+"  "+  top+"%";
	   }
       prodLook.onmouseout=function(){
           prodLook.style.display="none";
           bigImg.style.display="none";
       	
       }
		
		
	}
		   	
		}
jQuery(function($){
         //设置顶部“购物车”商品的个数
	if(document.cookie){
		var goods_list = JSON.parse(getCookie("goods"));
		$("#shoppingCart").find("p").find(".quantity").text(goods_list.length);
			
		}



    //看了又看 栏商品切换
	var $lookli = $("#look_and_see").find(".look-list").find("li");
	var index=0;
	//初始化
		$lookli.hide();
		$lookli.eq(index).show();
		//上一页
	$("#look_and_see").find(".top_page").click(function(){
		if(index<=0){
			index=3;
		}else{index--;}	
		$lookli.hide();
		$lookli.eq(index).show();	      
	})
	//下一页
	$("#look_and_see").find(".bot_page").click(function(){
		if(index>=3){
			index=0;
		}else{index++;}	
		$lookli.hide();
		$lookli.eq(index).show();			
		
		
	})	
	//添加购物车
	var $addcart =$("#addCart");
	//创建空数组
	var goodsData = [];
	//判断cookie是否存在，防止被覆盖
			if(document.cookie){
				  goodsData = JSON.parse(getCookie("goods"));
				}else{
				 goodsData = [];	
				}
	//点击加入购物车按钮
	    $addcart.click(function(){
	    	//获取商品名字
		var name=$("#details_content").find(".txt").find("p").text();
		    //获取商品价格
		var price=$("#details_content").find(".txt").find(".now_price").text();
        	//获取商品尺寸
        var size=$('input:radio[name="size"]:checked').val();
        	//获取商品图片
        var img=$('input:radio[name="color"]:checked').val();
	          //创建商品对象并push进数组
	    goodsData.push({name:name,price:price,size:size,img:img});
 		    //创建cookie过期时间
 		var d = new Date;
 		d.setDate(d.getDate() + 10);
 			//将数组转换成字符串
 		var str_goods = JSON.stringify(goodsData);
 			//设置cookie
 		document.cookie ="goods="+str_goods;

		//点击加入购物车 出现的动画效果
		//获取到动画开始位置
        var n=$("#l_img").offset();
        //克隆对象，并设置css属性
		var $l_img = $("#l_img").clone().css("position","absolute").css("z-index","10").css("overflow","hidden");
		//获取动画结束位置的坐标，即顶部购物车处
		var y=$("#shoppingCart").offset().top;
		var x=$("#shoppingCart").offset().left;
		//动画开始
		  $l_img.insertAfter($("#prod-show")).offset(n).animate({
		   	     width:0,
		   	     height:0,
		   	     opacity:0,
		   	     top:y,
		   	     left:x
		   	
		     },500);
        
        //设置顶部购物车显示的商品数
		var goods_list = JSON.parse(getCookie("goods"));
		$("#shoppingCart").find("p").find(".quantity").text(goods_list.length);
        


			
	
	})




})