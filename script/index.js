function playSound (evt) {
	var audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
}

var keys = document.querySelectorAll(".key");

function removeClass(evt) {
	if (evt.propertyName !== "transform") return;
	this.classList.remove("playing");
}

keys.forEach(key => key.addEventListener("transitionend", removeClass));

window.addEventListener("keydown", playSound);