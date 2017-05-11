var $msg_holder = undefined;
$(document).ready(function(){
    $msg_holder = $("#message_holder");
});

/**Function that appends a String (msg) to a DOM element ($dom)
*@param msg being the String to append (String object or literal string)
*@param $dom being a JQobject/JQselection of a DOM element to append the msg to
*/
function appendToDom(msg, $dom){
    $(msg).appendTo($dom);
}



/**Function that append a String (msg) to the Message Holder
*@param msg being the String to append (String object or literal string)
*/
function appendToMessageHolder(msg){
    appendToDom("<li>"+msg+"</li>", $("#message_holder"));
}

//////////////////////////////////////////////

/**Function that gets the amount of messages currently on the page
*@return the amount of messages currently on the page (integer)
*/
function processMsgCount(){
    var $ul = $("#message_holder");
    var $li = $ul.children("li");
    
    return Math.abs($li.length);//overkill to ensure that a positive number is returned
}

//////////////////////////////////////////////

/**Function that determines if it's the User's turn to give a sentence (in the scenario bot-->user user-->bot)
*@return TRUE if it's indeed the user's turn, FALSE otherwise
*/
function isUserTurn(){
    var ret = false;
    
    var MSGcount = processMsgCount();
    
    //if odd, then it's the User's turn
    if(MSGcount%2 != 0){
        ret = true
    }
    
    
    return ret;
}



/**Function that determines if it's the Bot's turn to give a sentence (in the scenario bot-->user user-->bot)
*@return TRUE if it's indeed the bot's turn, FALSE otherwise
*/
function isBotTurn(){
    return !isUserTurn();
}

//////////////////////////////////////////////

/**Function that displays the User's Input (wrapper function)
*@param msg being the user input itself (String object or literal string)
*/
function displayUserInput(msg){
    //condition is overkill, but meh 200% > 100%
    if(isUserTurn()){
        appendToMessageHolder(msg);
        scrollToLastMessage();//scroll down when new message
    }else{
        console.log("user tried to input a sentence when it was the bot's turn :x");
    }
}



/**Function that displays the Bot's Response to the User's Input (or display the initial sentence)
*@param msg being the bot's message/response (String object or literal string)
*/
function displayBotResponse(msg){
    //condition is overkill, but meh 200% > 100%
    if(isBotTurn()){
        appendToMessageHolder(msg);
        scrollToLastMessage();//scroll down when new message
    }else{
        console.log("how the fuck did the bot try to give another message without user's input ?_?");
    }
    
}