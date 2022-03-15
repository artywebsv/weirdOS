<?php

$path = 'lib/elFinder/files/user/default/';
$hash_path = 'user/default/';
$escritorio = $path . 'escritorio';
$ficheros  = scandir($escritorio);
// $ficheros  = scandir($escritorio, 1);

// echo $escritorio;
// $actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
// echo $actual_link . '<br /><br />';
sort($ficheros);

$escritorio_url = $hash_path . 'escritorio';

$volumeId = 'l1_';
$hash = $volumeId . rtrim(strtr(base64_encode($escritorio_url), '+/=', '-_.'), '.');

foreach($ficheros as $id=>$fichero){
  
  if($fichero != '.' && $fichero != '..' && $fichero != '.DS_Store'){
    $folder_path = $escritorio_url . '/' . $fichero;
    $volId = 'l1_';
    $hash_folder = $volId . rtrim(strtr(base64_encode($folder_path), '+/=', '-_.'), '.');

    echo '
      <div class="desktop-button dialog-window d-flex align-items-center justify-content-center" data-aw-dialog-window="explorer" data-aw-dialog-window-name="'. $fichero .'" data-aw-dialog-window-dir="' . $hash_folder . '" id="sortable-'. $id .'">
        <div class="button-container">
          <a href="javascript:void(0)" class="desktop-button-link">
            <i class="fas fa-folder"></i>
          </a>
          <div class="desktop-button-name text-white text-shadow">'. $fichero .'</div>
        </div>
      </div>
    ';
  }

}
 
// print_r($ficheros1);
// print_r($ficheros);
?>