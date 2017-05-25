/**
 * Created by Administrator on 2017/5/24.
 */
window.onload=function(){
    waterfall("main","box");
    var dataInt={"data":[{"src":"1.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"}]};
    window.onscroll=function(){
        if (checkScrollslide()) {
            var oParent=document.getElementById("main");
            for (var i = 0; i < dataInt.data.length; i++) {
                var lastDiv=document.createElement("div");
                lastDiv.className="box";
                oParent.appendChild(lastDiv);
                var picDiv=document.createElement("div");
                picDiv.className="pic";
                lastDiv.appendChild(picDiv);
                var oImg=document.createElement("img");
                oImg.src="images/"+dataInt.data[i].src;
                picDiv.appendChild(oImg);
            }
        }
        waterfall("main","box");
    }
}

function waterfall(parent,box){
    var oParent=document.getElementById(parent);
    var oBoxs=getByclass(oParent,box);
    //璁＄畻姣忚鐨勫垪鏁�
    var oBoxW=oBoxs[0].offsetWidth;
    var cols=Math.floor(document.documentElement.clientWidth/oBoxW);
    oParent.style.cssText="width:"+cols*oBoxW+"px; margin:0 auto";
    var hArr=[];
    for (var i = 0; i < oBoxs.length; i++) {
        if (i<cols) {
            hArr.push(oBoxs[i].offsetHeight);
        }else{
            var minH=Math.min.apply(null,hArr);
            var index=hArr.indexOf(minH);
            oBoxs[i].style.position="absolute";
            oBoxs[i].style.top=minH+"px";
            oBoxs[i].style.left=index*oBoxW+"px";
            hArr[index]+=oBoxs[i].offsetHeight;
        }
        oBoxs[i].onclick=showPhotos;
    }
}

function getByclass(parent,cls){
    var elements=parent.getElementsByTagName("*");
    var arr=[];
    for(var i=0;i<elements.length;i++){
        if (elements[i].className==cls) {
            arr.push(elements[i]);
        }
    }
    return arr;
}

function showPhotos(event){
    event = event || window.event;
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    var show=document.getElementById("showPhotos");
    var imgs=this.getElementsByTagName("img")[0];
    var url=imgs.getAttribute("src");
    show.innerHTML="<img src='"+url+"' style='width:400px;height:auto;'/>";
    show.style.display="block";
    document.onclick=function(){
        show.style.display="none";
    }
}

function checkScrollslide(){
    var oParent=document.getElementById("main");
    var oBoxs=getByclass(oParent,"box");
    var lastBoxH=oBoxs[oBoxs.length-1].offsetTop;
    var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    var height=document.documentElement.clientHeight||document.body.clientHeight;
    return (lastBoxH<scrollTop+height) ? true : false;
}