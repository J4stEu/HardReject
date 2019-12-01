//default settings
var chosen_mode = false;
var resume_info_position = 1;
var resume_status_cheker = false;
var r_err = [true , true, true];
var a_err = [true , true];

//document on load settings
$(window).on('load', function () {
  setTimeout(function () {
		$('#preloader .pl').fadeOut(500);
		setTimeout(function () {
			$('#preloader').fadeOut(500);
		}, 500);
  }, 500);
});

$( document ).ready(function() {
	
});

function items_controll(){
	
}
//work mode
function choose_mode(sh1, allow) {
	if (allow) {
		$(sh1).fadeOut(400);
		setTimeout(function () {
			$('.square_enter').animate({
					width: ($('.square_enter').width() / 2) + 'px',
			}, 500, "linear" ); 	
		}, 400);
		chosen_mode = true;	
	} else $(sh1).css('display' , 'block');
}
$('.sq_1').click(function () {
	choose_mode('.sq_2', true);
	setTimeout(function () {
		$('#enter_conteiner').fadeIn();
		$('.square_conteiner').css('opacity' , '0');
		setTimeout(function () {
			$('#enter_conteiner').css('box-shadow' , 'rgba(0, 0, 0, 0.35) 0px 13px 34px 0px');
		}, 200);
		setTimeout(function () {
			choose_mode('.sq_2', false);
		}, 500);
	}, 1000);
	$('.square_conteiner').css('pointer-events' , 'none');
});
$('.sq_2').click(function () {
	choose_mode('.sq_1', true);
	setTimeout(function () {
		$('#enter_conteiner').fadeIn();
		$('.square_conteiner').css('opacity' , '0');
		setTimeout(function () {
			$('#enter_conteiner').css('box-shadow' , 'rgba(0, 0, 0, 0.35) 0px 13px 34px 0px');
		}, 200);
		setTimeout(function () {
			choose_mode('.sq_1', false);
		}, 500);
	}, 1000);
	$('.square_conteiner').css('pointer-events' , 'none');
});
$('.close_enter').click(function () {
	$('#enter_conteiner').css('box-shadow' , 'none');
	setTimeout(function () {
		$('#enter_conteiner').fadeOut();
	}, 200);
	setTimeout(function () {
		$('.square_enter').css('width' , $('.square_enter').width() * 2 + 'px');
		$('.square').css('display' , 'flex');
		$('.square_conteiner').css('opacity' , '1');
		$('.square_conteiner').css('pointer-events' , 'auto');
	}, 500);
});
function over_enter(on, type, type2){
  if (on) {
    $(type).css('width' , 'calc(30% - 1px)');
		$(type2).css('width' , '70%');
		setTimeout(function () {
			if (Math.floor($(type).width() / $(type).parent().width() * 100) >= 22) {
				$(type+' .im-magnifier-plus').fadeOut(200);
				$(type+' .im-arrow-left').fadeIn(300);
				$(type+' .im-arrow-right').fadeIn(300);   
			}
		}, 100);  
  } else {
		if (!resume_status_cheker) {
			$(type+' .im-arrow-left').fadeOut(300);
			$(type+' .im-arrow-right').fadeOut(300);
			$(type+' .im-magnifier-plus').fadeIn(400);
			$(type).css('width' , 'calc(20% - 1px)');
			$(type2).css('width' , '80%'); 
		} else resume_status_cheker = false;
  }   
}
$('.auth_shadow').mouseover(function () {
  over_enter(true, '.auth' , '.reg');
});
$('.auth_shadow').mouseout(function () {
  over_enter(false, '.auth' , '.reg');
});
$('.reg_shadow').mouseover(function () {
  over_enter(true, '.reg' , '.auth');
});
$('.reg_shadow').mouseout(function () {
  over_enter(false, '.reg' , '.auth');
});
$('.auth_shadow').click(function () {  
  change_enter();
	$('.enter_title').fadeOut();
	setTimeout(function () {
		$('.enter_title').text('Панель авторизации');
		$('.enter_title').fadeIn();
	}, 500)
});
$('.reg_shadow').click(function () {
  change_enter();
	$('.enter_title').fadeOut();
	setTimeout(function () {
		$('.enter_title').text('Панель регистрации');
		$('.enter_title').fadeIn();
	}, 500)
});
$('.change_enter').click(function () {
  change_enter();
	$('.enter_title').fadeOut();
	setTimeout(function () {
		if ($('.enter_title').text() === 'Панель авторизации') $('.enter_title').text('Панель регистрации');
		else $('.enter_title').text('Панель авторизации');
		$('.enter_title').fadeIn();
	}, 400)
});
function change_enter(){
  setTimeout(function () {
    switch (resume_info_position) {
      case 1:
				$('.reg_shadow').fadeOut();
				setTimeout(function () {
					$('.auth').css('width' , 'calc(20% - 1px)');
					$('.reg').css('width' , '80%');
				}, 400);
				setTimeout(function () {
           $('.auth_shadow').fadeIn(500);
        }, 200);
				resume_info_position = 2;
				resume_status_cheker = true;
        break;
			case 2:
				$('.auth_shadow').fadeOut();
				setTimeout(function () {
					$('.auth').css('width' , 'calc(80% - 1px)');
          $('.reg').css('width' , '20%');
				}, 400);
				setTimeout(function () {
           $('.reg_shadow').fadeIn(500);
        }, 200);
        resume_info_position = 1;
				resume_status_cheker = true;
        break;
    }
  }, 100)
}

