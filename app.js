function currentTime() {

    var currTime = new Date();
    
    var currentHour = currTime.getHours();
    var currentMinute = currTime.getMinutes();
    var currentSecond = currTime.getSeconds();

    currentHour = checkLen(currentHour);
    currentMinute = checkLen(currentMinute);
    currentSecond = checkLen(currentSecond);

    document.querySelector('.current-hour').innerHTML = currentHour;
    document.querySelector('.current-minute').innerHTML = currentMinute;
    document.querySelector('.current-second').innerHTML = currentSecond;

    var intervel = setTimeout(currentTime, 500);

}

function checkLen(len) {

    if(len < 10) {

        len = "0" + len;

    }

    return len;

}