$(document).ready(function() {
    $('#weatherLocation').click(function() {
      const city = $('#location').val();
      $('#location').val("");
  
      let request = new XMLHttpRequest();
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a106239c326e4b268a05bd6c1d2f755d`;
  
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
  
      request.open("GET", url, true);
      request.send();
  
     const getElements = function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
        console.log('bottom of last function');
      }
    });
  });