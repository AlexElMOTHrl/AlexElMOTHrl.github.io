let numbers = Array(1,2,3,4,5);
var isUsed = false;
const button = document.getElementById('button');

function RandomNumber() {
	Animate();
	if (!isUsed) {
		document.getElementById('textAnimation').innerHTML = numbers[4];
		isUsed = true;
	} else {
		document.getElementById('textAnimation').innerHTML = numbers[Math.floor(Math.random()*numbers.length)];
	}
}

function Animate() {
	document.getElementById('textAnimation').button = 'pop';
}