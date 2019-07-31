var addButton = document.getElementById("addButton");
var input = document.getElementById("input");
var listWrapper = document.getElementById("listWrapper");

var inputText;
var arr = new Array();
var nowKey = 2;
arr = [{
	key: 1,
	text: "早日完事，尽快跑路！"
},{
	key: 2,
	text: "时间宝贵，需要珍惜！"
}];
addTaskToArr = () => {
	nowKey++;
	let item = {
		key: nowKey,
		text: inputText
	}
	arr.push(item);
	inputText = "";
	input.value = inputText;
	updateList();
}
input.addEventListener("input",(event)=>{inputText=event.target.value});
addButton.addEventListener("click", addTaskToArr);
mapTaskList = () => {
	let listHtml;
	listHtml = arr.map((x)=>{
		let itemHtml;
		itemHtml = "<li id='item"+x.key+"' class='clearfix'><p>"+x.text+"</p><span onClick='deleteItem(this)' class='iconfont icon-cha'></span></li>";
		return itemHtml;	
	});
	return listHtml.join("");
}
updateList = () => {
	listWrapper.children[0].innerHTML = mapTaskList();
}
deleteItem = (node) => {
	let nodeKey = node.parentNode.id.split("item").join("");
	arr = arr.filter((element)=>{
		let num = parseInt(nodeKey);
		return element.key !== num;
	})
	updateList();
}
window.onload = () => {
	updateList();
}