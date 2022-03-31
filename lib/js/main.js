$(window).on('load', function(){
  const waterdrop = new Audio('audio/waterdrop.mp3');

  $('#onload').fadeOut('fast', function(){
    $(this).remove();
    waterdrop.play();
    $('#taskbar').show('drop', {
      'direction' : 'down'
    }, 'fast');
    $('#toggle-admin-menu').show();
    $('#desktop').show();
  });
});

$(document).ready(function () {
  const toggle_admin_menu_sound = new Audio('audio/toggle-admin-menu.wav');

  $(this).contextmenu(function (){
    console.log('Click derecho detectado y anulado');
    return false;
  });

  $('.draggable-window').draggable({
    containment: '#desktop',
    stack: '.draggable-window'
  }).resizable({
    containment: '#desktop',
    animate: true
  });

  $('#toggle-admin-menu').click(function(){
    toggle_admin_menu_sound.play();

    $(this).toggleClass('active-toggle-admin-menu');
    $('#admin-panel').toggle('drop', {
      direction: 'right'
    }, 'fast');
  });

  $.contextMenu({
    selector: '.main-container',
    trigger: 'right',
    items: {
      "edit": {name: "Edit", icon: "edit"},
      "cut": {name: "Cut", icon: "cut"},
      copy: {name: "Copy", icon: "copy"},
      "paste": {name: "Paste", icon: "paste"},
      "delete": {name: "Delete", icon: "delete"},
      "sep1": "---------",
      "quit": {name: "Quit", icon: function(){
          return 'context-menu-icon context-menu-icon-quit';
        }}
    }
  });
});

// $(window).on('mousemove', function(){
//   const bottom = $(window).height();

//   if()
// });