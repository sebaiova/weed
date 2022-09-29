function mostrarComites() {
    var x;
    if (window.innerWidth < 800) {
        x = document.getElementById("pc");
    }else{
        x = document.getElementById("celular");
    }
    x.style.display = "none";
}