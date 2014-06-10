/*
    String As Selector
    --------------------------------------
    
    Extend the string prototype to return strings as classes or IDs
    
    Blame: Matt Perry
    
    Usage:
        'yourString'.asClass() // returns .yourString
        'yourString'.asID() // returns #yourString
*/
(function () {
    String.prototype.asClass = function () {
        return '.' + this;
    };
    
    String.prototype.asID = function () {
        return '#' + this;
    };
}());