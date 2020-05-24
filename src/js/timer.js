export default class Timer {
    constructor () {
        this.initEls();
        this.initEvents();
    }

    initEls () {
        this.$els = {
            days: document.querySelector(".days-js"),
            hours: document.querySelector(".hours-js"),
            minutes: document.querySelector(".minutes-js"),
            seconds: document.querySelector(".seconds-js"),
        };
        this.event_date = new Date("Jan 1 00:00:00 2021");
    }

    initEvents () {
        setInterval(() => {
            this.getTimer();
        }, 1000);
    }

    getTimer() {
        const current_date = new Date();
        const total_second = (this.event_date - current_date) / 1000;
        if (total_second < 0) { //le timer est terminé
        }
        else {
            this.getDifference(total_second);
        }
    }

    getDifference(total_second) {
        const days = Math.floor(total_second / (60 * 60 * 24));
        const hours = Math.floor((total_second - (days * 60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((total_second - ((days * 60 * 60 * 24 + hours * 60 * 60))) / 60);
        const seconds = Math.floor(total_second - ((days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)));
        this.$els.days.innerHTML = days;
        this.$els.hours.innerHTML = hours;
        this.$els.minutes.innerHTML = minutes;
        this.$els.seconds.innerHTML = seconds;
    }
}
