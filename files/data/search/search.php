<?php

$searchinput = $_GET['searchin'];

$tv = glob('./tv/*.*');
$games = glob('./games/*.*');
$gen = glob('./general/*.*');
foreach($tv as $tvf) {
if ($tvf == $searchinput) {
echo $tvf;
}
}
foreach($games as $gamesf) {
if ($gamesf == $searchinput) {
echo $gamesf;
}
}
foreach($gen as $genf) {
if ($genf == $searchinput) {
echo $genf;
}
}
echo "No results found.";

?>