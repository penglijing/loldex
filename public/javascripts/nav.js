/**
 * Created with JetBrains WebStorm.
 * User: FrancisMeng
 * Date: 14-2-11
 * Time: 下午9:54
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
	$('.dropdown input, .dropdown label').click(function(e) {
		e.stopPropagation();
	});
	$('#registerSubmit').click(function(){
		$.ajax({
			url:'/register',
			type:'post',
			data:JSON.stringify({name: $('#regUserName').val(), password:$('#regPassword').val(), passwordRepeat:$('#confPassword').val()}),
			dataType: 'json',
			contentType: 'application/json',
			success: function(message){
				if(message.message == 'success'){
					window.location = '/';
				}
			},
			error: function(err){
				console.log(err);
			}
		});
	});

	$('#loginSubmit').click(function(){
		$.ajax({
			url:'/login',
			type:'post',
			data:JSON.stringify({name:$('#logUserName').val(),password:$('#logPassword').val()}),
			dataType:'json',
			contentType:'application/json',
			success:function(message){
				if(message.info == 'Login Success'){
					window.location = '/';
				}
			},
			error:function(err){
				console.log(err);
			}

		});
	})


});