window.onload = function() {
	let layer = layui.layer;
	tab();
	xuanzhuo();
	quxiao();
	update();
	ifDing();
	bianse();
	//	updateIfding();
}

function tab() {
	let yi = document.querySelector('.yi_floor');
	yi.style.display = "";
	let er = document.querySelector('.er_floor');
	er.style.display = "none";

	let bt1 = document.querySelector('.a1');
	let bt2 = document.querySelector('.a2');

	bt1.style.borderBottom = "2px solid #fcfc3f";
	bt2.style.borderBottom = "";

	bt1.onclick = function() {
		bt1.style.borderBottom = "2px solid #fcfc3f";
		bt2.style.borderBottom = "";
		yi.style.display = "";
		er.style.display = "none";
	}

	bt2.onclick = function() {
		bt1.style.borderBottom = "";
		bt2.style.borderBottom = "2px solid #fcfc3f";
		yi.style.display = "none";
		er.style.display = "";
	}
}

function bianse() {
	let desk_Btn = document.querySelectorAll('.small_box');
	//	console.log(desk_Btn.length);
	let box = document.querySelector('.biao_content');
	//	box.style.display = "";
	let input1 = "";
	let table_name = document.querySelectorAll('.small_box p');
	let arr = [];
	for(var i = 0; i < table_name.length; i++) {
		let table_value = table_name[i].innerText;
		arr.push(table_value);
	}

//	console.log(arr);
	axios.post('/tablein/bianse', {
			arr: arr
		})
		.then(function(response) {
//			console.log(response.data[0].order_table);
			for(var j = 0; j < arr.length; j++) {
				let a = response.data[j].order_table.replace(/\s*/g, "");
				for(var i = 0; i < arr.length; i++) {

					if(arr[i].replace(/\s*/g, "") == a) {

//						console.log(i);
						desk_Btn[i].style.opacity = '0.2';
					}
				}
			}
		})
		.catch(function(error) {})
}

function xuanzhuo() {
	let desk_Btn = document.querySelectorAll('.small_box');
	//	console.log(desk_Btn.length);
	let box = document.querySelector('.biao_content');
	//	box.style.display = "";
	let input1 = "";
	
	for(var i = 0; i < desk_Btn.length; i++) {
		desk_Btn[i].onclick = function() {
//			console.log('lllllllll-----'+this.style.opacity);
			if(this.style.opacity =='0.2'){
				return false;
			}
			document.querySelector(".biao_content").style.display = "block";
			let deskNum = this.querySelector('p').innerText;
			input1 = document.querySelector('.input1');

			input1.value = deskNum.split(".")[0];
		}
	}
}


//function xuanzhuo() {
//	let desk_Btn = document.querySelectorAll('.small_box');
//	console.log(desk_Btn.length);
//	let box = document.querySelector('.biao_content');
//	box.style.display = "";
//	let input1 = "";
//
//	let table_name = document.querySelectorAll('.small_box p');
//	for(var i = 0; i < desk_Btn.length; i++) {
//		desk_Btn[i].onclick = function() {
//			let table_value = table_name[0].innerHTML;
//
//			//       console.log(table_value);
//			axios.post('/tablein/query_ding', {
//					table_value: table_value
//				})
//				.then(function(response) {
//					//console.log(response.data);
//					if(response.data == '1') {
//						document.querySelector(".biao_content").style.display = "none";
//					} else if {
//						document.querySelector(".biao_content").style.display = "block";
//						let deskNum = this.querySelector('p').innerText;
//						input1 = document.querySelector('.input1');
//						input1.value = deskNum.split(".")[0];
//					}
//				})
//				.catch(function(error) {})
//		}
//	}
//}

function quxiao() {
	let cancel = document.querySelector('.quxiao');
	let box = document.querySelector('.biao_content');
	cancel.onclick = function() {
		box.style.display = 'none';
	}
}

