p=1;
nbr=4;
document.addEventListener("DOMContentLoaded", () => { 
    container=document.getElementById("container");
    g=document.getElementById('g');
    d=document.getElementById('d');/* Les images doivent etre en jpg */
});

function dClick(){
    if(p!=nbr){
        p++;
    div = document.getElementById("photo");
    div.style.backgroundImage="url('./img/img"+p+".jpg')";
    }else{
        p=1;
    }
}

d.onclick= dClick;

function gClick(){
    if(p>1){
        p--;
        div = document.getElementById("photo");
        div.style.backgroundImage="url('./img/img"+p+".jpg')";
    }else{
        p=nbr;
    }
}

g.onclick = gClick;




setInterval(dClick, 3000)