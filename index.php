<?php
include_once('user.php');
$user=new User();
//echo"<pre>";
echo"<!--";
print_r(json_decode(json_encode($user),true));
echo"--!>";
echo "<script> \nmoney_rate=".$user->money_rate().";\nknow_rate=".$user->know_rate().";\n</script>";
include_once('indexx.html');
?>