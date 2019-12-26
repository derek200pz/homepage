const verbose = true;
var verb = function(obj) {
    if (verbose) console.log(obj);
}
var rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
$(document).ready(
    function() {
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