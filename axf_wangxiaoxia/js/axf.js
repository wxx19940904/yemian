document.getElementsByTagName("html")[0].style.fontSize= (document.documentElement.clientWidth || document.body.clientWidth)/375*100 + "px";
window.onresize = function(){
	//取得当前视口宽度
	var clientWidth = document.documentElement.clientWidth || document.body.clientWidth;
	//根据标准大小375  计算当前视口对应的根节点font-size
	var size = clientWidth/375*100 + "px";
	document.getElementsByTagName("html")[0].style.fontSize = size;
};
	/*页面的切换*/
	$('.tiao1').on('click',function(){
		$('.main').show();
		$('.send').hide();
		$('.cars').hide();
		$('.mine').hide();
	})
	$('.tiao2').on('click',function(){
		$('.main').hide();
		$('.send').show();
		$('.cars').hide();
		$('.mine').hide();
	})
	$('.tiao3').on('click',function(){
		$('.main').hide();
		$('.send').hide();
		$('.cars').show();
		$('.mine').hide();
	})
	$('.tiao4').on('click',function(){
		$('.main').hide();
		$('.send').hide();
		$('.cars').hide();
		$('.mine').show();
	})
	// 頁面變色
	var lis = document.getElementById('footer').getElementsByTagName('a')
	for (var i=0; i<4;i++){
		lis[i].index = i;

		lis[i].onclick=function  () {
		var a = this.index;
		console.log(a)
			
		var arr = ["img/1000.png","img/42.png","img/car.png","img/25.png"]
		var arr1 = ["img/24.png","img/2.png","img/3.png","img/444.png"]
		for (var z = 0; z<4; z++){
			$(".img-nav:eq("+z+") ").attr("src",arr1[z]);
		}

		$(".img-nav:eq("+a+")").attr("src",arr[a]);
	}	

	}
	$('.left>ul>li').click(function(){
		// 获取li标签对应的下标
		 $(this).addClass("categories-item-h").siblings().removeClass("categories-item-h");
	});