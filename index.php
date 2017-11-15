<?php 

$pathinfoExists=array_key_exists('PATH_INFO', $_SERVER);
if($pathinfoExists){
	$path_info=$_SERVER['PATH_INFO'];
}else{
	$path_info='/';
}
//开始之前将开始的  /  清除掉 substr
$path_info=substr($path_info, 1);

//使用类似split方法将其分割 explode
$path_infos=explode('/', $path_info);
//判断结果三种
//['']
//['一个名字']
//['两个名字']
//判断数组长度strlen()
if(strlen($path_infos[0])==0){
	//就是第一种情况 默认显示的主页
	$path='index';
	$filename='index';

}elseif(count($path_infos)==2){
	//就是第三种情况 路径有两个名字的时候
	$path=$path_infos[0];
	$filename=$path_infos[1];
}else{
	//输入的是一个名字
	$path='index';
	$filename=$path_infos[0];
}

include('./views/'.$path.'/'.$filename.'.html');

 ?>
