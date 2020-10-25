import '../css/app.scss';
import Timer from './timer';
import Smooth from "./Smooth";
import ButtonCtrl from "./button/buttonCtrl";

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
        new Timer();
        new Smooth();
        this.button = new ButtonCtrl(document.querySelector('.button-js'));
        this.button2 = new ButtonCtrl(document.querySelector('.button2-js'));
    }
}

new App();

