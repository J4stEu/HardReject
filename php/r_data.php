<?php
  require_once '../db.php';
  if (isset($_POST['email']) & isset($_POST['fio']) & isset($_POST['pass'])) {
    $data = $_POST;
    $errors = array();
    
    if ((trim($data['email']) === '') || (trim($data['fio']) === '') || (trim($data['pass']) === '')) {
      $errors[] = 'Данные некоректны!';
    }
    
    if (!preg_match('/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/u', trim($data['email']))){
      $errors[]='Данные некоректны!';
    }
    if (!preg_match("/^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/u", trim($data['fio']))){
      $errors[]='Данные некоректны!';
    }
    if (!preg_match('/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/u', trim($data['pass']))){
      $errors[]='Данные некоректны!';
    }
    
    if (R::count("users","email=?", array($data["email"])) > 0) {
      $errors[]='Такой пользователь уже существует!';
    }
    
    if (empty($errors)) {
      $users = R::dispense('users');
      $users->email = $data['email'];
      $users->fio = $data['fio'];
      $users->pass = $data['pass'];
      $store_data = R::store($users);
      echo json_encode('Вы зарегестрированы!');
    } else {
      echo json_encode($errors[0]);
    }
  }
?>