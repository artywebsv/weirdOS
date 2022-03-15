<div id="browser-window" class="draggable-window window-container default-window-browser-container backdrop-filter-blur" style="display: none">
    <div class="w-100 window-top-bar">
        <div class="window-bar-margin-buttons float-left w-auto h-100 d-flex align-items-center justify-content-center">
            <button class="window-button-top-bar text-white br-100 bg-blue float-left border-none">
                <i class="fas fa-window-maximize fa-xs d-flex align-items-center justify-content-center"></i>
            </button>
            <button class="window-button-top-bar text-white br-100 bg-yellow float-left border-none">
                <i class="fas fa-window-restore fa-xs d-flex align-items-center justify-content-center"></i>
            </button>
            <button class="window-button-top-bar text-white br-100 bg-red float-left border-none">
                <i class="fas fa-times fa-xs d-flex align-items-center justify-content-center"></i>
            </button>
        </div>
    </div>
    <div id="url-bar-container" class="">
        <select name="protocolo" id="protocolo-web">
            <option value="http://">http://</option>
            <option value="https://">https://</option>
        </select>
        <input type="text" name="url-bar-text" id="url-bar-text" class="">
        <button id="url-bar-button" class="bg-yellow text-white"><i class="fas fa-arrow-alt-circle-right"></i></button>
    </div>
    <div class="window-container-main window-browser-main bg-white">
        <iframe id="web-browser" src="https://es.search.yahoo.com/" class="w-100 h-100 border-none" frameborder="0"></iframe>
    </div>
</div>