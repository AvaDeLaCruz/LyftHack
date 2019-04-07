var name = document.getElementsByClassName('Z0LcW')[0].innerHTML;

document.getElementsByClassName('Z0LcW')[0].addEventListener("mouseover", function () {
  document.getElementsByClassName('Z0LcW')[0].style.color = "#EA0B8C";

});

document.getElementsByClassName('Z0LcW')[0].addEventListener("mouseout", function () {
  document.getElementsByClassName('Z0LcW')[0].style.color = "black";
});



document.getElementsByClassName('Z0LcW')[0].addEventListener('click', function () {
    document.body.innerHTML = `<html>
    <head>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4/jquery.min.js"></script>
        <script type="text/javascript" src="https://fancybox.net/js/fancybox/jquery.fancybox-1.3.1.pack.js"></script>
        <link rel="stylesheet" type="text/css" href="https://fancybox.net/js/fancybox/jquery.fancybox-1.3.1.css" media="screen" />
        <script>
            $(document).ready(function() {

                /* This is basic - uses default settings */


                $("a.iframe").fancybox({
                    'transitionIn'  :   'elastic', //Used for animation, delete if not needed
                    'transitionOut' :   'elastic', //Used for animation, delete if not needed
                    'speedIn'       :   600,  //Used for animation, delete if not needed
                    'speedOut'      :   200, //Used for animation, delete if not needed
                    'overlayShow'   :   false, //Used for animation, delete if not needed
                    'width'         :   650, //Set your width
                    'height'        :   500 //Set your height
                });

            });
        </script>
    </head>
    <body>
        <a class="iframe" href="https://www.lyft.com/fare-estimate">Click to open fancy box</a>
    </body>
</html>`;
});
