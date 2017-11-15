   define(['jquery','cookie'],function($){

            $('#formId').on('submit',function(){
            var formData=$(this).serialize();
            $.ajax({
                url:'/api/login',
                data:formData,
                type:'post',
                success:function(info){
                    console.log(info);
                    if(info.code==200){
                        alert('登录成功');
                        $.cookie('userinfo',JSON.stringify(info.result),{path:'/'});
                        location.pathname='/';
                    }
                }
            })
            return false;
        })


        })