//requires "3EGaming.github.io/files/js/readfile.js" and "3EGaming.github.io/files/js/preview_display.js" and "hjsmemes.github.io/files/data/js/readcat.js"
function search() {
	var searchinput = document.getElementById('searchinput').value;
	if (searchinput == "logo") {
	document.getElementById("demo").innerHTML = "</P><img src='./files/image/logo.png'><P>";
	} else if (searchinput == "tv" || searchinput == "movies" || searchinput == "tv shows" || searchinput == "tvshows" || searchinput == "tv programs") {
        document.getElementById("demo").innerHTML = "Looking for tv shows/movies? Try here:</P><A href='catagorys.html'><img src='./files/image/catagorybutton.png'></A><P>";
        } else if (searchinput == "games" || searchinput == "gaming" || searchinput == "Games" || searchinput == "Gaming"){
        document.getElementById("demo").innerHTML = "Looking for Games? Try here:</P><A href='catagorys.html'><img src='./files/image/catagorybutton.png'></A><P>";
        } else if (searchinput == "die"){
        alert("no thank");
        } else if (searchinput == "secret"){
        alert("Looking for secrets?");
        } else if (searchinput == "meme" || searchinput == "memes"){
        alert("You'll have to be more specific than that");
        } else if (searchinput == "lenny" || searchinput == "Lenny"){
        document.getElementById("demo").innerHTML = "</P><iframe src='./files/data/estr/iwhenttomoretroubblethanishouldhavetomakethisworksobegratefull.easter.txt' frameborder='0' height='42' width='95%'></iframe><P>";
        alert("Are you sure you want to summon Lenny? (You don't have a choice.)");
        } else if (searchinput == "Ok Boomer" || searchinput == "okboomer" || searchinput == "OkBoomer" || searchinput == "Okboomer" || searchinput == "okBoomer" || searchinput == "Ok boomer" || searchinput == "ok Boomer"){
        document.getElementById("demo").innerHTML = "</P><iframe src='./files/data/estr/wellimdoinganotheronesoyoucanseestuff.easter.txt' frameborder='0' height='42' width='95%'></iframe><P>";
        } else {
        readCat();
        window.matchlist = [];
        for(memen in window.allcatlist) {
        if (memen.includes(searchinput)) {
          window.matchlist.concat(memen);
        }
        }
        displayPreviews(window.matchlist);
        if (not window.matchlist == []) {
          document.getElementById("result").innerHTML = "</P>".concat(window.resulte, "<P>");
        } else {
          document.getElementById("demo").innerHTML = "No results found.";
        }
        }
}