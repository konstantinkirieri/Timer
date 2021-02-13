import Base from './baseClass.js'

export default class Timer extends Base {
    constructor(){
        super(
            `<form id="initTimer">
            <h3>Таймер</h3>
                <label>
                    <span>Введите время (сек)</span>
                    <input type="number" name="second"> 
                </label>
                <input class="buttonForm" type="submit" value="СТАРТ">
                <input class="buttonForm" type="reset" value="ПАУЗА">
            </form>
            <div class="userTimer" id="userTimer">0</div>
            `,
            'initTimer'
        );
        this.userTime = 0;
        this.currentTime = 0;
        this.timer;
        this.timerEnd;
    }

    baseMethod(event){
        event.preventDefault();
        this.userTime = event.target.elements.second.value;
        this.userTime *= 1000;
        if(this.currentTime == 0) this.currentTime = this.userTime;
        if(this.currentTime > 0) {
            clearInterval(this.timer);
            clearTimeout(this.timerEnd);
            this.startTimer();
        };
    }

    startTimer(){
        const div = document.getElementById('userTimer');
        div.innerHTML = `${this.currentTime / 1000}`;

        this.timer = setInterval(() => {
            div.innerHTML = `${this.currentTime / 1000 -1}`
            this.currentTime -= 1000;
        }, 1000);
        this.timerEnd = setTimeout(() => {
            clearInterval(this.timer);
            div.innerHTML = '0';
        }, this.currentTime);
    }

    additionalMethod(event){
        event.preventDefault();
        clearInterval(this.timer);
        clearTimeout(this.timerEnd);
    }
}