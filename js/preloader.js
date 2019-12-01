//document on load settings
$(window).on('load', function () {
  setTimeout(function () {
		$('#preloader .pl').fadeOut(500);
		setTimeout(function () {
			$('#preloader').fadeOut(500);
		}, 500);
  }, 500);
});