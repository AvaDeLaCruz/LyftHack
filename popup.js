document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    console.log(links);
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({ active: true, url: location });
            };
        })();
    }
});