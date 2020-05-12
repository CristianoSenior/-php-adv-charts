<?php


header('Content-Type: application/json');

include 'database.php';


$nomi = [];
$valori = [];
foreach ( $graphs['fatturato_by_agent']['data'] as $key => $value) {
  $nomi[]= $key;
  $valori[]= $value;
}
// $fatturato_agenti = [];
// foreach ($fatturato_by_agent as $data => $contenutodata) {
//   $fatturato_agenti = $data => $contenutodata[i];
$res = [
  'fatturato' => [
    'type' => 'line',
    'data' => [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]
  ],
  'fatturato_by_agent' => [
    'type' => 'pie',
    'labels' => $nomi,
    'data' => $valori
    ]
  ];




echo json_encode ($res);

 ?>
