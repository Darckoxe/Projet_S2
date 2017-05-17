var $btn_holder, $sidebar;

$(document).ready(function(){
    //caching
    $btn_holder = $("#btns");
    $sidebar = $("#themePick");
    
    //first call
    updateButtonPos();
});

//on resize
$(window).on('resize',function(){
    updateButtonPos();
});


function updateButtonPos(){
////    if($("body").css("width").pxToFloat() >= 768){
//        var ex_w, in_w, n_w;
//        ex_w = $sidebar.css("width").pxToFloat();
//        in_w = $btn_holder.children("#addK").css("width").pxToFloat() + $btn_holder.children("#rmK").css("width").pxToFloat();
//        n_w = (ex_w - in_w) / 2.00;
//        $btn_holder.css("marginLeft",""+n_w+"px");
////    }else{
////        var ex_w, in_w, n_w;
////        ex_w = $sidebar.css("width").pxToFloat();
////        in_w = $btn_holder.children("#addK").css("width").pxToFloat();
////        n_w = (ex_w - in_w) / 2.00;
////        $btn_holder.css("marginLeft",""+n_w+"px");
////    }
}