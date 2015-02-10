/*! gruntdemo - v0.1.0 - 2015-02-10
* https://github.com/hennywei/gruntdemo
* Copyright (c) 2015 hennywei; Licensed GPL */
(function($) {

  // Collection method.
  $.fn.gruntdemo = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.gruntdemo = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.gruntdemo.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.gruntdemo.options = {
    punctuation: '.',
    className: 'addStatus'
  };

  $.gruntdemo.init = function(){

  };
  $.gruntdemo.make = function(){

  };

  $.gruntdemo.takeover = function(){

  };

  // Custom selector.
  $.expr[':'].gruntdemo = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
