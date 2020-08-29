function readCat() {
var resA = getFileAsString("./files/memes/games/MEMELIST.txt")
var gamecatlistT = window.resultx.split("\n");
window.gamecatlist = [];
for(memename in gamecatlistT) {
  window.gamecatlist.push("games/".concat(memename))
}
var resB = getFileAsString("./files/memes/general/MEMELIST.txt")
var gencatlistT = window.resultx.split("\n");
window.gencatlist = [];
for(memename in gencatlistT) {
  window.gencatlist.push("genaral/".concat(memename))
}
var resC = getFileAsString("./files/memes/tv/MEMELIST.txt")
var tvcatlistT = window.resultx.split("\n");
window.tvcatlist = [];
for(memename in tvcatlistT) {
  window.tvcatlist.push("tv/".concat(memename))
}
window.allcatlist = window.gamecatlist.concat(window.gencatlist, window.tvcatlist)
return window.allcatlist;
}