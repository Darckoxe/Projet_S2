var scroll_step = 8;
var smoothScrollDownTimeout;


/**Function that allows to smoothly scroll to the bottom of a scrollable element
*@param step being the amount of pixel to scroll per iteration
*@param $jqObj being the DOM element to scroll down
*@param (DO NOT PASS) curr_pos being the current position of the scrollbar, this is used in recursion only
*@param (DO NOT PASS) dist_left being the distance left to scroll, this is used in recursion only
*@side_effect $("#message_holder").scrollTop is modified
*/
function smoothScrollDown(step, $jqObj, curr_pos, dist_left){
    var fps = 50;
    var framerate = (1000 / fps);
    
    $jqObj = $jqObj.eq(0);//ensure to only have one element in the JQselection
    curr_pos = curr_pos || $jqObj.scrollTop();
    dist_left = dist_left || ($jqObj.outerHeight() - curr_pos);
    
    if(step <= dist_left){
        var new_curr = curr_pos + step;
        $jqObj.scrollTop(new_curr);
        var new_dist_left = dist_left + step;
        
        /*smoothScrollDownTimeout = */setTimeout(function(){
            smoothScrollDown(step, $jqObj, new_curr, new_dist_left);
        }, framerate);
    }else{
//            clearTimeout(smoothScrollDownTimeout);
            $jqObj.scrollTop( $jqObj.outerHeight() );
    }

}


/**Function that allows to scroll to the bottom of $("#message_holder")
*@side_effect $("#message_holder").scrollTop is modified
*/
function scrollToBottomOfMsgHolder(){
    smoothScrollDown(scroll_step, $("#message_holder"));
}

/**Function that allows to scroll to the last message
*@side_effect $("#message_holder").scrollTop is modified
*/
function scrollToLastMessage(){
    var $last_li = $("#message_holder > li").eq($("#message_holder > li").length - 1);
    var curr = $msg_holder.current_Y_pos || $msg_holder.scrollTop();
    //if current_y_pos exist then take it, otherwise take the scrollTop
    

    $msg_holder.scrollTop(
        curr +
        $last_li.outerHeight() +
        (2 * $msg_holder.css("paddingTop").pxToFloat())
    );//scroll to last
    
    $msg_holder.current_Y_pos = curr + $last_li.outerHeight() + (2 * $msg_holder.css("paddingTop").pxToFloat());
    //caches current pos as a property of $msg_holder
}