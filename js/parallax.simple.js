/**
 * Javascript source file
 * @file        paralax.simple.js
 * @description
 *
 * @package     GrandMebel
 * @category
 * @copyright   2014, Vadim Pshentsov. All Rights Reserved.
 * @license     http://www.apache.org/licenses/LICENSE-2.0 Apache License, Version 2.0
 * @author      Vadim Pshentsov <pshentsoff@gmail.com>
 * @link        http://pshentsoff.ru Author's homepage
 * @link        http://blog.pshentsoff.ru Author's blog
 *
 * @created     26.03.15
 */

$(function(){
    var $window = $(window);
    $('section[data-type="parallax"]').each(function() {
        var $section = $(this);
        var parallax = function() {
            var offset = $section.offset().top;
            var height = $section.data('height') ? $section.data('height') : 0;
            var scrollTop = $window.scrollTop()-height;
            var yPos = -(offset - scrollTop)/$section.data('speed');
            var coords = 'center '+ yPos + 'px';
            $section.css('background-position', coords);
        };
        parallax();
        $window.on('scroll', function() {
            parallax();
        });
    });
});