define(['jquery','template','tools','CKEDITOR','form'],function($,template,tools,CKEDITOR,){

			
			tools.setMenu('/course/add');
			tools.expandMenu();

	var search=location.search;
	var reg=/cs_id=(\d+)/;
	var cs_id=reg.exec(search)[1];
	console.log(cs_id)
	$.ajax({
		url:'/api/course/basic',
		type:'get',
		data:{
			cs_id:cs_id
		},
		success:function(data){
			if(data.code==200){
				console.log(data);
				var html=template('addStep1Tpl',data.result);
				$('#steps1').html(html);
				CKEDITOR.replace("cs_brief");
			}
		}
	})

	$('#steps1').on('submit','#step1Form',function(){
		for(var k in CKEDITOR.instances){
			CKEDITOR.instances[k].updateElement();
		}
		alert(1)
		$(this).ajaxSubmit({
			url:'/api/course/update/basic',
			type:'post',
			success:function(data){
				if(data.code==200){
					console.log(data.result)
					location.href='/course/add_step2?cs_id='+data.result.cs_id;
				}
			}
		})
		return false;
	})
})