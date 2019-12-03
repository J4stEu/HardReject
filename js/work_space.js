//default settings
var menu_main_mode = true; //whatch for menu mode
var backs = ['img/workspace_back/v211batch11-nunoon-100-creative.jpg', 'img/workspace_back/v211batch11-nutan-151-plan.jpg', 'img/workspace_back/v211batch11-nunoon-103-ideas.jpg', 'img/workspace_back/v211batch11-nutan-52-brainstorm.jpg']; //background sources

//documenton ready, resize
$(document).ready(function () {
	descr_position();
});

$(window).resize(function () {
	descr_position();
	$("#ropebag").remove();
	setTimeout(function(){
		main_line_dependence();
	}, 300)
});

function descr_position() {
	for (var i = 0; i <= 3; i++) {
		$('#nav_pos_' + (i + 1) + ' .description').css('left' , 'calc(100% + ' + ($('.right_visible').width()/2 - $('#workspace_menu').width()/4 - $('#nav_pos_' + (i + 1) + ' .description').width()/2 ) + 'px)');
	}
}
//main menu settings
$('.nav_pos p').mouseover(function () {
	if (menu_main_mode) {
		descr_position();
		$('.right_visible').css('opacity' , '0');
		$('#' + $(this).parent().prop('id') + ' .description').fadeIn(200);
		var addr = parseInt(($(this).parent().prop('id')).match(/\d+/));
		addr++;
		$('.left_visible div').css('opacity' , '0');
		$('.left_visible_' + addr).css('opacity' , '1');	
	} 
});
$('.nav_pos p').mouseout(function () {
	if (menu_main_mode) {
		$('#' + $(this).parent().prop('id') + ' .description').css('display' , 'none');
		$('.left_visible div').css('opacity' , '0');
		$('.right_visible').css('opacity' , '1');
		$('.left_visible_1').css('opacity' , '1');	
	}
});

$('#workspace_menu').mouseover(function () {
	if (!menu_main_mode) {
		$('.ws_menu').css('display' , 'none');
		$('.ws_back_mode').css('display' , 'block');
	}
})
$('#workspace_menu').mouseout(function () {
	if (!menu_main_mode) {
		$('.ws_menu').css('display' , 'block');
		$('.ws_back_mode').css('display' , 'none');
	}
})
$('.ws_back_mode').click(function () {
	$('.ws_menu').css('display' , 'block');
	$('.ws_back_mode').css('display' , 'none');
	$('#projects').fadeOut(500);
	$('#tasks').fadeOut(500);
	$('#results').fadeOut(500);
	$('#example').fadeOut(500);
	$("#ropebag").remove();
	$('#workspace_menu').css('border-right' , '0px solid #8271d5');
	$('.ws_menu .nav_pos').css('display' , 'block');
	$('.nav_pos').css('margin-top' , '50px');
	$('.nav_pos:first-child').css('margin-top' , '0');
	$('#back_visible').css('display' , 'flex');
	$('.description').css('left' , 'calc(100% + ' + ($('.right_visible').width()/2 - $('.description').width()/2 - $('#workspace_menu').width()/4) + 'px)');
	$('#workspace_menu').animate({
		left: '50%',
	}, 500, "linear");
	menu_main_mode = true;
});

//change content settings
$('.nav_pos').click(function () {
	var id = parseInt(($(this).prop('id')).match(/\d+/));
	$('.ws_menu .nav_pos').css('display' , 'none');
	$('#' + $(this).prop('id')).fadeIn();
	$('#' + $(this).prop('id')).css('margin-top' , '0');
	$('#back_visible').css('display' , 'none');
	$('.ws_menu .description').css('display' , 'none');
	$('#workspace_menu').animate({
		left: 0 + $('#workspace_menu').width()/2 + 'px'
	}, 500, "linear");
	setTimeout(function () {
		switch (id) {
			case 1:
				$('#projects').fadeIn();
				$('#projects').css({'background' : 'url(' + backs[id - 1] + ')', 'background-size': 'cover'});
				break;
			case 2:
				$('#tasks').fadeIn();
				$('#tasks').css({'background' : 'url(' + backs[id - 1] + ')', 'background-size': 'cover'});
				break;
			case 3:
				$('#results').fadeIn();
				main_line_dependence();
				$('#results').css({'background' : '#B8AEEA'});
				break;
			case 4:
				$('#example').fadeIn();
				$('#example').css({'background' : 'url(' + backs[id - 1] + ')', 'background-size': 'cover'});
				break;
		}
		$('#workspace_menu').css('border-right' , '4px solid #8271d5');
		menu_main_mode = false;
	}, 500)
})

//add info setttings
$('.add_pr i').click(function () {
	alert('Сайт находится в бета тестировании. Большинство данных добавляется через БД напрямую. Код скинут на GIT.');
});
$('.add_task i').click(function () {
	alert('Сайт находится в бета тестировании. Большинство данных добавляется через БД напрямую. Код скинут на GIT.');
});

//add info setttings
function main_line_dependence(){
	$('.main').bezier({strokeColor : 'red', animationDirection : 'left',});
	for (var i = 0; i < $('.left_pr').children('div').length; i++){
		for (var j = 0; j < completed_tasks.length; j++){
			if (i === j) $('.pr_' + (i+1)).bezier({strokeColor : '#66E275',});
			else $('.pr_' + (i+1)).bezier({strokeColor : '#FF4A40',});
		}
	}
}

//change sphere settings
$('.change_sphere').click(function () {
	//alert('Переход в онлайн ещё находится в разработке!');
  $.ajax({
    url: 'php/sh_change.php', 
    type: 'POST',
    dataType: 'json', 
    data: {
      sh_change: true
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