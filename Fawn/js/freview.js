
window.onload = function() {
	addTu();
	addUser();
}
let imgSrc='';
function addTu() {
	let head = document.querySelector('#head');
	console.log(head);
	head && (head.onchange = function() {
		let formdata = new FormData(); //<form></from>
		formdata.append('head', this.files[0]); //input type="file" name="headimg"
		axios.post('/freviewin/uploads', formdata)
			.then(function(response) {
				console.log(response.data);
				imgSrc="/" + response.data.path;
				document.querySelector('#showimg').src =imgSrc;
				document.querySelector('input[name="myhead"]').value = response.data;
			})
			.catch(function(error) {})
	});
}

function addUser() {
	//保存数据到数据库 
	let addbtn = document.querySelector('.adduser');
	console.log("入口")
	addbtn && (addbtn.onclick = function() {
		console.log(888);
		let data = {};
		data.myhead = imgSrc;
		console.log("狗狗" + data.myhead);
		data.wangname = document.querySelector('input[name="wangname"]').value;

		data.star = document.querySelector('.star').value;
		data.view = document.querySelector('textarea[name="view"]').value;
		console.log(data);
		
		if(data.myhead ==  ''){
			
            return false;
        }
		
		if(data.wangname ==  ''){
			
            return false;
        }
		
		if(data.star ==  ''){
            return false;
        }
		
		if(data.view ==  ''){
			
            return false;
        }

		axios.post('/freviewin/add', data)
			.then(function(response) {
				
				console.log(response.data);
				if(response.data = 'ok') {
					window.location.href = '/reviewin';
				}
			})
			.catch(function(error) {})
	});
}