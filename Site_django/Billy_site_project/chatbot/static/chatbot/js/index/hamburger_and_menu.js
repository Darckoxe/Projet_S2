$(document).ready(function(){
    //binding click event to the hamburger button
    $("#hamburger_button").on("click",function(){
        var $this = $(this);
        var toggle_options = {
            duration:500,
            queue:false
        };
        
        $this.toggleClass("is-active");
        $("ul#message_holder").getNiceScroll().toggle(toggle_options);
        $("#sidemenu").getNiceScroll().toggle(toggle_options);
        
        //si propriété inexistante, on initialise à faux
        if($this.prop("click_active") === undefined){
            $this.prop("click_active", false);
        }
        
        //si faux alors on décale la page vers la droite et on affiche le hider
        if($this.prop("click_active") === false){
            $("#page").animate({
                marginLeft: "80vw"
            },{
                duration: 500,
                queue:false
            });
            
            var $hider = $("#hider");
            $hider.css({zIndex:190});//set index
            $hider.toggle({duration: 500});//set display
            $hider.animate({
                opacity: $hider.data("opa"),
            },{
                duration: 500,
                queue:false
            });//set opacity
        }
        
        //si vrai alors on décale la page vers la gauche et on cache le hider
        if($this.prop("click_active") === true){
            $("#page").animate({
                marginLeft: "0vw"
            },{
                delay:500,
                duration: 500,
                queue:false
            });
            
            var $hider = $("#hider");
            $hider.animate({
                opacity: 0
            },{
                delay:0,
                duration: 250,
                queue:false
            });//set opacity
            $hider.toggle({delay:500, duration: 500, queue:false});//set display
            $hider.css({zIndex:-20});//set index
        }
        
        $this.prop("click_active", !$this.prop("click_active"));
    });
    
    
    
    
    //binding click event to the hider
    $("#hider").on('click', function(){
        var $this = $(this);
        if( ("" + $this.css("opacity")) == "0" ){
        }else{
            $("#hamburger_button").click();
        }
    });
    
    
    //binding change event to the theme chooser
    $("#themeMenu").on('selectmenuchange', function(event, uiElem){
        $("#themeMenu").selectedIndex = uiElem.item.index;
        $("#stylesheet").attr("href", ""+uiElem.item.value);
        if($("#hamburger_button").prop("click_active") === true){
            $("#hamburger_button").click();//if menu opened then close it
        }
    });
});