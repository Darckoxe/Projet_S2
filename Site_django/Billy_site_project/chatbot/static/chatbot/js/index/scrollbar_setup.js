var scrollbar_settings = {
    
    preservenativescrolling: false,
    enablemousewheel: true,
    horizrailenabled: false,
    bouncescroll: true,
    cursorborderradius:"2vmin",
    cursorcolor: "#3c3f41",
    cursorwidth: "1.4vmin",
    cursorborder:"0px solid transparent",
    cursoropacitymin:0.1,
    cursoropacitymax: 0.35,
    railoffset:{left:-2}
    
};

var scrollbar_settings2 =  {
    
    preservenativescrolling: false,
    enablemousewheel: true,
    horizrailenabled: false,
    bouncescroll: true,
    cursorborder:"0px solid transparent",
    cursorborderradius:"2vmin",
    cursorcolor: "#3c3f41",
    cursorwidth: "1.4vmin",
    cursoropacitymin:0.1,
    cursoropacitymax: 0.35,
    railoffset:{left:-4},
    zindex:3000
    
};

$(document).ready(function(){
    $sbMSGholder = $("ul#message_holder");
    $sidemenu = $("#sidemenu");
    
    $sbMSGholder.niceScroll(scrollbar_settings);
    $sidemenu.niceScroll(scrollbar_settings2);
    $sidemenu.getNiceScroll().toggle();
});