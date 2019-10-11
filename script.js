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