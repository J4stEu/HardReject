<?php
  require_once '../db.php';
  if (isset($_POST['email']) & isset($_POST['pass'])) {
    $data = $_POST;
    $errors = array();
    
    if ((trim($data['email']) === '') || (trim($data['pass']) === '')) {
      $errors[] = 'Данные некоректны!';
    }
    
    if (!preg_match('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/u', trim($data['email']))){
      $errors[]='Данные некоректны!';
    }
    if (!preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/u', trim($data['pass']))){
      $errors[]='Данные некоректны!';
    }
    
    if (empty($errors)) {
      $user = R::findOne('users', 'email=?', array($data['email']));
      if ($user) {
        if ($data['pass'] === $user->pass) {
          $_SESSION['logged_user'] = $user;
          $_SESSION['logged_user']['sphere'] = false;
					$projects = R::getAll('SELECT * FROM projects WHERE user_id = '.$_SESSION["logged_user"]['id']);
					if ($projects) {
						$_SESSION['logged_user']['ws_project'] = $projects[0]['id'];	
					}
          echo json_encode('Вы авторизованы!');
        } else {
          $errors[] = 'Данные некоректны!';
          echo json_encode($errors[0]);
        }
      } else {
        $errors[] = 'Данные некоректны!';
        echo json_encode($errors[0]);
      }
    } else {
      echo json_encode($errors[0]);
    }
  }
?>