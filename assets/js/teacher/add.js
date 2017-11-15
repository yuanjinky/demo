define(['jquery',
	   'template',
	   'zhCN',
	   'validate'],function($,template){

	var rtcId = /tc_id=(\d+)/;





	var search=location.search;
	if(search.length>0){
		//编辑页面
		modifyTeacher();
	}else{
		//添加页面
		addTeacher();
	}
//添加讲师代码
	function addTeacher(){
		var html=template('addTheacherTpl',{
			tc_way: '讲师添加',
		    tc_btn_value: '添 加',


		});
			$( '#addTeacher' ).html( html );
			$('#addTeacherForm').validate({
				description:{
					required:{
						required:'请填写完整信息'
					}
				}
			})

			$('#addTeacher').on('submit','#addTeacherForm',function(){

				var formData=$(this).serialize();
				console.log(formData);
				$.ajax({
					url:'/api/teacher/add',
					type:'post',
					data:formData,
                    success:function(info){
                    	if(info.code==200){
							

							location.pathname='/teacher/list';
						}
                    }
						
					
				})
        return false;
			})
	}

 //编辑讲师代码
	function modifyTeacher(){
		var tc_id=rtcId.exec(search)[1];


		$.ajax({
			url:'/api/teacher/view',
			type:'post',
			data:{
				tc_id:tc_id
			},
			success:function(info){
				alert(1);
				console.log(info);
				if(info.code==200){
					console.log(info.result);
					info.result.tc_way='讲师编辑';
					info.result.tc_btn_value='编辑';
					$( '#addTeacher' ).html( template('addTheacherTpl', info.result ) );
					$('#addTeacherForm').validate({
					description:{
					required:{
						required:'请填写完整信息'
					         }
					            }
					})
					

			$('#addTeacher').on('submit','#addTeacherForm',function(){

				var formData=$(this).serialize();
				console.log(formData);
				$.ajax({
					url:'/api/teacher/update',
					type:'post',
					data:formData,
					success:function(info){
						console.log(info);
						if(info.code==200){
							
							location.pathname='/teacher/list';
						}
					}
				})
        return false;
			})




				}


			}
		})
	}


})