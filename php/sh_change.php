<?php
  require_once '../db.php';
  if (isset($_POST["sh_change"])) {
    if ($_POST["sh_change"] === 'true') {
      $_SESSION['logged_user']['sphere'] = true;
      echo json_encode('Смена spacework на online_space!');
    } else {
			$_SESSION['logged_user']['sphere'] = false;
      echo json_encode('Смена online_space на spacework!');
		}
  }
?>