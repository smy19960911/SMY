/**
 * Created by Administrator on 2017/5/25.
 */
// JavaScript Document

/*椤电湁*/
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
    /*鑿滃崟*/
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
            $(this).addClass("current").siblings().removeClass("current")//榧犳爣缁忚繃褰撳墠鐨勫渾鐜紝鍏舵坊鍔犺儗鏅鑹茬被鍙樹负鐧借壊锛屼粬鐨勫悓鑳為鑹蹭笉鍙�
        }
    )
    $(".circle").click(
        function(){
            x=$(".circle").index($(this))//鑾峰彇褰撳墠鍦嗗湀鐨勪綅缃�
            $(".banner-bigbox").animate({marginLeft:x*-1226},1000)//榧犳爣鐐瑰嚮褰撳墠绗瑇涓殑鍦嗙幆锛宐anner-bigbox鍋滃湪璺濈涓績鐐癸紙0锛�0锛塵arginLeft鐨勪綅缃�
            /*$(".banner-bigbox img").eq(x).show().siblings().hide()*///榧犳爣鐐瑰嚮褰撳墠绗瑇涓殑鍦嗙幆锛宐anner-bigbox鐨勭x寮犲浘鐗囨樉绀猴紝鎵€鏈夊悓鑳為殣钘�
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
            $(".arrow-rtbtn img").attr("src","images/arrow_rightbtn.png")//榧犳爣缁忚繃banner鍙崇澶存椂锛屾崲鍥剧墖
        }
    ).mouseleave(
        function(){
            $(".arrow-rtbtn img").attr("src","images/arrow_rightbtn01.png")//榧犳爣缁忚繃banner鍙崇澶存椂锛屽彉涓哄師鏉ョ殑鍥剧墖
        }
    )
    $(".arrow-lfbtn").mouseenter(
        function(){
            $(".arrow-lfbtn img").attr("src","images/arrow_leftbtn.png")//榧犳爣缁忚繃banner宸︾澶存椂锛屾崲鍥剧墖
        }
    ).mouseleave(
        function(){
            $(".arrow-lfbtn img").attr("src","images/arrow_leftbtn01.png")//榧犳爣缁忚繃banner宸︾澶存椂锛屽彉涓哄師鏉ョ殑鍥剧墖
        }
    )
    var t=0//璧嬪€间竴涓彉閲�
    $(".arrow-rtbtn").click(
        function(){
            if(t<4){t=t+1}//褰搕灏忎簬4鏃讹紝璁﹖鍔�1
            else{t=0}//鍚﹀垯鎶妕鍊间负0
            $(".banner-bigbox").animate({marginLeft:t*-1226},1000)//鐐瑰嚮banner鍙崇澶存椂锛岀偣鍑讳竴娆anner-bigbox鐩掑瓙鍚戝乏绉诲姩1226px
            $(".circle").eq(t).addClass("current").siblings().removeClass("current")//鐩掑瓙绉诲姩鐨勫悓鏃讹紝瀵瑰簲鐨勫渾鍦堝鍔燾urrent绫�

        }
    )
    $(".arrow-lfbtn").click(
        function(){
            if(t>0){t=t-1}//褰搕澶т簬0鏃讹紝璁﹖鍑�1
            else{t=4}//鍚﹀垯鎶妕鍊间负4
            $(".banner-bigbox").animate({marginLeft:t*-1226},1000)//鐐瑰嚮banner宸︾澶存椂锛岀偣鍑讳竴娆anner-bigbox鐩掑瓙鍚戝乏绉诲姩1226px
            $(".circle").eq(t).addClass("current").siblings().removeClass("current")//鐩掑瓙绉诲姩鐨勫悓鏃讹紝瀵瑰簲鐨勫渾鍦堝鍔燾urrent绫�

        }
    )
    /*鏄庢槦浜у搧*/
    $(".right-btn,.left-btn").mouseenter(
        function(){
            $(this).addClass("bg")//榧犳爣鐐瑰嚮鍙崇澶达紝products-bigbox鍚戝乏绉诲姩1226px
        }
    ).mouseleave(
        function(){
            $(this).removeClass("bg")
        }
    )
    $(".right-btn").click(
        function(){
            $(".products-bigbox").animate({marginLeft:-1226},2000)//榧犳爣鐐瑰嚮鍙崇澶达紝products-bigbox鍚戝乏绉诲姩1226px
        }
    )
    $(".left-btn").click(
        function(){
            $(".products-bigbox").animate({marginLeft:0},2000)//榧犳爣鐐瑰嚮宸︾澶达紝products-bigbox鍥炲埌鍘熶綅缃�
        }
    )
    /*鎼厤--鍛ㄨ竟--閰嶄欢*/
    $(".dapei li").mouseenter(
        function(){
            $(this).addClass("current").siblings().removeClass("current")
        }
    )

    /***********************瑙嗛**************************/
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

    /***********************瑙嗛**************************/
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
    /***********************瑙嗛**************************/
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