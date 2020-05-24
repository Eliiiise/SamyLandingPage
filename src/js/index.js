import '../css/app.scss';
import Timer from './timer';

class App {
    constructor () {
        this.initApp();
    }

    initApp () {
        new Timer();
    }
}

new App();