//form validation
function e_p_valid(id,c,i1,i2){
  var control = c;
  if (control.test($(id).val())) {
    if ((id === '#r_email')||(id === '#r_pass')) {
      r_err[i1] = false;
    } else {
      a_err[i2] = false;
    }
    $(id).css('color' , 'black');    
  } else {
    if(id === '#r_pass'){
      r_err[i1] = true;
    } else {
      a_err[i2] = true;
    }
    $(id).css('color' , '#FF4A40');  
  }
}
$('#r_email').change(function(){
  e_p_valid('#r_email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/, 0, 0);
});
$('#a_email').change(function(){
  e_p_valid('#a_email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/, 0, 0);
});
$('#r_pass').change(function(){
  e_p_valid('#r_pass', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, 2, 1);
});
$('#a_pass').change(function(){
  e_p_valid('#a_pass', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, 2, 1);
});
$('#r_fio').change(function(){
  var control = /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/;
  if (control.test($('.fio').val())) {
    r_err[1] = false;
    $('.fio').css('color' , 'black');  
  } else {
    r_err[1] = true;
    $('.fio').css('color' , '#FF4A40');  
  }
});
//registration 
//registration query settings
$('#r_panel_button').click(function(){
	var access_point = false;
  for (var i = 0; i <= r_err.length; i++) {
    if (!r_err[i]) access_point = true;
    else {
      access_point = false;
      break;
    }
  }
  if (access_point) {
		$.ajax({
			url: 'php/r_data.php', 
			type: 'POST',
			dataType: 'json', 
			data: {
				email: $('#r_email').val(),
				fio: $('#r_fio').val(),
				pass: $('#r_pass').val()
			},
			success: function(data){
				alert(data);
				$('#r_email').val('');
				$('#r_fio').val('');
				$('#r_pass').val('');
			},
			error:function(){
				alert('Уведомление! Что-то пошло не так...');
			},
		});
	} else {
		alert('Ошибка заполнения полей регистрации!');
		$('#r_email').val('');
		$('#r_fio').val('');
		$('#r_pass').val('');
	}
});
//authentication query settings
$('#a_panel_button').click(function(){
  var access_point = false;
  for (var i = 0; i <= a_err.length; i++) {
    if (!a_err[i]) access_point = true;
    else {
      access_point = false;
      break;
    }
  }
  if (access_point) {
    $.ajax({
      url: 'php/a_data.php', 
      type: 'POST',
      dataType: 'json', 
      data: {
        email: $('#a_email').val(),
        pass: $('#a_pass').val()
      },
      success: function(data){
        alert('Уведомление!' + data + ' Нажмите "ОК."');
        location.reload();
      },
      error:function(){
        alert('Уведомление! Что-то пошло не так...');
      },
    });
  } else {
    alert('Уведомление! Ошибка заполнения полей авторизации!');
  }
});

//log out settings
$('#log_out').click(function () {
  $.ajax({
    url: 'php/log_out.php', 
    type: 'POST',
    dataType: 'json', 
    data: {
      log_out: true
    },
    success: function(data){
      alert('Уведомление!' + data + ' Нажмите "ОК."');
      location.reload();
    },
    error:function(){
      alert('Уведомление! Что-то пошло не так...');
    },
  });
});