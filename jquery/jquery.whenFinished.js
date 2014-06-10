/*
    When Finished
    --------------------------------------
    
    A jQuery plugin that executes a callback when a CSS animation has
    completed (if running at all). Designed to execute instantly if CSS
    animations aren't supported.
    
    Blame: Matt Perry
    
    Usage:
        $element.add/removeClass('animationClass') // trigger an animation
            .whenFinished(callback, delegate);
            
    Dependencies:
        Modernizr
*/
(function ($) {
    /*    
        @param1 [function]: Callback to be executed on transitionend
        @param2 [string] optional: CSS selector of delegate element to listen to
        @return [jQuery object]: The triggering element for chaining
    */  
    $.fn.whenFinished = function (callback, delegate) {
        var $element = this,
            $animatedElement = delegate ? $element.find(delegate) : $element,
            transitionTime = $animatedElement.css(Modernizr.prefixed('transitionDuration')),
            transitionEndEvents = "transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",
            playStateProp = Modernizr.prefixed('animationPlayState'),
            hasTransition = ((transitionTime != '0s' && transitionTime != 0) || !transitionTime) ? true : false;

        if ($animatedElement.css(playStateProp) && hasTransition) {
            $animatedElement.on(transitionEndEvents, function (e) {
                e.stopPropagation();
                $animatedElement.off(transitionEndEvents);
                callback();
            });
        } else {
            callback();
        }
        
        return $element;
    };
}(jQuery));