function update() {
	let btn = document.querySelector('.update');
	// if(!btn) return;
	btn && (btn.onclick = function() {
		//获取要修改的信息的cid
		let id = document.querySelector('.table_id').value;
		
		let user = document.querySelector('input[name="user"]');
		let user_value = user.value;
		
		// 获取输入框的值
		let zhuohao = document.querySelector('input[name="zhuohao"]');
		let zhuohao_value = zhuohao.value;

		let renshu = document.querySelector('input[name="renshu"]');
		let renshu_value = renshu.value;

		let riqi = document.querySelector('input[name="riqi"]');
		let riqi_value = riqi.value;

		let small_box = document.querySelectorAll('.small_box img');

		//检查信息是否输入
		if(!user_value) {
			layer.msg('桌号必填');
			user.focus();
			return false;
		}
		
		if(!zhuohao_value) {
			layer.msg('桌号必填');
			zhuohao.focus();
			return false;
		}

		if(!renshu_value) {
			layer.msg('人数必填');
			renshu.focus();
			return false;
		}

		if(!riqi_value) {
			layer.msg('日期必填');
			renshu.focus();
			return false;
		}
		// 通过ajax的方式把数据发送到服务器
		axios.post('/tablein/update', {
			    user: user_value,
				zhuohao: zhuohao_value,
				renshu: renshu_value,
				riqi: riqi_value,
				id: id
			})
			.then(function(response) {
//				console.log(response.data);
				if(response.data == 'ok') {
					for(var i = 0; i < small_box.length; i++) {
						small_box[i].style.opacity = '0.5';
					}
					window.location.href = '/yudingin';
				}
			})
			.catch(function(error) {})
	});
}

function ifDing() {
	let small_box = document.querySelectorAll('.small_box');
	for(var i = 0; i < small_box.length; i++) {
		//				if(response.data == 0) {
		//					small_box[i].style.opacity = '0.5';
		//				}
	}
	//	// 通过ajax的方式把数据发送到服务器
	//	axios.post('/tablein/query', {
	//
	//		})
	//		.then(function(response) {
	//			console.log(response.data);
	//
	//			for(var i = 0; i < small_box.length; i++) {
	//				if(response.data == 0) {
	//					small_box[i].style.opacity = '0.5';
	//				}
	//			}
	//		})
	//		.catch(function(error) {})
}

//	let btn_ifding = document.querySelector('.update');
//	
//	let ifding = document.querySelectorAll('.ifding');
////	let ifding_value = ifding.innerHTML;
//  var ifding_value ;
//  var ifding_parent=null;
//	
//	let small_box = document.querySelectorAll('.small_box');
//		document.querySelector(".zhong_content").onclick=function(e){
//			console.log(e.srcElement.dataset.id)
//			ifding_value=e.srcElement.dataset.id
////			console.log(e.srcElement.getAttribute("data-id"))
//  ifding_parent=e.srcElement;
//		}
//	// if(!btn) return;
////	for(int j=0 ;j<small_box.length;j++){
////		
////	}
//		
//	btn_ifding && (btn_ifding.onclick = function() {
//		//获取要修改的信息
////		let ifding = document.querySelector('.ifding');
////		let ifding_value = ifding.innerHTML;
//
//		// 通过ajax的方式把数据发送到服务器
//		axios.post('/tablein/updateifding', {
//				id: ifding_value
//			})
//			.then(function(response) {
////				console.log(response.data);
//				if(response.data == 'ok') {
//				  ifding_parent.parentNode.style.opacity = '0.5'
////					for(var i = 0; i < small_box.length; i++) {
////						if(ifding_parent.) {
////							small_box[i].style.opacity = '0.5';
////						}
////					}
//				}
//			})
//			.catch(function(error) {})
//	});
//}

//function ifDing() {
//   let btn_ifding = document.querySelector('.update');
//   btn_ifding && (btn_ifding.onclick = function() {
//   	    // 发起ajax请求
//          let xhr = new XMLHttpRequest();
//          xhr.open('POST', '/tablein/queryorder');
//          //设置请求头
//          xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
//          //发送数据到服务器  ES6里面的字符串模板
//          xhr.send(`username=${u_value}&passwd=${p_value}`);
//
//          // 状态事件监听并接收响应数据
//          xhr.onreadystatechange = function(){
//              if(xhr.readyState == 4 && xhr.status==200){
//                  let result = xhr.responseText;
//                  // 接收的是字符串类型，需要转成对象
//                  result = JSON.parse(result); 
//                  console.log(result);
//                  if(result.r == 'username_not_exist'){
//                      username.parentElement.nextElementSibling.innerHTML = '*账号不存在';
//                      username.focus();
//                  }else if(result.r == 'passwd_err'){
//                      passwd.parentElement.nextElementSibling.innerHTML = '*密码错误';
//                      passwd.focus();
//                  }else if(result.r == 'ok'){
//                      window.location.href = '/center';
//                  }else{
//                      alert('未知错误，刷新后操作');
//                  }
//              }
//          }
//   }
//}