$(document).ready(function() {
    // Define a callback function to be executed once the key is loaded
    function startApp() {
        // Your other code that relies on the API key being loaded goes here
    }

    // Load the key.js file and call the startApp function once it's loaded
    $.getScript("js/key.js", startApp);
});

// Set the city for which you want to get the weather
        var city = 'Medie';

        // Construct the API URL
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + 'WEATHER_API_KEY';

        // Make the AJAX request to the API
        $.ajax({
            url: apiUrl,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                // Get the temperature in Celsius
                var tempCelsius = Math.round(data.main.temp - 273.15);

                // Get the weather description
                var weatherDesc = data.weather[0].description;

                // Get the weather icon URL
                var weatherIconUrl = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

                // Construct the HTML for the weather display
                var weatherHtml = '<h1>Current Weather for ' + city + '</h1>';
                weatherHtml += '<p>' + tempCelsius + '&deg;C</p>';
                weatherHtml += '<p>' + weatherDesc + '</p>';
                weatherHtml += '<img src="' + weatherIconUrl + '">';

// Display the weather HTML on the page
                $('#weather').html(weatherHtml);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Display an error message if the AJAX request fails
                $('#weather').html('<p>Could not retrieve weather data.</p>');
            }
        });



