const date = new Date();
const windSpeed = 8;
const temperature = 19;

document.getElementById("currentyear").innerHTML = '\u00A9' + date.getFullYear();
document.getElementById("lastModified").innerHTML = 'Last modified: ' + document.lastModified;

function calculateWindChill(temperature, windSpeed) {
    let windChill = 35.74 + (0.6216 * temperature) - (35.75 * windSpeed ** 0.16) + (0.4275 * temperature * windSpeed ** 0.16);
    return windChill;
}

if (temperature <= 50 && windSpeed > 3) {
    let windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").innerHTML += windChill;
}
else {
    document.getElementById("windChill").innerHTML += "N/A";
}