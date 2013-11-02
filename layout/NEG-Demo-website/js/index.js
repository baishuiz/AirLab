;(function(){
    var nav = document.getElementById("main-nav");
    var container = document.getElementById("container");
    
    beacon(nav).on("click", function(){
        nav.style.webkitTransform = 'translate3d(0,0,0)';
        nav.style.transform = 'translate3d(0,0,0)';
        //$("#container").css({'transform': 'translate3d(0,0,0)'});
    });
}());