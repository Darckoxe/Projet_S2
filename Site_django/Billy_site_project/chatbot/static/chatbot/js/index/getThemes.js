/*@@globals@@*/
var themes = [];
var $themeMenu, $tmOptions, themes_initialized;

/*setup of globals*/
$(document).ready(function(){
    $themeMenu = $("#themeMenu");
    $tmOptions = $themeMenu.children("option");
    
    themes.push("");
    for(var i = 1 ; i < $tmOptions.length ; i+=1){
        themes.push($tmOptions[i].value);
    }
    
    themes_initialized = true;
});


/*@@helper functions@@*/
    //get the url of the theme above the current one
function getThemeAbove(){
    //get the current theme url string
    var curr = $themeMenu.val();
    
    //find the index in the array
    var index = -1;
    for(var i = 1 ; i < themes.length ; i+=1){
        if(themes[i] === curr){
            index = i;
            break;
        }
    }
    


    var index = (index-1)%themes.length;
    if(index <= 0){
        return themes.length - 1;
    }
    
    return index;
}


    //get the url of the theme below the current one
function getThemeBelow(){
    //get the current theme url string
    var curr = $themeMenu.val();
    
    //find the index in the array
    var index = -1;
    for(var i = 1 ; i < themes.length ; i+=1){
        if(themes[i] === curr){
            index = i;
            break;
        }
    }

    var index = (index+1)%themes.length;
    if(index == 0){
        return 1;
    }
    return index;
}

//manually change the theme
function changeTheme(index){
    $("#stylesheet").attr("href", themes[index]);
    $themeMenu.val(themes[index]);
    $themeMenu.selectedIndex = index;
    $themeMenu.selectmenu("refresh");
}

