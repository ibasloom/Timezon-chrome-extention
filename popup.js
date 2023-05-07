const timezonesElement = document.getElementById('timezones');

function getTimeString(offset) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const date = new Date(utc + (3600000 * offset));
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function updateTimes() {
    const timezones = {
        'USA': -4,
        'India': 5.5,
        'China': 8
    };

    let timezonesHTML = '<table>';
    for (const [key, value] of Object.entries(timezones)) {
        const timeZoneString = getTimeString(value);
        timezonesHTML += `<tr><td>${key}</td><td>${timeZoneString}</td></tr>`;
    }
    timezonesHTML += '</table>';
    timezonesElement.innerHTML = timezonesHTML;
}

document.addEventListener('DOMContentLoaded', function() {
    updateTimes();
    setInterval(updateTimes, 1000);
});
