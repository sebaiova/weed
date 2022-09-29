function mostrarComites() {
    var x;
    if (window.innerWidth < 800) {
        x = document.getElementById("pc");
    }else{
        x = document.getElementById("celular");
    }
    x.style.display = "none";

    if(window.innerWidth<480){
        var y= document.getElementsByClassName("titulo");
        for (let i = 0; i < y.length; i++) {
            y.item(i).style.fontSize ="34px";
          }

        y=document.querySelectorAll(".cta,.container");

        for (let i = 0; i < y.length; i++) {
            y.item(i).style.paddingTop ="40px";
            y.item(i).style.paddingBottom ="40px";
            y.item(i).style.paddingRight ="20px";
            y.item(i).style.paddingLeft ="20px";
          }
    }
}