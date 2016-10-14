jQuery(function($){
	
	var flag1 = false;
	var flag2 = false;
	var flag3 = false;
	var flag4 = false;
	
	
	var $input = $("#register_information").find("input");
 				var num =String();
 				
 				for(var i=0;i<4;i++){
 					num=num+parseInt(Math.random()*10);
 				}
 			    $("#get_validation").text(num);
 				$("#get_validation").click(function(){
 					 num="";
 					  $("#get_validation").text("");
 					for(var i=0;i<4;i++){
 					num=num+parseInt(Math.random()*10);
 					
 					}
 					 $("#get_validation").text(num);
 					 
 					
 				})
 				
 				$warning=$("#warning")
 			
 				$input.eq(0).focusout(function(){
 					var re = /^[1]\d{10}$/;
 					var ph_num = $input.eq(0).val()
						 if($input.eq(0).val()==""){
 						$warning.text("请输入手机号！")
 						flag1 = false;
 					}else if(!re.test(ph_num)){
 						$warning.text("请输入正确手机号！")
 						flag1 = false;
 					}else{
 						$warning.text("");
 						flag1 = true;
 					}
		 
 				})
 				$input.eq(1).focusout(function(){
						 if($input.eq(1).val() != num){
 						$warning.text("请输入正确验证码")
 						flag2 = false;
 					}else{
 						$warning.text("");
 						flag2 = true;
 					}
						 
 				}) 				
 				$input.eq(4).focusout(function(){
						 if($input.eq(4).val()==""){
 						$warning.text("请输入密码！")
 						flag3 = false;
 					}else if($input.eq(4).val().length< 6 || $input.eq(4).val().length>25){
 						$warning.text("请输入正确密码！")
 						flag3 = false;
 					}
						 else{
 						$warning.text("");
 						flag3 = true;
 					}
						 
 				}) 				
 				$input.eq(5).focusout(function(){
						 if($input.eq(5).val() != $input.eq(5).val()){
 						$warning.text("请输入相同密码！")
 						flag4 = false;
 					}else{
 						$warning.text("");
 						flag4 = true;
 					}
 				}) 				
 				$input.eq(7).click( function(){
 					if(flag1&&flag2&&flag3&&flag4){
 					var username = $input.eq(0).val(); //账号
 					var pwd = $input.eq(4).val()      //密码
 						var d = new Date;
 						d.setDate(d.getDate() + 10);
 						var username = setCookie("username",username,d);
 						var password = setCookie("password",pwd,d);
 						console.log(document.cookie);
 						 window.open("userLogin.html");
						}else{
							return
						}
 				} );				

 				
 				
 				
 				
    	
	
	
})


