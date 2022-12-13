let numbers = Array(1,2,3);
var isUsed = false;
const button = document.getElementById('button');

function RandomNumber() {
	Animate();
	if (!isUsed) {
		document.getElementById('button').innerHTML = numbers[0];
		isUsed = true;
	} else {
		document.getElementById('button').innerHTML = numbers[Math.floor(Math.random()*numbers.length)];
	}
}

$(".button").bind("webkitAnimationEnd mozAnimationEnd animationEnd", function(){
	$(this).removeClass("animated")  
})
  
$(".button").hover(function(){
	$(this).addClass("animated");        
})
  
function Animate() {
	document.getElementById('button').button = 'pop';
}