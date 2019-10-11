/*global fetch*/
// 
const key = "$2a$10$9Q3FcsJi06VL856epPTxluO.qJoICCBGIyCKUWUGVLus6YMk7sV3G";
const url = "https://www.potterapi.com/v1/sortingHat?q=" + key;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
    	console.log(json);
	});

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("data-include");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("data-include");
          includeHTML();
          // document.getElementById("home").classList.add('active');
          // document.getElementById("menu").classList.remove('active');
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

//changing selected menu items
//document.getElementById("weatherSubmit").addEventListener("click", function(event) {
//});