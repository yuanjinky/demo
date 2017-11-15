define(['jquery','template'],function(a,template){
		var obj={
			title:'前端基本功',
		    list: [
			'HTML 语言',
			'CSS 技巧',
			'JavaScript 基础',
			'面向对象'
		]
		}
		// 渲染
	var html = template( 'tpl', obj );

	// 加到页面中
	a( '#container' ).html( html );
})