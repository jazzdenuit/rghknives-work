<?php
// 設定檔頭
header('Content-Type: application/json');

// Get URL params
if (isset($_GET['startDate'])) {
  $start_date = $_GET['startDate'];
} else {
  $start_date = date('Y-m-d', time());
};

if (isset($_GET['endDate'])) {
  $end_date = $_GET['endDate'];
} else {
  $end_date = date('Y-m-d', strtotime("$start_date -30 days"));
};

if (isset($_GET['from'])) {
  $from = $_GET['from'];
} else {
  $from = '0';
};

if (isset($_GET['to'])) {
  $to = $_GET['to'];
} else {
  $to = '20';
};

// Initialize variable for database credentials
$dbhost = 'dbhost';
$dbuser = 'dbuser';
$dbpass = 'dbpassword';
$dbname = 'dbname';

//Create connection
  $dblink = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

//Check connection
if ($dblink->connect_errno) {
  printf("Failed to connect to database");
  exit();
}

//Fetch
$sqlstr = "SELECT `col1`, `col2`, `col3` FROM `prods` WHERE `instock` = 1 AND `updated` > '" .$end_date. "' AND DATE(`updated`) <= '" .$start_date. "' ORDER BY `prods`.`updated` DESC";
$result = $dblink->query($sqlstr);

//Initialize array
$dbdata = array();

//Fetch into associative array
while ( $row = $result->fetch_assoc())  {
  $dbdata[]=$row;
}

//Export array data in JSON format
 echo json_encode($dbdata, JSON_HEX_QUOT | JSON_HEX_TAG);
 
?>