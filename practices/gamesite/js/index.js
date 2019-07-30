var gameBar = document.getElementById("gameBar");
var gameBarDot = document.getElementById("gameBarDot");
var gameBarState = 1;
var gameBarTimerState = 1;
changeGameBar = () => {
	if (gameBarState == 1) {
		gameBar.style.left = "-1044px";
		changeGameBarDot();
		gameBarState = 0;
	}else {
		gameBar.style.left = "0px";
		changeGameBarDot();
		gameBarState = 1; 
	}
}
changeGameBarDot = () => {
	if (gameBarState == 1){
		gameBarDot.children[0].classList.remove("gameDot-checked");
		gameBarDot.children[1].classList.add("gameDot-checked");
	}else {
		gameBarDot.children[0].classList.add("gameDot-checked");
		gameBarDot.children[1].classList.remove("gameDot-checked");
	}
}
window.onload = function() {
	setTimeout(gameBarTimer, 4000);
}
gameBarTimer = () => {
	if (gameBarTimerState == 1) {
		changeGameBar();
	}
	setTimeout(gameBarTimer, 4000);
}
startGameBarTimer = () => {
	if (gameBarTimerState == 0) {
		gameBarTimerState = 1;
	}
}
clearGameBarTimer = () => {
	if (gameBarTimerState == 1) {
		gameBarTimerState = 0;
	}
}
gameBar.addEventListener("mouseover", clearGameBarTimer);
gameBar.addEventListener("mouseleave", startGameBarTimer);

clickToChange1 = () => {
	if (gameBarState == 1) {
		changeGameBar();
	}
}
clickToChange0 = () => {
	if (gameBarState == 0) {
		changeGameBar();
	}
}
gameBarDot.children[0].addEventListener("click", clickToChange0);
gameBarDot.children[1].addEventListener("click", clickToChange1);