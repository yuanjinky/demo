
	// NProgress.start();

	// NProgress.done();

	// $('.navs ul').prev('a').on('click', function () {
	// 	$(this).next().slideToggle();
	// });
// 	define(['jquery','template','cookie'],function($,template){

// var php_session_id=$.cookie('PHPSESSID');
// 	if(!php_session_id && location.pathname!='/login'){
// 		location.pathname='/login';
// 	}
// 	//第二部分，页面加载的时候，从cookie去除usreinfo，得到用户的头像和用户名

// if (location.pathname!='/login') {
// 	 var userinfo=$.cookie('userinfo');
// 	 var usreinfoOBJ=JSON.parse(userinfo|| '{}');

// 	 var format=template('userinfoTpl',usreinfoOBJ);
//             $('.aside .profile').html(format);
// }
	


// 	})



define(['jquery','template','NProgress','tools','cookie',],function($,template,NProgress,tools){


$('.aside a+ul').prev().click(function(){
	$(this).next().toggle(500);

})


$(document).ajaxStart(function(){
	$('.loadingif').show();
	NProgress.start();
});
$(document).ajaxStop(function(){
	$('.loadingif').fadeOut(500);
	NProgress.done();
})




	var php_session_id=$.cookie('PHPSESSID');
if(!php_session_id &&  location.pathname!='/login'){
	location.pathname='/login'
}
if(location.pathname!='login'){
	var userinfo=$.cookie('userinfo');
	var usreinfoOBJ=JSON.parse(userinfo||'{}')
	var format=template('userinfoTpl',usreinfoOBJ);
	$('.aside .profile').html(format);
}


//退出登录
$("#btn_logout").click(function(){
	$.ajax({
		url:'/api/logout',
		type:'post',
		success:function(data){
				console.log(data);
				if(data.code==200){
					location.pathname='/';
				}
				
		}
	})
})

tools.setMenu();


})



