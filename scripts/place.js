const date = new Date();
const windSpeed = 8;
const temperature = 19;

function calculateWindChill(temperature, windSpeed) {
    let windChill = 35.74 + (0.6216 * temperature) - (35.75 * windSpeed ** 0.16) + (0.4275 * temperature * windSpeed ** 0.16);
    return windChill;
}

document.getElementById("temperature").innerHTML += temperature + "° F";
document.getElementById("windSpeed").innerHTML += windSpeed + " mph";

if (temperature <= 50 && windSpeed > 3) {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").innerHTML += windChill + "° F";
}
else {
    document.getElementById("windChill").innerHTML += "N/A";
}

document.getElementById("currentyear").innerHTML = '\u00A9' + date.getFullYear();
document.getElementById("lastModified").innerHTML = 'Last modified: ' + document.lastModified;