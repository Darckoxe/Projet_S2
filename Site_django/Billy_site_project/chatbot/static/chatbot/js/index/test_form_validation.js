$(document).ready(function(){
//    console.clear();//clear console on load
    
    
    
    var $user_in = $("#usr_input");
    $user_in.val("");/*set input's value to empty string by default*/
    
    
    
    extendStringPrototype();/*adds followsPattern to String's prototype*/
    
    
    $("#submit_button").on('click', function(){
        test_form_validation($user_in);
    });
    
    
    
    smoothScrollDown(300,$("#message_holder"));
});



function test_form_validation($user_input){
    var actual_input = $user_input.val() || "";/*if undefined, assign empty string*/
    
    var pattern_not_to_be_followed = /^$/ //empty string pattern for test;/*verification pattern/RegEx*/
    
    /*Si suis le !pattern alors traiter, sinon ne pas traiter*/
    if(!actual_input.followsPattern( pattern_not_to_be_followed )){
        displayUserInput(""+actual_input);//overkill to stringify
        //get bot's response and display it
    }else{
        alert("Empty String \\o/ !");
    }
    
    
    
    
    //this must be the very end of the function
    $user_input.val("");//reset to empty string
}