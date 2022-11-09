$.getJSON('http://ip-api.com/json', function(data) {
	const info = JSON.parse(JSON.stringify(data, null, 2));

	document.getElementById('cptitle').innerHTML = "IP<br>" + info.query;
});