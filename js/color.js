function change_color() {
    var input = $( "input" ).val();
    var hash = 0
    for (var i = 0; i < input.length; i++) {
        hash = (hash + input.charCodeAt(i))*7;
    }
    var result = hash.toString(16);
    var len = result.length;
    var hex1 = result.substring(len-6,len);
    var hex2 = result.substring(len-7,len-1);
    $(".double-bounce1").css("background-color", "#" + hex1);
    $(".double-bounce2").css("background-color", "#" + hex2);
}

$( document ).ready(function() {
});