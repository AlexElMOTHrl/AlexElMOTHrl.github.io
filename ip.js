/* var endpoint = "http://ip-api.com/json/{query}?fields=25337"

xhr.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var response = JSON.parse(this.responseText);
		if(response.status !== 'success') {
			console.log('query failed: ' + response.message);
			return
		}
		console.log(response.query)
	}
};

xhr.open('GET', endpoint, true);
xhr.send();

var title = document.getElementById("cptitle").innerHTML;
title = response.query; */

$.getJSON('https://ipinfo.io/json', function(data) {
	const info = JSON.parse(JSON.stringify(data, null, 2));

	console.log(info.ip)
});