/*-------
game bar
-------*/
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
gameBarTimer = () => {
	if (gameBarTimerState == 1) {
		changeGameBar();
	}
	setTimeout(gameBarTimer, 6000);
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
/*-------
banner bar
-------*/
var bannerBar = document.getElementById("bannerBar");
var bannerBarDot = document.getElementById("bannerBarDot");
var bannerBarState = 1;
var bannerBarTimerState = 1;
changeBannerBar = (num) => {
	for(let i = 0; i<=3; i++) {
		bannerBar.children[i].style.display = "none";
	}
	bannerBar.children[num-1].style.display = "block";
	changeBannerBarDot(num);
	bannerBarState = num;

}
changeBannerBarDot = (num) => {
	for(let i = 0; i<=3; i++) {
		bannerBarDot.children[i].className = null;
	}
	bannerBarDot.children[num-1].classList.add("picDot-checked");
}
for(let i = 0; i<=3; i++) {
	bannerBarDot.children[i].addEventListener("click", ()=>{
		changeBannerBar(i+1);
	})
}
bannerBarTimer = () => {
	if (bannerBarTimerState == 1) {
		changeBannerBar(bannerBarState+1==5?1:bannerBarState+1);
	}
	setTimeout(bannerBarTimer, 5000);
}
startBannerBarTimer = () => {
	if (bannerBarTimerState == 0) {
		bannerBarTimerState = 1;
	}
}
clearBannerBarTimer = () => {
	if (bannerBarTimerState == 1) {
		bannerBarTimerState = 0;
	}
}
bannerBar.addEventListener("mouseover", clearBannerBarTimer);
bannerBar.addEventListener("mouseleave", startBannerBarTimer);
/*-------
onload
-------*/
window.onload = function() {
	setTimeout(gameBarTimer, 6000);
	setTimeout(bannerBarTimer, 5000);
}
