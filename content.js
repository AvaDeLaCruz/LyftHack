document.getElementsByClassName('Z0LcW')[0].addEventListener("mouseover", function () {
  document.getElementsByClassName('Z0LcW')[0].style.color = "#EA0B8C";
  document.getElementsByClassName('Z0LcW')[0].title = "Click here to request your ride!";

});

document.getElementsByClassName('Z0LcW')[0].addEventListener("mouseout", function () {
  document.getElementsByClassName('Z0LcW')[0].style.color = "black";
});



document.getElementsByClassName('Z0LcW')[0].addEventListener('click', function () {
  window.location.href = "https://www.lyft.com/fare-estimate";

});
