const verbose = true;
var verb = function(obj) {
    if (verbose) console.log(obj);
}
var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//check if an element is in the viewport
function isElementInViewport(elem) {
    var narrowing = 100;
    var $elem = $(elem);
    verb($elem);
    // Get the scroll position of the page.
    //var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $('html').scrollTop() + narrowing;
    var viewportBottom = viewportTop + $(window).height() - 2 * narrowing;

    // Get the position of the element on the page.
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    //verb("viewportTop: " + viewportTop + "viewportBottom: " + viewportBottom + "elemTop: " + elemTop + "elemBottom: " + elemBottom);
    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// If an element is in view, add the start class to it.
function checkAnimation() {
    var $elem = $('h1');
    $elem.each(function() {
        if ($(this).hasClass('slide')) return;
        if (isElementInViewport($(this))) {
            $(this).addClass('slide');
        }
    });
}

$(document).ready(
    function() {

        //color all the H1 elements white to hide them before their animations
        $('h1').addClass("white-text");

        //----------CODE TO RUN ANIMATIONS ONLY WHEN THEY COME INTO VIEW----------
        $(window).scroll(function() {
            checkAnimation();
        });

        //----------CODE TO RETRIEVE AND INSERT CONTENT FROM JSON RANDOMLY----------
        var json = null;
        $.ajax({
            'global': false,
            'url': 'js/home-content.json',
            'dataType': "json",
            'success': function(data) {
                data;
                $("#home-title").html(data.homeTitle[rand(0, data.homeTitle.length - 1)]);
                $("#home-content-1").html(data.homeContent1[rand(0, data.homeContent1.length - 1)]);
                $("#home-currently").html(data.homeCurrently)
            }
        });
    }
)