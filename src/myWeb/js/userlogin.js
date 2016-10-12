jQuery(function($){
	var $input = $("#login").find(".form").find("form").find("input");
	var $warning=$("#warning")

	 
	 $input.eq(2).click(function(){
	 	
	 		var $username = $input.eq(0).val();
	   		var $password = $input.eq(1).val();
			var username = getCookie("username");
			var password =  getCookie("password");
			console.log(username);
			console.log(password);
	 	    if($username==username&&$password==password){
	 	    	window.open("index.html")
	 	    }else if($username!=username){
	 	    	$warning.text("该用户名未注册")
	 	    }else if($password!=password){
	 	    	$warning.text("密码错误，请重新输入")
	 	    }
	 })
	  
	
	
})
