jQuery(function($){
	var $input = $("#register_information").find("input");
 				var num =String();
 				
 				for(var i=0;i<4;i++){
 					num=num+parseInt(Math.random()*10);
 				}
 				$warning=$("#warning")
 				$input.eq(2).val(num);
 				$input.eq(0).focusout(function(){
						 if($input.eq(0).val()==""){
 						$warning.text("请输入手机号！")
 					}else if($input.eq(0).val().length !=11||$input.eq(0).val()[0] != 1){
 						$warning.text("请输入正确手机号！")
 					}else{
 						$warning.text("");
 					}
		 
 				})
 				$input.eq(1).focusout(function(){
						 if($input.eq(1).val() != $input.eq(2).val()){
 						$warning.text("请输入正确验证码")
 					}else{
 						$warning.text("");
 					}
						 
 				}) 				
 				$input.eq(5).focusout(function(){
						 if($input.eq(5).val()==""){
 						$warning.text("请输入密码！")
 					}else if($input.eq(5).val().length< 6 || $input.eq(5).val().length>25){
 						$warning.text("请输入正确密码！")
 					}
						 else{
 						$warning.text("");
 					}
						 
 				}) 				
 				$input.eq(6).focusout(function(){
						 if($input.eq(6).val() != $input.eq(5).val()){
 						$warning.text("请输入相同密码！")
 					}else{
 						$warning.text("");
 					}
 				}) 				
 				$input.eq(8).click( function(){
 					
 					var username = $input.eq(0).val(); //账号
 					var pwd = $input.eq(5).val()      //密码
 						var d = new Date;
 						d.setDate(d.getDate() + 10);
 						var username = setCookie("username",username,d);
 						var password = setCookie("password",pwd,d);
 						console.log(document.cookie);
 						 window.open("userLogin.html");

 				} );				
 				
 				
 				
 				
 				
    	
	
	
})


