class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицироват будильник. Параметр id не передан')
        }
        if (this.alarmCollection.some(item => item.id === id)) {
            console.error('Будильник с таки id уже существует');
            return;
        } else {
            this.alarmCollection.push({time, callback, id});
        }
    }

    removeClock(id) {
        let findId = this.alarmCollection.find(item => item.id === id);
        let index = this.alarmCollection.indexOf(findId);
        if (findId) {
            this.alarmCollection.splice(index, 1);
            return true;
        } else {
            return false;
        }
    }

    getCurrentFormattedTime() { 
        let date = new Date();
        return String(date.getHours()) + ":" + String(date.getMinutes());
    }

    start() {
        let checkAlarm = checkClock.bind(this); 
        function checkClock(alarm) {
            if(alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback();
            }
        }
        if (this.timerId === undefined) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkAlarm(item)), 1000);
        }
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId === null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(item => console.log(item.id + " " + item.time));
    }

    clearAlarms() {
        this.stop;
        this.alarmCollection = [];
    }
}

function testCase() {
    let alarmСlock = new AlarmClock();
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    alarmСlock.addClock(String(hours + ":" + minutes), () => console.log("Первый будильник"), 1);
    alarmСlock.addClock(String(hours + ":" + (minutes + 1)), () => {console.log("Второй будильник"); alarmСlock.removeClock(2)}, 2);
    alarmСlock.addClock(String(hours + ":" + (minutes + 2)), () => {
        console.log("Третий будильник");
        alarmСlock.clearAlarms();
        alarmСlock.printAlarms()
    }, 3);
    alarmСlock.printAlarms();
    alarmСlock.start();
}