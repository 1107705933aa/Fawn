window.onload = function() {
	let layer = layui.layer;
	banli();
}

function banli() {
	let banli = document.querySelector('.banli');
	let banli_value = banli.innerText;

	let user = document.querySelector('.user');
	let user_value = user.innerText;
	

	banli.onclick = function() {
		let banli = document.querySelector('.banli');

		// 通过ajax的方式把数据发送到服务器
		axios.post('/memberin/banli', {
				user_value: user_value
			})
			.then(function(response) {
				console.log("------------");
				console.log(response.data);
				if(response.data == 'ok') {

					window.location.href = '/memberin ';
				}
			})
			.catch(function(error) {})
	}
}