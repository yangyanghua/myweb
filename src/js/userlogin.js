jQuery(function($){
	//获取要操作的元素
	var $input = $("#login").find(".form").find("form").find("input");
	var $warning=$("#warning")
	//定义变量
      var flag1 = false;
      var flag2 = false;
	 //点击登录时执行的函数
	 $input.eq(2).click(function(){
	 	    //获取input
	 		var $username = $input.eq(0).val();
	   		var $password = $input.eq(1).val();
	   		//获取cookie里的用户名
			var username = getCookie("username");
			//获取cookie里的密码
			var password =  getCookie("password");
			//console.log(username);
			//console.log(password);
			//判断帐号是否注册
			if($username==username){
				flag1 = true;
			}else{
				flag1 = false;
				$warning.text("该用户名未注册");
			}
			//判断密码是否正确
			if($password==password){
				flag2 = true;
			}else{
				flag2 = false;
				$warning.text("密码错误，请重新输入");
			}
			//判断是否都通过
			if(flag1&&flag2){
				//通过，打开首页
				window.open("../index.html");
			}
			//else{
//				return;
//			}
	 	  
	 })
	  
	
	
})
