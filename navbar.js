window.onload = function() {
    document.getElementById('menuToggle').addEventListener('click', function(){
        var menu = document.getElementById('menu');
        if(menu.style.display === "none" || menu.style.display === ""){
            menu.style.display = "block";
        } else {
            menu.style.display = "none";
        }
    });
}
