JS
=======

String As Selector:
  Extends String prototype with two methods, asID() and asClass(). Useful for defining selectors once and being able to use them either as pure selectors ie in $(yourClass.asClass()) or just as names, ie .addClass(yourClass) with none of this '.' + yourClass funnyman business

jQuery
=======

When Finished: 
  Provides a callback mechanism for CSS3-animated elements that fires instantly if 1) browser doesn't support transitions or 2) element isn't being animated. Fires on transitionEnd event if it is.
  
Transmorphers:
  A selection of jQuery methods for manipulating the data-transition attr of elements. The idea is you use these as hooks in your CSS to control transitions rather than adding them to normal selectors, as this can get pretty sticky.
