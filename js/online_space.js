//change sphere settings
$('.change_sphere').click(function () {
	//alert('Переход в онлайн ещё находится в разработке!');
  $.ajax({
    url: 'php/sh_change.php', 
    type: 'POST',
    dataType: 'json', 
    data: {
      sh_change: false
    },
    success: function(data){
			alert(data + ' Нажмите "ОК".');
      location.reload();
    },
    error:function(){
      alert('Уведомление! Что-то пошло не так...');
    },
  });
});

//log out settings
$('.log_out').click(function () {
  $.ajax({
    url: 'php/log_out.php', 
    type: 'POST',
    dataType: 'json', 
    data: {
      log_out: true
    },
    success: function(data){
			alert(data + ' Нажмите "ОК".');
      location.reload();
    },
    error:function(){
      alert('Уведомление! Что-то пошло не так...');
    },
  });
});

//project type settingss
$('.content_1_themes_type span').click(function () {
  if ($('.project_all_conteiner').css('display') === 'block') {
    $('.project_all_conteiner').css('display', 'none');
    $('.project_your_conteiner').css('display', 'block');
    $('.content_1_themes_type span:first-child').css('color', 'black');
    $('.content_1_themes_type span:last-child').css('color', '#66E275');
  } else {
    $('.project_your_conteiner').css('display', 'none');
    $('.project_all_conteiner').css('display', 'block');
    $('.content_1_themes_type span:first-child').css('color', '#66E275');
    $('.content_1_themes_type span:last-child').css('color', 'black');
  }
});