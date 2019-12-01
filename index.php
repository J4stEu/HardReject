<?php
  require_once 'db.php';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>HardReject</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" href="icons/main_icon.png" type="image/png">
  <link rel="stylesheet" href="css/reset.css"/>
  <?php
		if (!isset($_SESSION["logged_user"])){
			echo  '<link rel="stylesheet" href="css/r_a.css"/>';
		} else {
			if (!$_SESSION['logged_user']['sphere']) echo  '<link rel="stylesheet" href="css/work_space.css"/>';
			else	echo  '<link rel="stylesheet" href="css/online_space.css"/>';
		}
	?>
  <link rel="stylesheet" href="preloader/preloader.css"/>
  <link rel="stylesheet" href="fonts/fonts.css"/>
  <link rel="stylesheet" href="icons/iconmonstr-iconic-font-1.3.0/css/iconmonstr-iconic-font.css"/>
</head>
<body>
	<div id="preloader">
		<div class="pl pl-origami"></div>
	</div>
	<?php
    if (!isset($_SESSION["logged_user"])){
      require_once 'pages/r_a.php';
    } else {
			if (!$_SESSION['logged_user']['sphere']) require_once 'pages/workspace.php';
			else require_once 'pages/online_space.php';
    }
  ?>
<script src="libs/jquery-3.2.1.js"></script>
<script src="js/preloader.js"></script>
<?php
	if (!isset($_SESSION["logged_user"])){
		echo '<script src="js/r_a.js"></script>';
	} else {
		if (!$_SESSION['logged_user']['sphere']){
			echo '<script src="js/work_space.js"></script>';
			echo '<script src="libs/bezier.js"></script>';	
		} else echo '<script src="js/online_space.js"></script>';
	}
?>
</body>
</html>