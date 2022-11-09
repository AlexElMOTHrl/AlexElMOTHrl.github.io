let lineas = Array("DEBUG 1<br>DEBUG 1", "DEBUG 2<br>DEBUG 2", "DEBUG 3<br>DEBUG 3", "DEBUG 4<br>DEBUG 4", "TODO ESO DEBUG 5<br>EN DEBUG 5", "DEBUG 6<br>DEBUG 6");
//let lineas = Array("CHILD<br>PORN", "2 GIRLS<br>1 CUP", "PELEAS<br>GITANAS", "ZOOFILIA<br>EXTREMA", "TODO ESO Y<br>MUCHO MAS EN", "SuperCP<br>.com");
document.getElementById('cptitle').innerHTML = lineas[0];

var i = 0;
function increment() {
	i++;
	document.getElementById('cptitle').innerHTML = lineas[i];
	if (i > lineas.length - 1) {
		//window.location.replace("testcss2.html");
	}
}

setTimeout("setInterval('increment()', 6845)", 2000);