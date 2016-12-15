jQuery(function($){
	//创建变量	
	var flag1 = false;
	var flag2 = false;
	var flag3 = false;
	var flag4 = false;
	
	
	var $input = $("#register_information").find("input");
				//创建一新子符串
				var num =String();
				//页面刷新，显示一组随机验证码
 				for(var i=0;i<4;i++){
 					num=num+parseInt(Math.random()*10);
 				}
 				//赋值
 			    $("#get_validation").text(num);
 			    //点击验证码，跟换一组新的验证码
 				$("#get_validation").click(function(){
 					  num="";
 					  $("#get_validation").text("");
 					for(var i=0;i<4;i++){
 					num=num+parseInt(Math.random()*10);
 					
 					}
 					 $("#get_validation").text(num);
 					 
 					
 				})
 				//获取提示信息栏
 				$warning=$("#warning")
 				//当元素失去焦点时验证手机号
 				$input.eq(0).focusout(function(){
 					//创建正则表达式
 					var re = /^[1]\d{10}$/;
 					var ph_num = $input.eq(0).val()
						if($input.eq(0).val()==""){
						//如果输入为空	
 						$warning.text("请输入手机号！")
 						flag1 = false;
 					}else if(!re.test(ph_num)){
 						//如果手机号码格式不对
 						$warning.text("请输入正确手机号！")
 						flag1 = false;
 					}else{
 						//正确
 						$warning.text("");
 						flag1 = true;
 					}
		 
 				})
 				//元素失去焦点  验证验证码
 				$input.eq(1).focusout(function(){
					if($input.eq(1).val() != num){
						//输入错误
 						$warning.text("请输入正确验证码")
 						flag2 = false;
 					}else{
 						//正确
 						$warning.text("");
 						flag2 = true;
 					}
						 
 				})
 				//验证密码
 				$input.eq(4).focusout(function(){
					if($input.eq(4).val()==""){
						//密码为空 	
 						$warning.text("请输入密码！")
 						flag3 = false;
 					}else if($input.eq(4).val().length< 6 || $input.eq(4).val().length>25){
 						//密码格式错误
 						$warning.text("请输入正确密码！")
 						flag3 = false;
 					}
					else{
						//正确
 						$warning.text("");
 						flag3 = true;
 					}
						 
 				}) 
 				//验证再次输入密码是否一致
 				$input.eq(5).focusout(function(){
					if($input.eq(5).val() != $input.eq(5).val()){
 						//不一致
 						$warning.text("请输入相同密码！")
 						flag4 = false;
 					}else{
 						//一致
 						$warning.text("");
 						flag4 = true;
 					}
 				})
 				//点击确认并注册
 				$input.eq(7).click( function(){
 					//判断之前的验证是否都通过；
 					if(flag1&&flag2&&flag3&&flag4){
 						//通过就执行下列函数
 						//获取输入的帐号密码
 					var username = $input.eq(0).val(); //账号
 					var pwd = $input.eq(4).val()      //密码
 						//创建cookie				
 					var d = new Date;
 						d.setDate(d.getDate() + 10);
 					var username = setCookie("username",username,d);
 					var password = setCookie("password",pwd,d);
 					//console.log(document.cookie);
 					//跳转到登录界面
 					window.open("userLogin.html");
						}else{
							//不通过，返回
							return
						}
 				} );				

 				
 				
 				
 				
    	
	
	
})


