async function getWeather() {
    const apiKey = 'YOUR_API_KEY'
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");
  
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      document.getElementById('weather-result').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  }
  
  function displayWeather(data) {
    const { name, main, weather } = data;
    document.getElementById('weather-result').innerHTML = `
      <h2>${name}</h2>
      <p>Temperature: ${main.temp} °C</p>
      <p>Description: ${weather[0].description}</p>
    `;
  }
  
