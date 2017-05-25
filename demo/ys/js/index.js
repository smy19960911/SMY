/**
 * Created by Administrator on 2017/5/24.
 */
function addLoadEvent(func){
    var oldonload=window.onload;
    if(typeof window.onload != "function"){
        window.onload=func;
    }else{
        window.onload=function(){
            oldonload();
            func();
        }
    }
}

function a(){
    if(!document.getElementById('btn')) return false;
    if(!document.getElementsByTagName("li")) return false;
    var btn=document.getElementById('btn');
    var li=btn.getElementsByTagName('li');
    for (var i = 0; i < li.length; i++) {
        li[i].index=i;
        li[i].onclick=function movePic(){
            for (var j=0;j<li.length;j++) {
                li[j].className=" ";
            };
            this.className="selected";
            var msph=document.getElementById("msph");
            var container=document.getElementById("container");
            var msW=container.offsetWidth;
            //console.log(msW);
            var num=this.index;
            //console.log(msW*num);
            msph.style.left="-"+msW*num+"px";
        };
    };
}

function b(){
    if (!document.getElementsByClassName("item"))return false;
    if (!document.getElementsByClassName("jq-info"))return false;
    var item=document.getElementsByClassName("item");
    var jqinfo=document.getElementsByClassName("jq-info");
    for (var i = item.length - 1; i >= 0; i--) {
        item[i].index=i;
        item[i].onclick=function(){
            for (var i = jqinfo.length - 1; i >= 0; i--) {
                jqinfo[i].className="jq-info hide";
            };
            jqinfo[this.index].className="jq-info";
        }
    };
}

function c(){
    if (!document.getElementById("jn"))return false;
    if (!document.getElementsByTagName("img"))return false;
    if (!document.getElementsByTagName("p"))return false;
    if (!document.getElementById("bigPic"))return false;
    var jn=document.getElementById("jn");
    var smallPic=jn.getElementsByTagName("img");
    var txt=document.getElementsByTagName("p")[0];
    var bigPic=document.getElementById("bigPic");
    for(i=0; i<smallPic.length; i++){
        smallPic[i].index=i;
        smallPic[i].onclick=function(){
            var iTitle=this.getAttribute("title");
            txt.innerHTML=iTitle;
            var iSrc=["images/qq.jpg","images/ww.jpg","images/ee.jpg","images/rr.jpg"];
            bigPic.setAttribute("src",iSrc[this.index]);
        }
    }
}

addLoadEvent(a);
addLoadEvent(b);
addLoadEvent(c);