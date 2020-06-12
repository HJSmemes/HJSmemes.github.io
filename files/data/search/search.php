<?php

$searchinput = $_GET['search'];

$tv = glob('./tv/*.*');
$games = glob('./games/*.*');
$gen = glob('./general/*.*');
foreach($tv as $tvf) {
if ($tvf == $searchinput) {
return $tvf;
}
}
foreach($games as $gamesf) {
if ($gamesf == $searchinput) {
return $gamesf;
}
}
foreach($gen as $genf) {
if ($genf == $searchinput) {
return $genf;
}
}
return "No results found.";

?>