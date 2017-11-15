define(['jquery',
	    'template',
	    'CKEDITOR',
	    'uploadify',
	    'region',
	    'validate',
	    'zhCN',
	    'form'],function($,template,CKEDITOR){
	    	// var filename=null;
	$.ajax({
		url:'/api/teacher/profile',
		type:'get',
		success:function(info){
			if(info.code==200){

				var html=template('settingFormTpl',info.result);

				$('.body .settings').html(html);
				console.log(info.result)
				$('#upfile').uploadify({
					swf:'/assets/lib/uploadify/uploadify.swf',
					uploader:'/api/uploader/avatar',
					fileObjName:'tc_avatar',
					onUpLoadSuccess:function(_,filename){
						// filename=filename;
						// console.log(filename);

						
						$('#upImg').attr('src',JSON.parse(filename).result.path);
						// $('#profile #imgAvatar').attr('src',JSON.parse(filename).result.path);
						// // $.cookie('userinfo',JSON.stringify(info.result));
						// $.cookie('userinfo',JSON.stringify(filename));


					},
					itemTemlate:'<span></span>',
					buttonText:'',
					'width':'120px',
					'height':'120px',

				})
				// 初始化省市级联
			$( '.hometown' ).region({
				url: '/assets/lib/jquery-region/region.json'
			});




			// 使用CKEDITOR
			CKEDITOR.replace('tc_introduce')
			 }

		}
	})
	//绑定submit事件
	$('.body .settings').on('submit','#profileForm',function(){
		
		for(var k in CKEDITOR.instances){
			CKEDITOR.instances[k].updateElement();
		}


		var tc_hometown= $( 'select', this ).find( ':selected' ).map(function(){
			return $(this).text()
		}).toArray().join('|');

		console.log(tc_hometown)
		$(this).ajaxSubmit({
			url:'/api/teacher/modify',
			type:'post',
			data:{
				tc_hometown:tc_hometown
			},
			success:function(info){
				if(info.code==200){
					alert('保存成功');

					location.pathname='/'
				}
			}

		})
		
					// $('#profile img').attr('src',JSON.parse(filename).result.path);



		return false;
	})


})