<?php
// Create a blank image and add some text
$im = imagecreatefromjpeg('template.jpg');

$black = imagecolorallocate($im, 0x00, 0x00, 0x00);
$font_file = 'C:\xampp\htdocs\font.ttf';

function drawCenteredText($text, $posx)
{
	global $im, $font_file, $black;
	imagefttext($im, 24, 0, $posx - imagettfbbox(24, 0, $font_file, $text)[2] / 2, 775, $black, $font_file, $text);
}

drawCenteredText("Yes", 1195);
drawCenteredText(wordwrap($_GET["arg"], 40), 300);

header('Content-Type: image/jpeg');
imagejpeg($im);
imagedestroy($im);
