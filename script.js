//your JS code here. If required
let line = document.getElementById("line");
let deg = 0
let times = document.getElementById("times");
function rotate() {
	deg = (deg+2)%180;
	line.style.transform=`rotate(${deg}deg)`
}

const rotateLine = setInterval(rotate,20)



