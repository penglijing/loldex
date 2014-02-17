/**
 * Created with JetBrains WebStorm.
 * User: FrancisMeng
 * Date: 14-2-17
 * Time: 上午3:47
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
	$('#part').click(function(){
		console.log('jajaja');
		$('#part').append('<input class = "form-control otherPart" type = "text" name = "part" placeholder="part">');
	});

	$('#addChampionSubmit').click(function(){
		var champName = $('#championName').val();
		var title = $('#title').val();
		var region = $('#region').val();
		var type = $('#type').val();
		$.ajax({
			url: '/addChampion',
			type:'post',
			data: JSON.stringify({champName:champName,title:title,region:region,type:type}),
			dataType:'json',
			contentType:'application/json',
			success:function(message){
				if(!message.err){
					console.log(message.success);
					$('.tab-content').prepend('<p style = "margin-top: 10px" class = "alert alert-success">Success: Add Champion</p>');
					setTimeout(function(){
						$('.alert').fadeOut();
					},2000);
					$('#championName').val('');
					$('#title').val('');
					$('#region').val('');
					$('#type').val('');
				}else{
					$('.tab-content').prepend('<p style = "margin-top: 10px" class = "alert alert-danger">' +
						'Error: Champion is already exist</p>');
					setTimeout(function(){
						$('.alert').fadeOut();
					},2000);
					$('#championName').val('');
					$('#title').val('');
					$('#region').val('');
					$('#type').val('');
				}

			},
			error:function(err){
				console.log(err.err);
			}
		})
	});
});