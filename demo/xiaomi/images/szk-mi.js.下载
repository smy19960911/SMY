// JavaScript Document

/*页眉*/
$(function(){
$(".header .shop .car").hide()
$(".header .shop").mouseenter(
	function(){
		$(".login .shop").addClass("current")
		$(".login .shop .car").stop(true.true).slideToggle()
		$(".car").addClass("shadow_lf").addClass("shadow_rt")
		$(".bg01").addClass("bg02")
		}
).mouseleave(
	function(){
		$(".header .shop .car").stop(true.true).slideToggle()
		$(".header .shop ").removeClass("current")
		$(".bg01").removeClass("bg02")
		}
)
/*banner*/
	/*菜单*/
	$(".submenu").hide()
	$(".menu li").mouseenter(
		function(){
			$(this).addClass("current").siblings().removeClass("current")
			$(".submenu").show()
			}
	).mouseleave(
		function(){
			$(this).removeClass("current")
			$(".submenu").hide()
			}
	)
	/*banner*/
	$(".circle").mouseenter(
		function(){
				$(this).addClass("current").siblings().removeClass("current")//鼠标经过当前的圆环，其添加背景颜色类变为白色，他的同胞颜色不变
			}
	)
	$(".circle").click(
		function(){
			x=$(".circle").index($(this))//获取当前圆圈的位置
			$(".banner-bigbox").animate({marginLeft:x*-1226},1000)//鼠标点击当前第x个的圆环，banner-bigbox停在距离中心点（0，0）marginLeft的位置
			/*$(".banner-bigbox img").eq(x).show().siblings().hide()*///鼠标点击当前第x个的圆环，banner-bigbox的第x张图片显示，所有同胞隐藏
			}
	)
	/*subnav*/
	$(".subnav .box1,.subnav .box2,.subnav .box3").mouseenter(
		function(){
			$(this).addClass("current").siblings().removeClass("current")
			}
	).mouseleave(
		function(){
			$(this).removeClass("current")
			}
	)
	/*arrow-btn*/
	$(".arrow-rtbtn").mouseenter(
		function(){
			$(".arrow-rtbtn img").attr("src","images/arrow_rightbtn.png")//鼠标经过banner右箭头时，换图片
			}
	).mouseleave(
		function(){
			$(".arrow-rtbtn img").attr("src","images/arrow_rightbtn01.png")//鼠标经过banner右箭头时，变为原来的图片
			}
	)
	$(".arrow-lfbtn").mouseenter(
		function(){
			$(".arrow-lfbtn img").attr("src","images/arrow_leftbtn.png")//鼠标经过banner左箭头时，换图片
			}
	).mouseleave(
		function(){
			$(".arrow-lfbtn img").attr("src","images/arrow_leftbtn01.png")//鼠标经过banner左箭头时，变为原来的图片
			}
	)
	var t=0//赋值一个变量
	$(".arrow-rtbtn").click(
		function(){
			if(t<4){t=t+1}//当t小于4时，让t加1
			else{t=0}//否则把t值为0
			$(".banner-bigbox").animate({marginLeft:t*-1226},1000)//点击banner右箭头时，点击一次banner-bigbox盒子向左移动1226px        
			$(".circle").eq(t).addClass("current").siblings().removeClass("current")//盒子移动的同时，对应的圆圈增加current类
			
			}
	)
	$(".arrow-lfbtn").click(
		function(){
			if(t>0){t=t-1}//当t大于0时，让t减1
			else{t=4}//否则把t值为4
			$(".banner-bigbox").animate({marginLeft:t*-1226},1000)//点击banner左箭头时，点击一次banner-bigbox盒子向左移动1226px        
			$(".circle").eq(t).addClass("current").siblings().removeClass("current")//盒子移动的同时，对应的圆圈增加current类
			
			}
	)
/*明星产品*/
$(".right-btn,.left-btn").mouseenter(
	function(){
		$(this).addClass("bg")//鼠标点击右箭头，products-bigbox向左移动1226px
		}
).mouseleave(
	function(){
		$(this).removeClass("bg")
		}
)
$(".right-btn").click(
	function(){
		$(".products-bigbox").animate({marginLeft:-1226},2000)//鼠标点击右箭头，products-bigbox向左移动1226px
		}
)
$(".left-btn").click(
	function(){
		$(".products-bigbox").animate({marginLeft:0},2000)//鼠标点击左箭头，products-bigbox回到原位置
		}
)
/*搭配--周边--配件*/
$(".dapei li").mouseenter(
	function(){
		$(this).addClass("current").siblings().removeClass("current")
		}
)

/***********************视频**************************/
$(".hotproduct").mouseenter(
	function(){
		$(this).stop(false).animate({marginTop:-2})
		$(this).addClass("shadow").siblings().removeClass("shadow")
		}
).mouseleave(
	function(){
		$(this).stop(false).animate({marginTop:0})
		$(this).removeClass("shadow")
		}
)

/***********************视频**************************/
$(".content").mouseenter(
	function(){
		$(this).stop(false).animate({marginTop:-2})
		$(this).addClass("shadow").siblings().removeClass("shadow")
		}
).mouseleave(
	function(){
		$(this).stop(false).animate({marginTop:0})
		$(this).removeClass("shadow")
		}
)
/***********************视频**************************/
$(".video-box .content").mouseenter(
	function(){
		$(this).find(".play").attr("src","images/video_play01.png")
		}
).mouseleave(
	function(){
		$(this).find(".play").attr("src","images/video_play.png")
		}
)
})