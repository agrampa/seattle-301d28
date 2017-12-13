'use strict';

// This is where we define the view for the "About" page
(function(module) {
  const aboutView = {};

  aboutView.init = function() {
    console.log('inside aboutView.init');
    $('#contacts').empty();
    $('body').css('background-color', 'yellow');
    $('#content').text('This is the About page').css('color', 'green');
  };

  module.aboutView = aboutView;
})(window);
