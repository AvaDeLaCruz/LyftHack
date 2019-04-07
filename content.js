var addressText;

if(window.location.hostname == "www.google.com"){

  addressText = document.getElementsByClassName('Z0LcW')[0].innerHTML;


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

}

if(window.location.hostname == "www.lyft.com"){
  document.getElementById("destinationInput").value = addressText;


}
