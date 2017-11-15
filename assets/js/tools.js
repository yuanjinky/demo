define(['jquery'],function($){

	var setMenu=function(urladd){
		var pathname=
		urladd||location.pathname;
		console.log(pathname);
		$('.aside li a').toArray().filter(function(dom){
			return dom.pathname==pathname;
			console.log(dom);
		}).forEach(function(dom){
			$(dom).addClass('active');
			console.log(dom);
		})

	}
	var expandMenu=function(){
		$('.aside a+ul').show();
	}

	return {setMenu:setMenu,
			expandMenu:expandMenu}
})