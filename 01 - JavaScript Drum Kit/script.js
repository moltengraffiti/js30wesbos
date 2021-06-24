function playsound(e) {
	let keyCode;
	if (e.type === 'click') {
		keyCode = e.currentTarget.dataset.key;
	} else {
		keyCode = e.keyCode;
	}
	console.log(e.keyCode);
	const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${keyCode}"]`);
	console.log(audio);
	if (!audio) return;
	audio.currentTime = 0;
	audio.play();
	console.log(key);
	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return;
	console.log(e.propertyName);
	console.log(e);
	console.log(this);
	this.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playsound);
keys.forEach((key) => key.addEventListener('click', playsound));
//Comment
