jQuery(function($){
	        
	        var goods_list = JSON.parse(getCookie("goods"));  

		    var $goodsList = $("#cart_content").find(".goods-list");
		    console.log(goods_list);
		      
			if(goods_list.length!=0){
              $goodsList.find(".no_goods").hide();
		    for(var i=0;i<goods_list.length;i++){
	       
	       	var $input = $("<input/>").attr("type","checkbox");
	       	var $aImg =$("<a/>").attr("href","#").addClass("goodsimg");
	       	var $img =$("<img/>").attr("src",goods_list[i].img);
	     		$img.appendTo($aImg);
	        var $aName =$("<a/>").attr("href","#").addClass("goodsname").html(goods_list[i].name);            	
			var $pSize = $("<p/>").html("<span>尺码:</span>"+goods_list[i].size)
			var $pPrice =  $("<p/>").html("<span>单价:</span>"+goods_list[i].price);
			var $pOperation = $("<p/>").addClass("operation");
			var $aMove = $("<a/>").attr("href","#").text("移入收藏夹")
			var $aRemove = $("<a/>").attr("href","#").addClass("remove").text("删除");
				$aMove.appendTo($pOperation);
				$aRemove.appendTo($pOperation);
			var $li = $("<li/>").addClass("goods");
				$input.appendTo($li);
				$aImg.appendTo($li);
				$aName.appendTo($li);
				$pSize.appendTo($li);
				$pPrice.appendTo($li);
				$pOperation.appendTo($li);
				$li.appendTo($goodsList);		    	
			}		    	
			}else{
				return
			}
            var goodsData = [];  
            var $goods_li =$goodsList.find("li");
		    	$goods_li.find(".remove").click(function(){
		    		 	var $goodsList = $("#cart_content").find(".goods-list");
		    		 	var $goods_li =$goodsList.find("li");
		    			var index = $(this).parent("p").parent("li").index(); 
		    	     	goodsData = goods_list.splice(index,1)
   					 	var d = new Date;
   					 	d.setDate(d.getDate() + 10);
   					 	var str_goods = JSON.stringify(goodsData);
   					 	document.cookie ="goods="+str_goods;
   				
		    		 	$goodsList.find("li:eq("+index+")").remove();
		    	     
		    	     	if($goods_li.length==2||goods_list==" "){
		    	     		$goodsList.find(".no_goods").show();
		    	     }
		    	})
		    	   	
		    	
		    	

		    
		    

				
})
