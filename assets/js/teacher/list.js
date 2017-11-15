define(['jquery','template','bootstrap'],function($,template){
	$.ajax({
	url: '/api/teacher',
	type: 'get',
	success: function ( info ) {
		if ( info.code == 200 ) {
			console.log(info);

			var html = template( 'teacherListTpl', { list: info.result } );

			$( '#tableTeacherInfoList tbody' ).html( html );
		}
	}
});

	//对家乡信息格式化，去掉|，


var rhometown=/\|/g;
	template.defaults.imports.formatHomeTown = function ( hometown ) {
	return hometown.replace( rhometown, ' ' );
}





	$( '#tableTeacherInfoList' ).on( 'click', '.showInfo', function () {
	
	var tc_id = $( this ).parent( 'td' ).attr( 'data-tc-id' );

	 
	// 通过 id 查找用户数据

	$.ajax({
		url: '/api/teacher/view',
		type: 'get',
		data: { tc_id: tc_id },
		success: function ( info ) {
			if ( info.code == 200 ) {
				 console.log(info);
				// console.log( info.result );

				// 渲染模板, 显示 模态框

				// 数据格式化的方案1
				// 
				// info.result.tc_hometown = info.result.tc_hometown.split( '|' ).join( ' ' );

				var html = template( 'modalListinfo', info.result );
				// console.log( html );
				$( '#modalTeacherInfo' ).html( html );

				// console.log( $( '#modalTeacherInfo' ) );


				$( '#teacherModal' ).modal( 'show' );

			}
		}
	})

});




	//提供讲师状态修改

  $('#tableTeacherInfoList').on('click','.status',function(){
  	// alert(1)

  	var tc_id = $( this ).parent( 'td' ).attr( 'data-tc-id' ),
  		tc_status = $( this ).attr( 'data-tc-status' );
  		var that=this;
  	// 发送请求修改状态
  	$.ajax({
  		url: '/api/teacher/handle',
		type: 'post',
		data:{
			tc_id:tc_id,
			tc_status:tc_status
		},
		success:function(info){
			console.log(info);
			if(info.code==200){
				$(that).attr('data-tc-status',info.result.tc_status)
						.text(info.result.tc_status==0?'启用':'注销').css('background',info.result.tc_status==0?'lightgreen':'#888');
			}


		}
  	})
	// 1, 获得 id
	// 2, 获得当前状态
	// 3, 发送请求
	// 4, 拿到请求结果
	// 5, 修改页面中的值

  		return false;
  })











})