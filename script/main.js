/**
 * DROPDOWN REVOLUT
 * 
 * Ricreare la navbar di revolut (vedi grafiche allegate)
 * Focus è rendere funzionali i menu dropdown all’interno della navigazione principale
 * Importante l’uso di $(this)
 * Potete scegliere di usare il click() oppure mouseenter() /mouseleave() per mostrare / nascondere i dropdown menu
 * Modificare l’icona freccia nel selettore della lingua all’hover (freccia giù / freccia su) usando fontawesome
 * Nella cartella img allegata trovate 2 grafiche per riprodurre la navbar e il logo
 *  
 */

$(document).ready(function(){
    // refs
    var itemDropdown = $('.menu-item.dropdown');
    var languages = $('.menu-item.dropdown-click');
    var dropdownMenu = $('.dropdown-menu');
    
    
    itemDropdown.mouseenter(function() {
        dropdownMenu.hide();
        $(this).children('.dropdown-menu').toggle();
    });

    itemDropdown.mouseleave(function() {
        $(this).children('.dropdown-menu').toggle();
    });

    languages.click(function() {
        $(this).children('.dropdown-menu').toggle();
    });

}); // End ready


