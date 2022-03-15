<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>weirdOS</title>
    <link rel="stylesheet" href="lib/css/main.css">
    <link rel="stylesheet" href="lib/css/taskbar.css">
    <link rel="stylesheet" href="lib/css/desktop-buttons.css">
    <link rel="stylesheet" href="lib/css/start-menu.css">
    <link rel="stylesheet" href="lib/css/window-styles.css">
    <link rel="stylesheet" href="lib/css/messenger.css">
    <link rel="stylesheet" href="lib/css/web-browser.css">
    <link rel="stylesheet" href="lib/css/scrollbar.css">
    <link rel="stylesheet" href="lib/css/ui-dialog.css">
    <link rel="stylesheet" href="lib/jQuery/jquery-ui-1.12.1/jquery-ui.css">
    <link rel="stylesheet" href="lib/fontawesome/all.min.css">
    <link rel="stylesheet" href="lib/elFinder/css/elfinder.min.css">
    <link rel="stylesheet" href="lib/elFinder/css/theme.css">
    <link rel="stylesheet" href="lib/elFinder/themes/elFinder.themes/css/elfinder.theme.min.css">
    <!-- <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/smoothness/jquery-ui.css"> -->
    <!-- link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" -->
</head>

<body class="overflow-hidden">

<?php
//  $background_image = 'img/wallpapers/spiderman-far-from-home.jpg';
 $background_image = 'img/wallpapers/default.jpg';
 $background_prop = 'center center / cover no-repeat fixed';
?>

<div id="onload" class="w-100 h-100 d-flex align-items-center justify-content-center tresD-effect">
    <i class="fas fa-circle-notch fa-spin text-dark font-size-x-large"></i>
</div>

<div class="launcher w-100 h-100" id="launcher" style="display: none">
  <div class="start-menu-body">
      <?php for($i = 0; $i <= 10; $i++){ ?>
          <div class="launcher-icon-square">
              <i class="fas fa-question-circle fa-2x"></i>
              <span class="text-white text-shadow d-block">Some Icon App</span>
          </div>
      <?php } ?>
  </div>
    <div class="w-100 h-100 tresD-effect"></div>
</div>

<div id="dialog-explorer" class="w-100" style="display: none;"></div>

<div class="main-container" style="background: url('<?php echo $background_image ?>') <?php echo $background_prop ?>">

    <button id="toggle-admin-menu" style="display: none;"></button>
    <div id="admin-panel" style="display: none;"></div>

    <div id="desktop" style="display: none;">

        <?php include_once ('desktop-buttons.php'); ?>
        <?php
            // for($i = 1; $i <= 10; $i++){
            //     echo '<div class="column-grid overflow-hidden" id="column-id-'.$i.'">';
            //     echo '</div>';
            // }
        ?>

        <!-- div class="desktop-button-placeholder"></div -->

    </div>
    <!--    TASKBAR     -->
    <?php include_once ('messenger.php') ?>
    <?php include_once ('web-browser.php') ?>
    <?php include_once ('taskbar.php') ?>
</div>
<script src="lib/jQuery/jquery-3.4.1.min.js"></script>
<script src="lib/jQuery/jquery-ui.min.js"></script>
<!-- <script src="lib/jQuery/jquery-ui-1.12.1/jquery-ui.js"></script> -->
<!-- <script src="lib/jQuery/jquery.mobile-1.4.5.min.js"></script> -->
<script src="lib/popper/popper.min.js"></script>
<script src="lib/tippyjs/tippy-bundle.umd.min.js"></script>
<script src="lib/fontawesome/all.min.js"></script>
<script data-main="./lib/elFinder/main.js" src="lib/elFinder/js/require.min.js"></script>

<script src="lib/js/main.js"></script>
<script src="lib/js/dialogWindow.js"></script>
<script src="lib/js/moment.min.js"></script>
<!-- <script src="lib/js/liveTime.js"></script> -->
<script src="lib/js/taskbar.js"></script>
<script src="lib/js/web-browser.js"></script>
<script src="lib/js/desktop-buttons.js"></script>
</body>
</html>