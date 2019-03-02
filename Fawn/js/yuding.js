window.onload = function() {
	//	queryDingdan();
	let layer = layui.layer;
	show_yuding();
	//	delOrder();
	delOrderr();
}

function show_yuding() {
	let rizi = document.querySelector('.rizi');
	let a11 = document.querySelector('.a11');
	let rizi_value = rizi.innerText;
	console.log(rizi_value);
	if(rizi_value == null || rizi_value == "" || rizi_value == undefined){
		a11.style.display="none";
	}else {
		a11.style.display="block";
	}
}

//function delOrder() {
//	//使用事件代理实现点击事件  confirm
//	let shan = document.querySelector('.zhong');
//	shan && (shan.onclick = function(e) {
//		let target = e.target;
//		//		console.log(target);
//		//点击的节点包含delc这个类表示删除  data-cid
//		//		console.log(target)
//		if(target.classList.contains('delc')) {
//			layer.open({
//				content: '是否确定删除？',
//				btn: ['确定', '取消'],
//				yes: function(index, layero) {
//					let id = target.dataset.id;
//					layer.close(index); // 关闭弹窗
//					target.parentNode.parentNoderemove();
//					//到数据库删除对应的信息
//					//					axios.get('/order_successin/del', {
//					//							params: {
//					//								id: id
//					//							}
//					//					})		
//					//						.then(function(response) {
//					//							console.log(response.data);
//					//							layer.close(index); // 关闭弹窗
//					//							// 隐藏或者删除当前行
//					//							if(response.data.r == 'success') {
//					//								//window.location.reload();//自动刷新 
//					//								target.parentNode.parentNode.parentNode.remove();
//					//							}
//					//						})
//					//						.catch(function(error) {})
//				},
//				btn2: function(index, layero) {},
//				cancel: function() {}
//			});
//		}
//	})
//}

function delOrderr() {
	//使用事件代理实现点击事件  confirm
	let a22 = document.querySelectorAll('.a22');
	for(let i = 0; i < a22.length; i++) {
		//		return a22[i];

		a22[i] && (a22[i].onclick = function(e) {
			let target = e.target;
			//		console.log(target);
			//点击的节点包含delc这个类表示删除  data-cid
			//		console.log(target.classList)
			let id = target.dataset.id;
			console.log(id);
			if(target.classList.contains('delcc')) {
				layer.open({
					content: '是否确定删除？',
					btn: ['确定', '取消'],
					yes: function(index, layero) {
						let id = target.dataset.id;
						//到数据库删除对应的信息
						axios.get('/order_successin/del', {
								params: {
									id: id
								}
							})
							.then(function(response) {
								console.log(response.data);
								layer.close(index); // 关闭弹窗
								// 隐藏或者删除当前行
								if(response.data.r == 'success') {
									//window.location.reload();//自动刷新 
									target.parentNode.parentNode.remove();
									window.location.reload();
								}
							})
							.catch(function(error) {})
					},
					btn2: function(index, layero) {},
					cancel: function() {}
				});
			}
		})
	}
}

function queryDingdan() {
	//console.log(666);
	//	let zhong = document.querySelector('.zhong'); //属性选择器
	//	let r1 = document.querySelector('.r1'); //属性选择器
	//	let r1_value = r1.values();
	//	let r2 = document.querySelector('.r2'); //属性选择器
	//	let r2_value = r2.values();
	//	let r3 = document.querySelector('.r3'); //属性选择器
	//	let r3_value = r3.values();
	//	let r4 = document.querySelector('.r4'); //属性选择器
	//	let r4_value = r4.values();

	//	var div = document.createElement('div');
	//	div.innerHTML= `<div class="geduan">${r1.innerText}</div>`;

	//	div.innerHTML = 
	//	'<div class="geduan"></div>' +
	//		'<div class="temp_box">' +
	//		'<div class="geduan2"></div>' +
	//		'<div class="small_box">' +
	//		'<div class="tu">' +
	//		'<img src="'+r1.innerText+'" alt="" />' +
	//		'</div>' +
	//		'<div class="content">' +
	//		'<span class="p1" style="font-weight: 700;">'+r2.innerText+'</span>' +
	//		'<span class="p2">份数：'+r3.innerText+'</span>' +
	//		'<p class="p3">￥'+r4.innerText+'</p>'+
	//	'</div>' +
	//	'</div>' +
	//	'<div class="geduan3"></div>' +
	//	'<a class="a1" href="">评价订单</a> ' +　
	//	'<a class="a2" href="">再来一单</a>' +
	//	'</div>';

	//	zhong.append(div);

	// 通过ajax的方式把数据发送到服务器
	//      axios.post('/order_successin/query', {
	//              r11: r1_value,
	//              r22:r2_value,
	//              r33: r3_value,
	//              r44:r4_value
	//          })
	//          .then(function (response) {
	//              console.log(response);
	//              if (response.data == 'ok') {
	////                window.location.href = '';
	//              }
	//          })
	//          .catch(function (error) {})

}