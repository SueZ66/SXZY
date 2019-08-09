$(function(){
	BottonChange();
})

function BottonChange(){
	setInterval(function(){
	   $('.pic #btnbox').children('#btn').fadeOut(1000)
	   $('.pic #btnbox').children('#btn').fadeIn(1000)
	},500)
}
