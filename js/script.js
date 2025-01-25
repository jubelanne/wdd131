document.addEventListener("DOMContentLoaded", () => {
    const temp = 5; // °C
    const windSpeed = 15; // km/h
  
    const calculateWindChill = (t, ws) => {
      return 13.12 + 0.6215 * t - 11.37 * Math.pow(ws, 0.16) + 0.3965 * t * Math.pow(ws, 0.16);
    };
  
    const windChill = temp <= 10 && windSpeed > 4.8 ? calculateWindChill(temp, windSpeed).toFixed(1) + "°C" : "N/A";
    document.getElementById("wind-chill").textContent = windChill;
  
    document.getElementById("current-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = document.lastModified;
  });
  