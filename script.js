
// script.js

const apiKey = '3bec9feefc4ab379de78d57f9d519cec'; // Replace with your OpenWeatherMap API key
const fetchButton = document.getElementById('fetchData');
const cityInput = document.getElementById('cityInput');
const resultDiv = document.getElementById('result');

// Fetch weather data from API
fetchButton.addEventListener('click', async () => {
  const city = cityInput.value.trim(); // Trim input to remove extra spaces
  if (!city) {
    resultDiv.innerText = 'Please enter a city name.';
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('City not found');

    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    resultDiv.innerText = `Error: ${error.message}`;
  }
});

// Display weather data in a formatted way
function displayWeatherData(data) {
  resultDiv.innerHTML = `
    <p><strong>City:</strong> ${data.name}</p>
    <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
    <p><strong>Weather:</strong> ${data.weather[0].description}</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
  `;
}

