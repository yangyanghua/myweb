jQuery(function($){
	        //判断cookie是否存在
	        if(document.cookie){
	        	//存在，获取cookie；
	        var goods_list = JSON.parse(getCookie("goods"));  
                //获取商品要显示的区域
		    var $goodsList = $("#cart_content").find(".goods-list");
		    	//创建价格合计变量
		    var total_price =0;
		  		//判断获取到的cookie长度是否为0
			if(goods_list.length!=0){
			   //底部合计结算栏显示
			  $("#price_in_total").show();
			  //购物车为空时显示的元素隐藏
              $goodsList.find(".no_goods").hide();
              //遍历cookie
		    for(var i=0;i<goods_list.length;i++){
	           //计算总价钱 
	         total_price = total_price+JSON.parse(goods_list[i].price);
	           //创建复选框并添加属性 
	       	var $input = $("<input/>").attr("type","checkbox");
	       		//创建放置商品图片的元素
	       	var $aImg =$("<a/>").attr("href","#").addClass("goodsimg");
	       		//创建img标签并添加属性值
	       	var $img =$("<img/>").attr("src",goods_list[i].img);
	       		//添加到元素a
	     		$img.appendTo($aImg);
	     		//创建放置商品信息的a标签并赋值
	        var $aName =$("<a/>").attr("href","#").addClass("goodsname").html(goods_list[i].name);            	
				//创建放置商品尺码的p标签并赋值
			var $pSize = $("<p/>").html("<span>尺码:</span>"+goods_list[i].size)
				//创建放置商品单价的p标签
			var $pPrice =  $("<p/>").html("<span>单价:</span>"+goods_list[i].price);
				//创建对商品进行操作的p
			var $pOperation = $("<p/>").addClass("operation");
				//创建移入收藏夹按钮		
			var $aMove = $("<a/>").attr("href","#").text("移入收藏夹")
				//创建删除按钮			
			var $aRemove = $("<a/>").attr("href","#").addClass("remove").text("删除");
				//添加到商品进行操作的p
				$aMove.appendTo($pOperation);
				$aRemove.appendTo($pOperation);
				//给放置商品的li添加类名
			var $li = $("<li/>").addClass("goods");
				//所有添加到li
				$input.appendTo($li);
				$aImg.appendTo($li);
				$aName.appendTo($li);
				$pSize.appendTo($li);
				$pPrice.appendTo($li);
				$pOperation.appendTo($li);
				//li添加到页面显示区域
				$li.appendTo($goodsList);		    	
			}		    	
			}else{
				return
			}
			
			 $("#price_of_all").text(total_price);
			
            var goodsData = [];  
            var $goods_li =$goodsList.find("li");
                //点击删除按钮时的函数
		    	$goods_li.find(".remove").click(function(){
		    		    //获取到所有的商品li
		    		 	var $goodsList = $("#cart_content").find(".goods-list");
		    		 	var $goods_li =$goodsList.find("li");
		    		 	//获取当前商品li的下标
		    			var index = $(this).parent("p").parent("li").index();
		    			//删除指定下标的元素
		    	        $goodsList.find("li:eq("+index+")").remove();
		    	        //重新设置cookie
   					 	var d = new Date;
   					 	d.setDate(d.getDate() + 10);
   					 	//删除指定下标的商品对象；并重新赋值给cookie
   					 	var str_goods = JSON.stringify(goods_list.splice(index,1));
   					 	document.cookie ="goods="+str_goods;
   					 	判断购物车是否为空
						if($goods_li.length==2||goods_list==" "){
							//为空显示提示购物车为空的元素
		    	     		$goodsList.find(".no_goods").show();
		    	     		//结算栏隐藏
		    	     		$("#price_in_total").hide();
		    	     }
		    	
		    	
		    	
		    	
		    	})
            

}		    
			//设置全选
             $("#all").click(function(){
            	$("#cart_content").find("ul").find("input").attr("checked",true)
            })        


		    
		    

				
})
