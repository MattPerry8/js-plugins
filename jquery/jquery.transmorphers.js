/*
    Transmorphers
    --------------------------------------
    
    A jQuery plugin that provides a set of methods to help control CSS3 transitions.
    This works in tandem with CSS that targets transitions on data-transition attr ie:
    
        &[data-transition="show"] {
            @include transition(opacity 200ms ease-out);
        }
        
    We seperate transitions from styles because they're sticky and work better when
    manipulated seperately.
    
    Blame: Matt Perry
    
    Methods:
        .resetDimensions()
        .forceReadCSS(props)
        .setTransition(transition)
        .getTransition()
        .removeTransition()
        .blockTransition()
        .unblockTransition()
*/
(function ($) {
    var KEY = {
            DATA: {
                TRANSITION: 'data-transition',
                SAVED_TRANSITION: 'data-saved-transition'
            }
        };
    /*
        Reset Dimensions
        
        Resets the width and height of an element (useful for then measuring its
        true dimensions)
        
        Usage:
            $element.resetDimensions();
            
        @return [jQuery object]: The triggering element for chaining
    */
    $.fn.resetDimensions = function () {
        this.css({
            height: 'auto',
            width: 'auto'
        });
        
        return this;
    };
    
    /*
        Force Read CSS
        
        Arbitary .css() call to make the DOM element report the defined CSS properties.
        This is useful for avoiding setting timeouts to get around crappy CSS3 behaviours
        
        @param1 [string | array] (optional): Property or array of CSS properties to read
    */
    $.fn.forceReadCSS = function (props) {
        this.css(props);
        return this;
    };
    
    /*
        Set Transition
        
        Adds the provided string to the data-transition attr
    */
    $.fn.setTransition = function (transition) {
        this.attr(KEY.DATA.TRANSITION, transition);
        return this;
    };
    
    /*
        Get Transition
        
        Looks for a value in data-transition and returns if found, empty if not.
        Non-chainable
    */
    $.fn.getTransition = function () {
        return this.attr(KEY.DATA.TRANSITION);
    };
    
    /*
        Remove Transition
        
        Destorys transition value
    */
    $.fn.removeTransition = function () {
        return this.attr(KEY.DATA.TRANSITION, '');
    };
    
    /*
        Block Transition
        
        Saves previous transition value to reapply on unblockTransitions(), then removes
    */
    $.fn.blockTransition = function () {
        var currentTransition = this.getTransition();
        
        this.attr(KEY.DATA.SAVED_TRANSITION, currentTransition)
            .removeTransition();
            
        return this;
    };
    
    /*
        Unblock Transition
        
        Restores data-transition value with the previous transition value
    */
    $.fn.unblockTransition = function () {
        var savedTransition = this.attr(KEY.DATA.SAVED_TRANSITION) || '';
        
        this.setTransition(savedTransition);
        
        return this;
    };
}(jQuery));