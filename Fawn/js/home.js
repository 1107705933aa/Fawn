
$(function() {
	//显示搜索框样式
	$('.search').click(function() {
		$('.shelter').css('display', 'block');
	})

	//轮播图
	//获得slider插件对象
	var gallery = mui('.mui-slider');
	gallery.slider({
		interval: 3000 //自动轮播周期，若为0则不自动播放，默认为0；
	});
})