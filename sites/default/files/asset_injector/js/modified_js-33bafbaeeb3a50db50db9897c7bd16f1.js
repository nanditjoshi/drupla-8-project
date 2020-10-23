(function ($, Drupal) {

  'use strict';
  if (window.location.href.indexOf("/article/") <= -1) {
    jQuery(".addtoany_list").remove();
  }
  if (window.location.href.indexOf("/users/") > -1 || window.location.href.indexOf("/user/") > -1) {
    jQuery(" article ").remove();
  }

})(jQuery, Drupal);