function readStringFromFileAtPath(fileName) {
    var request = new XMLHttpRequest();
    request.open("GET", fileName, false);
    request.send(null);
    var returnValue = request.responseText;

    return returnValue;
}

var text = readStringFromFileAtPath( "README.md" );

var converter = new showdown.Converter(),
    html      = converter.makeHtml(text);

parsed = $.parseHTML(html);

$(document).ready(function(){
  $('.main').html(parsed);
});
