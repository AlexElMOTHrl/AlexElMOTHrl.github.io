let lineas = Array("CHILD<br>PORN", "2 GIRLS<br>1 CUP", "PELEAS<br>GITANAS", "ZOOFILIA<br>EXTREMA", "TODO ESO Y<br>MUCHO MAS EN", "SuperCP<br>.com");
document.getElementById('cptitle').innerHTML = lineas[0];

var i = 0;
function increment() {
	i++;
	document.getElementById('cptitle').innerHTML = lineas[i];
	if (i > lineas.length - 1) {
		window.location.replace("testcss2.html");
	}
}

setTimeout("setInterval('increment()', 6845)", 2000);

