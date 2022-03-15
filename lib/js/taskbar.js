$(document).ready(function () {
    //MOSTRANDO/OCULTANDO EL MENU DE INICIO
    var container = $('#launcher');
    const titulo = '.taskbar-button-link';

    tippy(titulo);

    $('#launcher-button').click(function(){
        // if($(this).hasClass('open-main-menu')){
            container.toggle('pulsate');
        // } else if($(this).hasClass('close-main-menu')){
        //     container.hide('puff');
        // }
        // $(this).toggleClass('open-main-menu close-main-menu');
    });

    //OCULTANDO Y MOSTRANDO VENTANAS
    $('.window-display').on('click', function(){
        var this_btn = $(this);
        var this_btn_window = this_btn.data('target');
        // console.dir(this_btn);
        console.dir(this_btn_window);

        var offset = this_btn.offset();
        console.dir(offset);

        var window_display = $('#' + this_btn_window);
        // window_display.attr('data-left', window_display.offset().left);

        // window_display.is(':visible', function(){
        //     console.log($(this).attr('id') + ' Hello');
        // });

        window_display.toggle('drop',{
            direction: 'down'
        }, 'fast');

        // if(window_display.not(':visible')){
        //     $(this).css({ border: '1px solid #ff0000' });
        // } else {
        //     $(this).removeAttr('style');
        // }
        
        // window_display.animate({
        //     left: offset.left,
        // }, function(){
        //     $(this).toggle('drop', {
        //         direction: 'down'
        //     }, function(){
        //         if($(this).is(':visible')){
        //             console.dir($(this).attr('id') + ' bloh bloh bloh');
        //             $(this).animate({
        //                 right: 0
        //             });
        //         } else {
        //             $(this).attr('style', 'display: none');
        //         }
        //     }, 'fast');
        // });
    });

    //CAMBIAR LA BARRA DE TAREAS DE POSICIÓN
    var taskbar_toggle_position_btn = $('.taskbar-toggle-position-btn');

    taskbar_toggle_position_btn.on('click', function(){
        var desktop = $('#desktop');
        var taskbar = $('#taskbar');
        var messenger = $('#messenger');
        var taskbar_btn_layout = $('.taskbar-button');
        var this_position = $(this).data('position');
        var this_layout = $(this).data('layout');
        var reverse_layout = this_layout === 'w' ? 'h' : 'w';
        var display_block = this_layout === 'w' ? 'd-block' : 'float-left';

        if(this_position === 'top' || this_position === 'left'){
            taskbar.insertBefore('#desktop');
            if(this_position === 'top'){
                messenger.removeClass('bottom-taskbar-space right-taskbar-space h-100').addClass('top-taskbar-space window-hcalc-taskbar');
            } else if(this_position === 'left'){
                messenger.removeClass('top-taskbar-space bottom-taskbar-space right-taskbar-space window-hcalc-taskbar').addClass('h-100');
            }
        }else if(this_position === 'bottom' || this_position === 'right'){
            taskbar.insertAfter('#desktop');
            if(this_position === 'bottom'){
                messenger.removeClass('top-taskbar-space right-taskbar-space h-100').addClass('bottom-taskbar-space window-hcalc-taskbar')
            } else if(this_position === 'right'){
                messenger.removeClass('top-taskbar-space bottom-taskbar-space window-hcalc-taskbar h-100').addClass('h-100 right-taskbar-space')
            }
        }

        desktop.removeClass().addClass(display_block + ' ' + this_layout + '-100 main-desktop-' + reverse_layout + '-taskbar')
        taskbar.removeClass().addClass('main-taskbar ' + display_block + ' ' + this_layout + '-100 main-taskbar-' + this_position + '-position main-taskbar-' + this_layout);
        taskbar_btn_layout.removeClass().addClass('taskbar-button taskbar-button-' + this_layout);

        // main_taskbar.removeClass('main-taskbar-top-position main-taskbar-left-position main-taskbar-right-position main-taskbar-bottom-position main-taskbar-h main-taskbar-v').addClass('main-taskbar-' + this_position + '-position main-taskbar-' + this_space_position);

        console.log(display_block);
        console.log(this_position);
        console.log(this_layout);
        console.log(reverse_layout);
    });
});


//OCULTANDO EL MENÚ DE INICIO SOLTAR EL CLICK DEL MOUSE
// $(document).on('mouseup', function(e){
//     var container = $("#start-menu");
//     // if the target of the click isn't the container nor a descendant of the container
//     if(!container.is(e.target) && container.has(e.target).length === 0){
//         container.hide('drop', {
//             direction: 'up'
//         }, 'fast', function(){
//             $('#start-button').removeClass('close-main-menu').addClass('open-main-menu');
//         });
//     };
// });