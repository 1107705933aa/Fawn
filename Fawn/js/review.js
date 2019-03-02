
window.onload = function() {
	//	queryDingdan();
	let layer = layui.layer;
	delReview();
}

function delReview() {
	//使用事件代理实现点击事件  confirm
	let shan = document.querySelector('.zhong');
	shan && (shan.onclick = function(e) {
   console.log('target');
		let target = e.target;
		console.log(target);
//		点击的节点包含delc这个类表示删除  data-cid
		console.log(target);
		
		if(target.classList.contains('delc')) {

			
			layer.open({
				content: '是否确定删除？',
				btn: ['确定', '取消'],
				yes: function(index, layero) {
					let id = target.dataset.id;					
					//到数据库删除对应的信息
					axios.get('/reviewin/del', {
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