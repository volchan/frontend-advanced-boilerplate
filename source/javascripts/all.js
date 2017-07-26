//= require jquery
//= require materialize
//= require jquery-validation
//= require_tree .

$(document).ready(function() {
  function scroll_to_anchor(anchor_id){
    var tag = $(anchor_id);
    $('html, body').scrollTop(tag.offset().top - 64);
  };

  $(".nav-tab").click(function(e){
    e.preventDefault();
    $('.nav-tab').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').removeClass('active-content');
    $($(this).attr('href')).addClass('active-content');
    scroll_to_anchor($(this).attr('href'));
  });
});
