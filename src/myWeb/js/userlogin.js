jQuery(function($){
	var $input = $("#login").find(".form").find("form").find("input");
	var $warning=$("#warning")
      var flag1 = false;
      var flag2 = false;
	 
	 $input.eq(2).click(function(){
	 	
	 		var $username = $input.eq(0).val();
	   		var $password = $input.eq(1).val();
			var username = getCookie("username");
			var password =  getCookie("password");
			console.log(username);
			console.log(password);
			
			if($username==username){
				flag1 = true;
			}else{
				flag1 = false;
				$warning.text("该用户名未注册");
			}
			if($password==password){
				flag2 = true;
			}else{
				flag2 = false;
				$warning.text("密码错误，请重新输入");
			}
			if(flag1&&flag2){
				window.open("../index.html");
			}else{
				return;
			}
	 	  
	 })
	  
	
	
})
