define(['jquery','tools','validate','form'],function($,tools){

	tools.expandMenu();
	$('#addCourseNameId').validate();
	$('#addCourseNameId').submit(function(){
		
		console.log($(this))
		alert(1)
		$(this).ajaxSubmit({
			url:'/api/course/create',
			type:'POST',
			success:function(info){
				if(info.code==200){
					console.log(info);
					alert('创建成功');
					location.href='/course/add_step1?cs_id='+info.result.cs_id;
				}

			}
		})
		return false;
	})

})