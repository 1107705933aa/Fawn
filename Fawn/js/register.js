window.onload = function() {
	addLog();
}

function addLog() {
	let btn = document.querySelector('.addlog');
	// if(!btn) return;
	btn && (btn.onclick = function() {
		let name = document.querySelector('input[name="username"]');
		let name_value = name.value;

		let pwd = document.querySelector('input[name="password"]');
		let pwd_value = pwd.value;

		let banli = document.querySelector('.banli');
		let banli_value = banli.innerText;
		console.log(banli_value)

		if(name_value == '') {
			username.placeholder = '*必填';
			username.style.color = 'red !important';
			username.focus();
			return false;
		}

		if(pwd_value == '') {
			password.placeholder = '*必填';
			password.style.color = 'red !important';
			password.focus();
			return false;
		}

		// 通过ajax的方式把数据发送到服务器
		axios.post('/registerin/addlog', {
				name: name_value,
				pwd: pwd_value,
				banli_value: banli_value
			})
			.then(function(response) {
				console.log(response);
				if(response.data == 'ok') {
					window.location.href = '/orderin';
				}
			})
			.catch(function(error) {})
	});
}