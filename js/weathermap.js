const clockEl = document.getElementById('clock');
const calendarDateEl = document.getElementById('calendar-date');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

setInterval(() => {
    const time = new Date();
    const currentMonth = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursInMilitaryTime = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';

    clockEl.innerHTML = hoursInMilitaryTime + ':' + minutes + ' ' + `<span id="am-pm">${ampm}</span>`;
    calendarDateEl.innerHTML = days[day] + ', ' + date + ' ' + month[currentMonth];
}, 1000);


navigator.geolocation.getCurrentPosition((success) => {
    let {latitude, longitude} = success.coords;

    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${API key}`).then(res => {
        // handle response
    });
});
