window.onload = function() {
	//	queryDingdan();
	let layer = layui.layer;

	layui.use('form', function() {
		var form = layui.form;

		//监听提交
		form.on('submit(formDemo)', function(data) {
			layer.msg(JSON.stringify(data.field));
			return false;
		});
	});

	insert_view();
}

function insert_view() {
	let submi = document.querySelector('.submi');
	submi && (submi.onclick = function() {
		let view = document.querySelector('.view');
		let view_value = view.value;

		let phone = document.querySelector('input[name="phone"]');
		let phone_value = phone.value;
		
		console.log(view_value);
		console.log(phone_value);

		if(view_value == '') {
			view.placeholder = '*必填';
			view.style.color = 'red !important';
			view.focus();
			return false;
		}

		if(phone_value == '') {
			phone.placeholder = '*必填';
			phone.style.color = 'red !important';
			phone.focus();
			return false;
		}
		
		

		// 通过ajax的方式把数据发送到服务器
		axios.post('/backin/insert_view', {
				view: view_value,
				phone: phone_value
			})
			.then(function(response) {
				console.log(response);
				if(response.data == 'ok') {
					window.location.href = '/backin';
				}
			})
			.catch(function(error) {})
	});
}