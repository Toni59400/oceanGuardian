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


var nb1 = document.getElementById("nb1");
var nb2 = document.getElementById("nb2");
var nb3 = document.getElementById("nb3");
var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");
var txt3 = document.getElementById("txt3");

nb1.onclick = function(){
    nb1.classList.add("select");
    nb1.classList.remove("bg-gris")
    nb2.classList.remove("select")
    nb3.classList.remove("select")
    nb2.classList.add("bg-gris")
    nb3.classList.add("bg-gris")
    txt1.style.display = 'block';
    txt2.style.display = "none";
    txt3.style.display = "none";
}

nb2.onclick = function(){
    nb2.classList.add("select");
    nb2.classList.remove("bg-gris")
    nb1.classList.remove("select")
    nb3.classList.remove("select")
    nb1.classList.add("bg-gris")
    nb3.classList.add("bg-gris")
    txt2.style.display = 'block';
    txt1.style.display = "none";
    txt3.style.display = "none";
}

nb3.onclick = function(){
    nb3.classList.add("select");
    nb3.classList.remove("bg-gris")
    nb2.classList.remove("select")
    nb1.classList.remove("select")
    nb2.classList.add("bg-gris")
    nb1.classList.add("bg-gris")
    txt3.style.display = 'block';
    txt1.style.display = "none";
    txt2.style.display = "none";
}

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.style.display === "block") {
      navbar.style.display = "none";
    } else {
      navbar.style.display = "block";
    }
  }
  