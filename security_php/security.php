<?

/////////////////////////////////////
// MDWiki Security Module          //
//                         V 1.0   //
//                    Taemin Lee   //
//            persuade@gmail.com   //
/////////////////////////////////////

//md : file name
//pw : password
//level : security level , 0~3
// 0 : md file load
// 1 : password check (pw.php)
// 2 : IP check (ip.php)
// 3 : access deny

include_once("pw.php");
include_once("ip.php");

$error_msg = "The content is protected";

switch($_REQUEST[level])
{
	case 0 :
		echo file_get_contents($_REQUEST['md']);
		break;
	case 1 :
		if(PWCheck())
			echo file_get_contents($_REQUEST['md']);
		else 
			echo $error_msg;
		break;
	case 2 :
		if(IPCheck())
			echo file_get_contents($_REQUEST['md']);
		else 
			echo $error_msg;
		break;
	case 3 :
		echo $error_msg;
		break;
	default :
		echo $error_msg;
		break;
}

function PWCheck()
{
	global $global_pw;
	global $local_pw;

	$url = $_REQUEST['md'];
	$pw = $global_pw;
	if(array_key_exists($url, $local_pw))
		$pw = $local_pw[$url];
	if($pw == $_REQUEST['pw'])
		return true;
	else
		return false;
}

function IPCheck()
{
	global $global_IP;
	global $local_IP;

	$client_IP = $_SERVER['REMOTE_ADDR'];
	
	$url = $_REQUEST['md'];
	$ip = $global_IP;
	if(array_key_exists($url, $local_IP))
		$ip = $local_IP[$url];
	
	$ip_s = explode(".",$ip);
	$ip_c = explode(".",$client_IP);
	
	for($i = 0; $i < sizeof($ip_s); $i++)
	{
		if($ip_s[$i] == "*")
			continue;
		if($ip_s[$i] != $ip_c[$i])
			return false;
	}
	return true;
}

?>