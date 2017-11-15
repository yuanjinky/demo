
// 定义自己的模块
// 设置一个情景, 利用 模板渲染一个列表
// define( [ 'jquery', 'template-web' ], function ( $, template ) {
// 	// 编写我们的代码了
// 	var obj = {
// 		title: '前端基本功',
// 		list: [
// 			'HTML 语言',
// 			'CSS 技巧',
// 			'JavaScript 基础',
// 			'面向对象'
// 		]
// 	};


// 	// 渲染
// 	var html = template( 'tpl', obj );

// 	// 加到页面中
// 	$( '#container' ).html( html );

// });

define(['jquery','template'],function($,template){
	var obj={
		title:'前端基本功',
		list:[
		'html语言',
		'css样式',
		'javascript 基础',
		'面对对象',
		'ajax异步请求局部更新'
		]
	};
	var html=template('tpl',obj);
	$("#container").html(html);

})