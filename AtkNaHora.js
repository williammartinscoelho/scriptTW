function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();

    if (sec < 10) {
        sec = '0' + sec;
    }

    if (min < 10) {
        min = '0' + min;
    }
    
    if (hour < 10) {
        hour = '0' + hour;
    }

    return `${hour}:${min}:${sec}`;
}

//HORA ATUAL
function getTimeNow() {
    return timeConverter(Timing.getCurrentServerTime() / 1e3);
}

//HORA QUE VAI BATER O ATK
function getHoraAtk() {
    return $('.relative_time').text().substr(8);
}

//var time = prompt("Hora que vai bater o ATK", 'xx:xx:xx'); 
var time = '00:04:28'

setInterval(
    function () {
        //console.log(time, compareTime(getHoraAtk(), time), getHoraAtk());
        if (getTimeNow() == time) {
            $($('#troop_confirm_go')[0]).click();
        }
    }, 100
)
