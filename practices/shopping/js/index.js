$().ready(()=>{
	loadLocalData();
	switchLayout();
	updataWrapper();
	updateTrolley();
	addToTrolley();
	doSettleAccount();
	exitSettleAccount();
	settleChecked();
})
/*
* param: key, name, prize, img
*/
var trolleyState = {
	key: 0,
	data: []
}
var cartData = [{
	name: "针织衫",
	prize: 390,
	img: "src/1.jpg"
},
{
	name: "羊绒衫",
	prize: 420,
	img: "src/2.jpg"
},
{
	name: "T恤",
	prize: 120,
	img: "src/3.jpg"
},
{
	name: "毛衣",
	prize: 220,
	img: "src/4.jpg"
},
{
	name: "围脖",
	prize: 90,
	img: "src/5.jpg"
},
{
	name: "线衫",
	prize: 180,
	img: "src/6.jpg"
}]

switchLayout = () => {
	$("#layout-in-s").on("click",()=>{
		if(!$("#layout-toggle").hasClass("layout-in-s")){
			$("#layout-toggle").removeClass("layout-in-l").addClass("layout-in-s");
			$("#wrapper-toggle").removeClass("wrapper-in-l").addClass("wrapper-in-s");
		}
	});

	$("#layout-in-l").on("click",()=>{
		if(!$("#layout-toggle").hasClass("layout-in-l"))
			$("#layout-toggle").removeClass("layout-in-s").addClass("layout-in-l");
			$("#wrapper-toggle").removeClass("wrapper-in-s").addClass("wrapper-in-l");
	});
}

updataWrapper = () => {
	$("#wrapper-toggle").empty().html(()=>{
		return cartData.map((e)=>{
			let html = `
				<!-- 展示项 -->
				<div class="content-item">
					<!-- img -->
					<div class="content-item-pic">
						<!-- img width/height 333/466 -->
						<img src="${e.img}" alt="cloth">
					</div>
					<!-- s -->
					<!-- pop up -->
					<div class="content-item-pop">
						<div class="content-pop-button content-s-button">加入购物车</div>
						<div class="content-pop-button">查看详情</div>
					</div>
					<!-- s -->
					<div class="content-item-s">
						<div class="content-s-prize clearfix">
							<h3>${e.name}</h3>
							<span>${e.prize}</span>
							<p>夏天衣服</p>
						</div>
						<div class="content-s-size">
							<h3>尺寸</h3>
							<ul class="clearfix">
								<li>XS</li>
								<li>S</li>
								<li>M</li>
								<li>L</li>
								<li>XL</li>
								<li>XXL</li>
							</ul>
						</div>
						<div class="content-s-color">
							<h3>颜色</h3>
							<ul>
								<li><div class="clothColor-blue"></div></li>
								<li><div class="clothColor-red"></div></li>
								<li><div class="clothColor-white"></div></li>
								<li><div class="clothColor-green"></div></li>
							</ul>
						</div>
					</div>

					<!-- l -->
					<div class="content-item-l">
						<div class="content-l-prize">
							<h3>${e.name}</h3>
							<p>产品的编号：<span>6657</span></p>
							<div><del>￥430</del>￥${e.prize}</div>
						</div>
						<div class="content-l-size">
							<h3>尺寸</h3>
							<ul class="clearfix">
								<li>XS</li>
								<li>S</li>
								<li>M</li>
								<li>L</li>
								<li>XL</li>
								<li>XXL</li>
							</ul>
						</div>	
						<div class="content-l-color">
							<h3>颜色</h3>
								<ul class="clearfix">
									<li><div class="clothColor-blue"></div></li>
									<li><div class="clothColor-red"></div></li>
									<li><div class="clothColor-white"></div></li>
									<li><div class="clothColor-green"></div></li>
								</ul>
						</div>
						<div class="content-l-button">加入购物车</div>
					</div>

				</div>
			`
			return html;
		})
	})
}

updateTrolley = () => {
	if(trolleyState.data.length===0) {
		if(!$("#trolley-wrapper").hasClass("trolley-empty")) {
			$("#trolley-wrapper").removeClass("trolley-notempty").addClass("trolley-empty");
		}
	}else {
		if(!$("#trolley-wrapper").hasClass("trolley-notempty")) {
			$("#trolley-wrapper").removeClass("trolley-empty").addClass("trolley-notempty");
		}
	}

	$("#trolley").empty().html(()=>{
		return trolleyState.data.map((e)=>{
			let html = `
				<li>
					<div style="display: none">${e.key}</div>
					<div><img src="${e.img}" alt="cloth"></div>
					<h3>${e.name}</h3>
					<span>${e.prize}</span>
				</li>

			` 
			return html;
		})
	})
}
/*
* method: add
* data: Array
*/
changeTrolleyData = (method, data) => {
	switch(method) {
		case "load":
			trolleyState.key = 0;
			trolleyState.data = [];
			if(data.key!==''&&data.key!==null&&data.key!==undefined) {
				trolleyState.key = data.key;
			}
			if (data.data!==''&&data.data!==null&&data.data!==undefined) {
				trolleyState.data = data.data;
			}
			break;
		case "add": 
			console.log(trolleyState)
			let copydata = data;
			copydata.key = trolleyState.key;
			copydata.number = 1;
			trolleyState.data = [copydata].concat(trolleyState.data);
			trolleyState.key = trolleyState.key + 1;
			break;
		case "clear":
			trolleyState.key = 0;
			trolleyState.data = [];
			break;
		case "delete":
			trolleyState.data = trolleyState.data.filter((e)=>{
				e.key !== data;
			})
			break;
		case "addnumber":
			trolleyState.data.map((e)=>{
				if (e.key == data) {
					e.number++;
				}
			})
			break;
		case "reducenumber":
			trolleyState.data.map((e)=>{
				if (e.key == data) {
					if (e.number>1) {
						e.number--;
					}
				}
			})
			break;
	}
	localStorage.setItem('trolley-state', JSON.stringify(trolleyState));
	updateTrolley();
	doUpdataSettle();
}

