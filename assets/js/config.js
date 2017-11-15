// require.config({
// 	baseUrl:'/assets',
// 	paths:{
// 	//第三方插件
// 	jquery:'lib/jquery/jquery',
// 	less:'lib/less.js/less',
// 	cookie:'lib/jquery-cookie/jquery.cookie',
// 	template:'lib/artTemplate/template',
// 	//自己写的js
// 	common:'js/common',
// 	login:'js/index/login'

// 	}
// })

// require(['less','common']);

require.config({
	baseUrl:'/assets',
	paths:{
		//第三方模块
		less:'lib/less.js/less',
		template:'lib/artTemplate/template-web',
		jquery:'lib/jquery/jquery',
		bootstrap:'lib/bootstrap/dist/js/bootstrap',
		cookie:'lib/jquery-cookie/jquery.cookie',
		NProgress:'lib/nprogress/nprogress',
		datepicker:'lib/bootstrap-datepicker/js/bootstrap-datepicker',
		zhCN:'lib/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
		validate:'lib/validate-master/jquery-validate',
		uploadify:'lib/uploadify/jquery.uploadify',
		region:'lib/jquery-region/jquery.region',
		form:'lib/jquery-form/jquery.form',
		CKEDITOR:'lib/ckeditor/ckeditor',
		Jcrop:'lib/jcrop-WIP-2.x/js/Jcrop',

		//自己写的模块
		common:'js/common',
		login:'js/index/login',
		teacherList:'js/teacher/list',
		teacherAdd:'js/teacher/add',
		settings:'js/index/settings',
		tools:'js/tools',
		courseAdd:'js/course/courseAdd',
		step1:'js/course/add_step1',
		step2:'js/course/add_step2'

	},
	shim: {
		bootstrap: {
			deps: [ 'jquery' ]
		},
		zhCN:{
			deps:['datepicker']
		},
		validate:{
			deps:['jquery']
		},
		uploadify:{
			deps:['jquery']
		},
		CKEDITOR:{
			exports:'CKEDITOR'
		},
		Jcrop:{
			deps:['jquery']
		}



	}
})
require(['less','common'])