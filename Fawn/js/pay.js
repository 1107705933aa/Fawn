window.onload = function() {
	let layer = layui.layer;
	
	show_zhekou();
	pay();
//	change_hui();
}


function show_zhekou() {
	let hui_hid = document.querySelector('.hui_hid');
	let hui = document.querySelector('.hui');
	hui_value = hui.innerText;

	let yuan_price = document.querySelector('.yuan_price');
	let yuan_price_value = yuan_price.innerText;
//	console.log(yuan_price_value)

	let zhekou = document.querySelector('.zhekou');
	let zhekou_value = zhekou.innerText;

	//	console.log(hui_value)
	if(hui_value == '') {
		hui_hid.style.display = 'none';
		zhekou.innerText = parseInt(yuan_price_value);
	}
	if(hui_value != '') {
		//		console.log('00000000000')
		zhekou.innerText = parseInt(yuan_price_value) * 0.9;
		//		console.log(zhekou_value)
	}
}

function pay() {
	let fu = document.querySelector('.fu');
	fu.onclick = function() {
		let zhekou = document.querySelector('.zhekou');
		let zhekou_value = zhekou.innerText;
		console.log(zhekou_value)
		
		let user = document.querySelector('.span1');
		let user_value = user.innerText;
		console.log(user_value)
		
		let cid = document.querySelector('.cid');
		let cid_value = cid.innerText;
		console.log(cid_value)

		// 通过ajax的方式把数据发送到服务器
		axios.post('/payin/pay', {
				zhekou_value: zhekou_value,
                user_value: user_value,
                cid_value: cid_value
			})
			.then(function(response) {
				console.log("------------");
				console.log(response);
//				if(response.data == 'ok') {
//					window.location.href = '/order_successin ';
//				}
			})
			.catch(function(error) {})
	}
}