/*global fetch*/

const url = "http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {	
    	console.log(json);
	});