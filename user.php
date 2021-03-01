<?php
class User{
	protected $mysql=array();

	private $user_software;
	private $geo_ip;	
	
	public $country;
	public $subdivision;
	public $city;
	public $lat;
	public $lon;
	public $timezone;	
	public $os;
	public $browser;
	public $ismobile;
	public $ref_type;
	public $visited;
	public $views;
	public $ip;
	public $user_time;
	public function __construct(){
		include_once('mysql_config.php');
		$this->mysql=$mysql;
		$this->user_software=$this->user_software_info();
		$this->browser=$this->user_software->browser;
		$this->ismobile=$this->user_software->ismobiledevice;
		$this->os=$this->user_OS_type();
   	$this->ref_type=$this->get_ref_type();
		$this->visited=$this->is_visited();
		$this->views=$this->get_views();
		$this->ip = $_SERVER['REMOTE_ADDR'];
		$this->geo_ip=$this->geo_ip_magic();
		$this->city=$this->geo_ip->city->name;
		$this->country=$this->geo_ip->country->isoCode;
		$this->lat=$this->geo_ip->location->latitude;
		$this->lon=$this->geo_ip->location->longitude;
		$this->timezone=$r=json_decode(json_encode($this->geo_ip->location),true)['time_zone'];
		$this->subdivision=$this->geo_ip->mostSpecificSubdivision->name;
		$this->user_time=$this->get_user_time();
  	}
  private function my_connect(){
	  return new mysqli($this->mysql['host'], $this->mysql['user'], $this->mysql['password'], $this->mysql['db']);
  }
	private function ref_cutter($url){
		$strn=strripos($url,"://");
		if(!($strn===false)){
			$url=substr($url, $strn+3);
		}
		$strn=stripos($url, "/");
		if(!($strn===false)){
			$url=substr($url,0,$strn);
		}
		return $url;
	}
	private function get_ref_type(){
		if(isset($_SERVER['HTTP_REFERER'])){
			$url=$_SERVER['HTTP_REFERER'];
		}
		else{
			return "none";
		}
		$url=$this->ref_cutter($url);
		$m=$this->my_connect();
		$t=$m->query('SELECT `types`.`type` FROM `refsite` INNER JOIN `types` ON `refsite`.`type`=`types`.`id` where `refsite`.`link` LIKE "%'.$url.'%";');
		if($t->num_rows>0){
			return $t->fetch_assoc()['type'];
		}
		else{
			return "other";		
		}
		$t->close();
		$m->close();
	}
	private function is_visited(){
		if(isset($_COOKIE['v']) and isset($_COOKIE['d'])){
			setcookie("v", $_COOKIE['v']+1, time()+31536000);
			if(time()-$_COOKIE['d']>3600){
				return true;
			}
			else{
				return false;			
			}
		}
		else{
			setcookie("v", 1, time()+31536000);
			setcookie("d", time(), time()+31536000);
			return false;		
		}
	}
	private function user_OS_type(){
		switch($this->user_software->platform_maker){
			case "Microsoft Corporation":
				return "windows";
			break;
			case "Apple Inc":
				if($this->user_software->ismobiledevice){
					return "ios";
				}
				else{
					return "mac";
				}
			break;
			case "Google Inc":
				if($this->user_software->ismobiledevice){
					return "android";
				}
				else{
					return "chrome";
				}
			break;
			case "Linux Foundation":
				return "linux";
			break;
			case "FreeBSD Foundation":
				return "bsd";
			break;
			default:
				return "other";
			break;
		}
	}
	private function is_mobile(){
		return $this->user_software['browser'];
	}
	private function user_software_info(){
		return get_browser($_SERVER['HTTP_USER_AGENT']);		
	}
	private function get_views(){
		if(isset($_COOKIE['v']) and isset($_COOKIE['d'])){
			return $_COOKIE['v'];		
		}
	}
	private function geo_fetch(){
			
	}
	private function geo_ip_magic(){
		require_once("geoip2.phar");
		$reader = new GeoIp2\Database\Reader('GeoLite2-City.mmdb');
		return $reader->city($this->ip);
	}
	private function get_user_time(){
		$TimeZone = new DateTimeZone($this->timezone);
		$date=new DateTime("now", $TimeZone);
		return $date->getTimestamp();
	}
	public function money_rate(){
		$rate=0;
		if($this->country!="RU"){
			$rate+=15;		
		}
		if($this->subdivision=="Moscow"){
			$rate+=5;		
		}
		elseif($this->subdivision=="St.-Petersburg"){
			$rate+=5;		
		}
		elseif($this->subdivision=="Novosibirsk Oblast"){
			$rate+=5;		
		}
		if($this->os=="mac"){
			$rate+=10;		
		}
		elseif($this->os=="ios"){
			$rate+=5;		
		}
		elseif($this->os=="chrome"){
			$rate+=8;		
		}
		elseif($this->os=="windows"){
			$rate+=5;		
		}
		elseif($this->os=="android"){
			$rate+=5;		
		}
		elseif($this->os=="linux"){
			$rate-=1;		
		}
		elseif($this->os=="bsd"){
			$rate-=5;		
		}
		else{
			$rate-=10;		
		}
		if($this->browser=="Safari"){
			$rate+=10;		
		}
		elseif($this->browser=="IE"){
			$rate-=5;		
		}
		else{
			$rate+=5;		
		}
		if((date("h",$this->user_time)<10 OR date("h",$this->user_time)<16) AND !$this->ismobile){
			$rate*=1.3;
		} 
		if($this->ismobile){
			$rate*=0.9;		
		}
		return $rate/45.5*100;
	}
	public function know_rate(){
		$rate=0;
		if($this->visited){
			$rate+=$this->views*0.01;
		}
		else{
			$rate-=$this->views*0.01;
		}
		if($this->ref_type=="social"){
			$rate+=abs($rate*0.2);
		}
		elseif($this->ref_type=="search"){
			$rate+=5;
		}
		elseif($this->ref_type=="finance"){
			$rate+=10;
		}
		elseif($this->ref_type=="fun"){
			$rate-=1;
		}
		if((date("h",$this->user_time)<10 OR date("h",$this->user_time)<16) AND !$this->ismobile){
			$rate+=3;
		} 
		return $rate*3.5/45.5*100;
	}
}
?>