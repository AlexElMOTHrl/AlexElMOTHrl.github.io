let lineas = Array("DEBUG 1<br>NIGGERS", "DEBUG 2<br>DEBUG 2", "DEBUG 3<br>DEBUG 3", "DEBUG 4<br>DEBUG 4", "TODO ESO DEBUG 5<br>EN DEBUG 5", "DEBUG 6<br>DEBUG 6");

/* $.getJSON('https://ipinfo.io/json', function(data) {
	const info = JSON.parse(JSON.stringify(data, null, 2));

	//document.getElementById('cptitle').innerHTML = "IP<br>" + info.ip;
}); */

//let lineas = Array("IP"+info.ip,"LOCALIZACIÓN<br>"+info.loc, "PELEAS<br>GITANAS", "ZOOFILIA<br>EXTREMA", "TODO ESO Y<br>MUCHO MAS EN", "SuperCP<br>.com");
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