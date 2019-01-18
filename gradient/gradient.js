var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("#back");
var colors = document.querySelector("#hexColors");
var left = document.querySelector("#left");
var right = document.querySelector("#right");
var top = document.querySelector("#top");
var bottom = document.querySelector("#bottom");
var angle = document.querySelector("#angle");


function textContentValue() {
	return  "background: " + body.style.background + ";";
}

function onPageLoad() {
	body.style.background = "linear-gradient(to right, " +color1.value+"," +color2.value +")";
	colors.textContent = textContentValue();
}

window.addEventListener("load", onPageLoad);

// ************ //

function gradientDirection(e) {
	if (e.target.id != "angle") {
		body.style.background = "linear-gradient(to " + e.target.id +", " +color1.value+" , " +color2.value +" )";
	} else {
		body.style.background = "linear-gradient(60deg, " +color1.value+" , " +color2.value +" )";
	}
	colors.textContent = textContentValue();
}

left.addEventListener("input", gradientDirection);
right.addEventListener("input", gradientDirection);
bottom.addEventListener("input", gradientDirection);
top.addEventListener("input", gradientDirection);
angle.addEventListener("input", gradientDirection);

// ************ //

function setGradient(){
	body.style.background = "linear-gradient(to right, " +color1.value+" , " +color2.value +" )";
	colors.textContent = textContentValue();
	right.checked = true;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


/*
Not working for some reason:
color1.addEventListener("change", setGradient);

color2.addEventListener("change", setGradient);*/