addToTrolley = () => {
	$("#wrapper-toggle").on("click",".content-s-button,.content-l-button",function() {
		let item = $(this).parents(".content-item");
		let item_id = item.find(".content-s-prize h3").html();
		console.log(cartData)
		// item object
		let item_data = JSON.parse(JSON.stringify(cartData.filter((e)=>{return e.name == item_id})[0]));
		let item_img = item.find(".content-item-pic");
		let trolley = $("#trolley");
		let item_img_clone = item_img
			.clone()
			.css(item_img.offset())
			.css("position","absolute")
			.appendTo("body");
		item_img_clone.animate({
			left: trolley.offset().left,
			top: trolley.offset().top,
			width: "50px",
			height: "70px",
		}, 500)
		.fadeOut("slow", ()=>{
			changeTrolleyData("add", item_data);
			item_img_clone.remove();
		})
	})
}

loadLocalData = () => {
	var trolleyJson = localStorage.getItem('trolley-state');

    if (
        trolleyJson !== '' &&
        trolleyJson !== null &&
        trolleyJson !== undefined
    ) {
        let data = JSON.parse(trolleyJson);
		changeTrolleyData("load", data);
    }
}

doSettleAccount = () => {
	$("#settleAccount").on("click", ()=>{
		if($("#pop-settleAccount").hasClass("in-shop")) {
			$("body").addClass("overflow-hidden");
			$("#pop-settleAccount").removeClass("in-shop").addClass("in-settle");
		}
	})
	settleOperation();
}

exitSettleAccount = () => {
	$("#exit").on("click", ()=>{
		if($("#pop-settleAccount").hasClass("in-settle")) {
			$("body").removeClass("overflow-hidden");
			$("#pop-settleAccount").removeClass("in-settle").addClass("in-shop");
		}
	})
}

doUpdataSettle = () => {
	$("#settle-body").empty().html(()=>{
		return trolleyState.data.map((e)=>{
			let html = `
				<tr>
					<td><input type="checkbox" name="productCheck"></td>
					<td class="cart-product-name">
						<img src="${e.img}" alt="No Image">
						<span>${e.name}</span>
					</td>
					<td class="cart-product-price">${e.prize}</td>
					<td class="cart-product-count">
						<span class="reduce">-</span>
						<input class="count-input" type="text" value="${e.number}">
						<span class="add">+</span>
					</td>
					<td class="cart-product-subtotal">${e.number*e.prize}</td>
					<td class="cart-product-operation">
						<span class="delete"><div style="display:none">${e.key}</div>删除</span>
					</td>
				</tr>
			`
			return html;
		})
	})
}

updataCount = () => {
	$("#selectedTotalCount").empty().html(()=>{
		let count = 0;
		$("#settle-body").children().map((index,element)=>{
			if ($(element).find("input[name='productCheck']").prop("checked")) {
				count+= parseInt($(element).find(".count-input").attr("value"));
			}
		});
		return count;
	})
	$("#selectedTotalAmount").empty().html(()=>{
		let count = 0;
		$("#settle-body").children().map((index,element)=>{
			if ($(element).find("input[name='productCheck']").prop("checked")) {
				count+= parseInt($(element).find(".cart-product-subtotal").html());
			}
		});
		return count;
	})
}

settleOperation = () => {
	$("#deleteAllProduct").on("click",()=>{
		if (confirm("确定清空购物车么？")) {
			changeTrolleyData("clear")
		}
	})
	$("#settle-body").on("click",".add",function() {
		let key = $(this).parents("tr").find(".delete div").html();
		changeTrolleyData("addnumber", key);
	})
	$("#settle-body").on("click",".reduce",function() {
		let key = $(this).parents("tr").find(".delete div").html();
		changeTrolleyData("reducenumber", key);
	})
	$("#settle-body").on("click",".delete",function() {
		let key = $(this).parents("tr").find(".delete div").html();
		changeTrolleyData("delete", key);
	})
}

settleChecked = () => {
	$("#selectAllProduct").on("click",function() {
		if(this.checked) {
			$("#settle-body input[name='productCheck']").prop("checked", true);
		}else {
			$("#settle-body input[name='productCheck']").prop("checked", false);
		}
		updataCount();
	})
	$("#settle-body input[name='productCheck']").on("click", ()=>{
		updataCount();
	})
}

