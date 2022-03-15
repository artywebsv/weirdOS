$(document).ready(function(){
  var dialog_window = $('.dialog-window');

  dialog_window.click(function(){
    const this_dialog = $(this).attr('id');
    const dialog_window = $(this).data('aw-dialog-window');
    const dialog_window_name = $(this).data('aw-dialog-window-name');
    const dialog_window_dir = $(this).data('aw-dialog-window-dir');
    const load_explorer = 'lib/elFinder/elfinder.html';

    if(dialog_window == 'explorer' && $('#dialog-' + this_dialog).length === 0){
      createDialog(this_dialog, dialog_window_name, dialog_window_dir, load_explorer);
    }
  });
});

function createDialog(id, title, dialog_window_dir, load_explorer){

  const newDialogId = 'dialog-' + id;
  const fileExplorer = $('<iframe />', {
    id: 'elfinder-' + id,
    src: load_explorer + '#elf_' + dialog_window_dir,
    title: 'elfinder-' + id,
    frameborder: 0,
    class: 'w-100 h-100'
  });

  // $('#' + newDialogId).html(fileExplorer);

  // var elfinderConfig = {
  //   url : 'lib/elFinder/php/connector.minimal.php', // or connector.maximal.php : connector URL (REQUIRED)
  //   lang : 'es',
  //   // commandsOptions : {
  //   //     quicklook : {
  //   //         sharecadMimes : ['image/vnd.dwg', 'image/vnd.dxf', 'model/vnd.dwf', 'application/vnd.hp-hpgl', 'application/plt', 'application/step', 'model/iges', 'application/vnd.ms-pki.stl', 'application/sat', 'image/cgm', 'application/x-msmetafile'],
  //   //         googleDocsMimes : ['application/pdf', 'image/tiff', 'application/vnd.ms-office', 'application/msword', 'application/vnd.ms-word', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/postscript', 'application/rtf'],
  //   //         officeOnlineMimes : ['application/vnd.ms-office', 'application/msword', 'application/vnd.ms-word', 'application/vnd.ms-excel', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.presentation']
  //   //     }
  //   // },
  //   bootCallback : function(fm, extraObj) {
  //       delete fm.commands.fullscreen;
  //       var title = document.title;
  //       fm.bind('open', function() {
  //           var path = '',
  //               cwd  = fm.cwd();
  //           if (cwd) {
  //               path = fm.path(cwd.hash) || null;
  //           }
  //           document.title = path? path + ':' + title : title;
  //       }).bind('destroy', function() {
  //           document.title = title;
  //       });
  //   },
  //   height : '100%', // you can use '100%' to fit window height
  //   resizable: false,
  //   // managers : {
  //   //     newDialogId : {}
  //   // }
  // }

  var newDialogInstance = $('<div />', {id: newDialogId, class: 'w-100'})
  .html(fileExplorer)
  .dialog({
    modal: false,
    title: title,
    width: '75%',
    height: 450,
    dialogClass: 'window-container backdrop-filter-blur',
    classes: {
      'ui-dialog-titlebar' : 'window-top-bar p-0',
      'ui-dialog-content' : 'window-container-main bg-white p-0 overflow-hidden',
      'ui-dialog-title' : 'text-white ml-1',
      'ui-dialog-buttonset' : 'float-left' 
    },
    
    buttons: [
      {
        addClass: 'aw-dialog-titlebar-close',
        click: function( e ) {
            $(this).dialog('close');
        }
      },
      {
        addClass: 'aw-dialog-titlebar-min',
        click: function( e ) {
            return false;
        }
      },
      {
        addClass: 'aw-dialog-titlebar-max',
        click: function( e ) {
            $(this).parents('.window-container')
            .toggleClass('top-0 left-0 window-container-fullscreen');

            $(this).parents('.window-container')
            .children('.window-container-main')
            .toggleClass('window-container-main-fullscreen');
        }
      }
    ],

    create: function( event, ui ) {
      const this_parent = $(this).parent();
      const ui_dialog_buttonset = this_parent.find('.ui-dialog-buttonset');
      const ui_dialog_titlebar = this_parent.find('.ui-dialog-titlebar');

      ui_dialog_buttonset.prependTo(ui_dialog_titlebar);
      this_parent.find('.ui-dialog-titlebar').children('.ui-dialog-titlebar-close', ui).remove();
      this_parent.find('.ui-dialog-buttonpane').remove();
      dblclickFullScreen();
    },

    show: {
      effect: 'drop',
      direction: 'down',
      duration: 'fast'
    },

    hide: {
      effect: 'drop',
      direction: 'up',
      duration: 'fast'
    },

    close: function(){
      $(this).dialog('close');
      $(this).remove();
    },
  });

  return newDialogInstance;
}

function dblclickFullScreen(){
  $('.ui-dialog-titlebar').dblclick(function(){
    $(this).parents('.window-container')
    .toggleClass('top-0 left-0 window-container-fullscreen');

    $(this).parents('.window-container')
    .children('.window-container-main')
    .toggleClass('window-container-main-fullscreen');
  });
}