document.addEventListener("DOMContentLoaded", () => {
  // Static weather data
  const temp = 5; // °C
  const windSpeed = 15; // km/h

  // Calculate wind chill using formula
  const calculateWindChill = (t, ws) => {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(ws, 0.16) + 0.3965 * t * Math.pow(ws, 0.16);
  };

  // Check if conditions are met and display wind chill
  const windChill =
    temp <= 10 && windSpeed > 4.8 ? calculateWindChill(temp, windSpeed).toFixed(1) + "°C" : "N/A";
  document.getElementById("wind-chill").textContent = windChill;

  // Update footer with current year and last modified date
  document.getElementById("current-year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
});
