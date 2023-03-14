function tombolVMobile() {
    var element = document.getElementById("menu");
    element.classList.toggle("show");
}

var toTop = document.getElementById("toTop");
var nav = document.getElementById("navbar");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTop.style.display = "block";
        nav.style.backgroundColor = "#fff";
        nav.style.boxShadow = "0 2px 2px -2px #000";
        
    } else {
        toTop.style.display = "none";
        nav.style.backgroundColor = "";
        nav.style.boxShadow = "";
        
    }

}


const menu = document.querySelector(".menus");

menu.addEventListener('click', function(e) {
    const targetMenu = e.target;

    if(targetMenu.classList.contains('menu_link')) {
        const menuLinkActive = document.querySelector("ul li a.active");
        if(menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {
            menuLinkActive.classList.remove('active');
        }

        targetMenu.classList.add('active');

        if(menuLinkActive !== null && targetMenu.getAttribute('href') == "#home"){
            targetMenu.classList.remove('active');
        }
        
        
    }
});

toTop.addEventListener('click', function(e) {
    const menuLinkActive = document.querySelector("ul li a.active");
    if(menuLinkActive !== null) {
        menuLinkActive.classList.remove('active');
    }
});
