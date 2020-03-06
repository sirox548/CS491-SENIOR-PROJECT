<?php
	$input = file_get_contents("php://input");

  $ch = curl_init();
	//curl_setopt($ch, CURLOPT_URL, "https://web.njit.edu/~ndl25/backupProject/beta/back/login.php");
  //curl_setopt($ch, CURLOPT_URL, "https://web.njit.edu/~ts557/login.php");
  //curl_setopt($ch, CURLOPT_URL, "https://web.njit.edu/~gvc3/mLogin.php");
  curl_setopt($ch, CURLOPT_URL, "http://afsaccess1.njit.edu/~kp486/BetaLogin2.php");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, $input);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

	$result = curl_exec($ch);
  echo $result;

	curl_close($ch);
?>
