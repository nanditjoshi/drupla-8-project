/* global a2a*/
(function (Drupal) {
  'use strict';

  Drupal.behaviors.addToAny = {
    attach: function (context, settings) {
      // If not the full document (it's probably AJAX), and window.a2a exists
      if (context !== document && window.a2a) {
        a2a.init_all(); // Init all uninitiated AddToAny instances
      }
    }
  };

})(Drupal);
;
(function ($, Drupal) {

  'use strict';
  if (window.location.href.indexOf("/article/") <= -1) {
    jQuery(".addtoany_list").remove();
  }
  if (window.location.href.indexOf("/users/") > -1 || window.location.href.indexOf("/user/") > -1) {
    jQuery(" article ").remove();
  }

})(jQuery, Drupal);;
