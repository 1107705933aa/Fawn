
window.onload = function() {
	let zongjia;
	let prices;
	let addDingdan;

	let jia_cart = document.querySelector('.jia_cart');
	let yuan = document.querySelector('.yuan');
	let jia = document.querySelector('.jia');
	let jian = document.querySelector('.jian');
	
	yuan.style.display = "none";
	jia_cart.onclick = function(e) {
		yuan.style.display = "";
		jia_cart.style.display = "none";
	}

	let shu = document.querySelector('.shu');
	let shu_value = shu.innerText;

	jia_method();
	jian_method();
}

function jia_method() {
	let button_jia = document.querySelector('.jia');
	button_jia.onclick = function(e) {
		let target = e.target;
		let r = this.dataset.price;
		let zongjia = document.querySelector('.price');
		let i = zongjia.value;
		i = i * 1 + r * 1;
		zongjia.value = i.toFixed(2);
		zongjia_value = zongjia.value;

		let shu = document.querySelector('.shu');
		let shu_value = shu.innerText;
		shu_value = parseInt(shu_value) + parseInt(1);
		shu.innerText = shu_value;
	}

	zongjia = document.querySelector('.price');
	prices = zongjia.value;
	addDingdan();
}

function jian_method() {

	let button_jian = document.querySelector('.jian');
	button_jian.onclick = function(e) {
		let target = e.target;
		let r = this.dataset.price;
		let zongjia = document.querySelector('.price');
		let i = zongjia.value;
		if(i > 0) {
			i = i * 1 - r * 1;
			zongjia.value = i.toFixed(2);
			zongjia_value = zongjia.value;
		}

		let shu = document.querySelector('.shu');
		let shu_value = shu.innerText;
		if(parseInt(shu_value) > parseInt(0)) {
			shu_value = parseInt(shu_value) - parseInt(1);
			shu.innerText = shu_value;
		}
	}
	zongjia = document.querySelector('.price');
	prices = zongjia.value;
	addDingdan();
}

function addDingdan() {
	let button2 = document.querySelector('.addDingdan');
	button2.onclick = function(e) {
		console.log(222);
		let food_img = document.querySelector('.food_img'); //属性选择器
		let food_img_value = food_img.querySelector('img').src;
		console.log(food_img_value);
		let food_name = document.querySelector('.food_name'); //属性选择器
		let food_name_value = food_name.value;

		let dan_price = document.querySelector('.food_price');
		let dan_price_value = dan_price.value.split('￥')[1];

		let num = prices / dan_price_value;
		console.log(prices);
		console.log(dan_price_value);
		console.log(prices / dan_price_value);
		//		num = prices / dan_price_value;
		console.log(prices);
		// 通过ajax的方式把数据发送到服务器
		axios.post('/order_successin/adddingdan', {
				food_img: food_img_value,
				name: food_name_value,
				nums: (zongjia.value) / (dan_price_value),
				price: zongjia.value

			})
			.then(function(response) {
				console.log(response);
				if(response.data == 'ok') {
					//window.location.href = '/order_successin/adddingdan ';
				}
			})
			.catch(function(error) {})
	}
}