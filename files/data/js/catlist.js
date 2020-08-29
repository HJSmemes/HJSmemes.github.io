function readCat() {
readFileAsString("./files/memes/games/MEMELIST.txt")
var gamecatlistT = resultx.split("\n");
window.gamecatlist = [];
for(memename in gamecatlistT) {
  window.gamecatlist.push("games/".concat(memename))
}
readFileAsString("./files/memes/general/MEMELIST.txt")
var gencatlistT = resultx.split("\n");
window.gencatlist = [];
for(memename in gencatlistT) {
  window.gencatlist.push("genaral/".concat(memename))
}
readFileAsString("./files/memes/tv/MEMELIST.txt")
var tvcatlistT = resultx.split("\n");
window.tvcatlist = [];
for(memename in tvcatlistT) {
  window.tvcatlist.push("tv/".concat(memename))
}
window.allcatlist = window.gamecatlist.concat(window.gencatlist, window.tvcatlist)
return window.allcatlist;
}