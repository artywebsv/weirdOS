$(document).ready(function () {

  $('.desktop-button').appendTo('#column-id-1');

  $(function () {
    $('.column-grid').sortable({
      connectWith: '.column-grid',
      handle: '.button-container',
      placeholder: "portlet-placeholder ui-corner-all"
    });

    $(".desktop-button")
        .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
        .find(".button-container")
        .addClass("ui-widget-header ui-corner-all");
  });

});