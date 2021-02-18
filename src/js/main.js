import DataCalc from './dataCalc.js'
import Timer from './timer.js'
import './../style/style.css'

class App {
    constructor(idCalc, idTimer){
        this.idCalc = idCalc;
        this.idTimer = idTimer;
        this.checkCalc = false;
        this.checkTimer = false;
        this.addListener();
    }
    addListener(){
        const buttonDataCalc = document.getElementById(this.idCalc);
        const buttonTimer = document.getElementById(this.idTimer);

        buttonDataCalc.addEventListener('click', () => {
            if(this.checkCalc) return;
            this.checkCalc = true;
            this.checkTimer = false;
            let dataCalc = new DataCalc;
            dataCalc.render();
        });
        buttonTimer.addEventListener('click', () => {
            if(this.checkTimer) return;
            this.checkTimer = true;
            this.checkCalc = false;
            let timer = new Timer;
            timer.render();
        });
    }

}

new App('dataCalc', 'timer');