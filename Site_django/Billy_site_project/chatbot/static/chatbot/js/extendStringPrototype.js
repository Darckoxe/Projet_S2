function extendStringPrototype(){
    
    /**Function to determine if a String follows a RegExp pattern
    *@param regex being the pattern that the String is supposed to follow (type: RegExp)
    *@return TRUE if the String follows regex's pattern and regex is a RegExp, FALSE otherwise
    */
    String.prototype.followsPattern = function(regex){
        var ret = false;
        
        if(regex instanceof RegExp){
            ret = (regex.test(this));
        }
        
        return ret;
    };
    
    
    /**Function to determine if the String is empty or not
    *@return TRUE if empty String, FALSE otherwise
    */
    String.prototype.isEmptyString = function(){
        return this.followsPattern(/^$/);//test if match empty string pattern
    };
    
    
    
    
    /**Function that returns a floating point from a String that contains px 
    *(ex: "127.13456122px".pxToFloat() is 127.13456122)
    *@return a floating point representation of the String
    */
    String.prototype.pxToFloat = function(){
        return parseFloat(this.replace(/px/,"  "));
    }
}