$(document).ready(function(){
    var web_browser = $('#web-browser');
    var browser_url = web_browser.attr('src');
    var url_bar_text = $('#url-bar-text');
    var protocolo_web = $('#protocolo-web');

    var url_array = browser_url.split('//');

    protocolo_web.val(url_array[0] + '//');

    url_bar_text.val(url_array[1]);

    url_bar_text.keyup(function(e){
        if(e.keyCode === 13){
            url = protocolo_web.val() + url_bar_text.val();
            web_browser.attr('src', url);
        }
    });

    $('#url-bar-button').on('click', function(){
        url = protocolo_web.val() + url_bar_text.val();
        web_browser.attr('src', url);
    });

    $('#browser-window').dblclick(function(){
        console.log('Doble Click');
        $(this).toggleClass('default-window-browser-container full-w-window-browser-container');
    });
});