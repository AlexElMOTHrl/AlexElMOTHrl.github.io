let numbers = Array(1,2,3);
var isUsed = false;
const button = document.getElementById('button');

function RandomNumber() {
	Animate();
	if (!isUsed) {
		document.getElementById('textAnimation').innerHTML = numbers[0];
		isUsed = true;
	} else {
		document.getElementById('textAnimation').innerHTML = numbers[Math.floor(Math.random()*numbers.length)];
	}
}

function Animate() {
	document.getElementById('textAnimation').button = 'pop';
}