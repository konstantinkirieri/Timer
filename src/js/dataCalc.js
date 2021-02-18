import {DateTime} from 'luxon';
import Base from './baseClass.js'

export default class DataCalc extends Base {
    constructor(){
        super(
            `<form id="datacalc">
                <h3>Калькулятор дат</h3>
                <label for="">
                    <span>Введите первую дату</span>
                    <input type="date" name="firstDate">
                </label>
                <label for="">
                    <span>Введите первую дату</span>
                    <input type="date" name="secondDate">
                </label>
                <input class="buttonForm" type="submit"  value="РАССЧЕТАТЬ">
                <p class="textError" id="datacalc__result"></p>
            </form>`,
        'datacalc'
        );
        this.textError = 'Error';
        this.result;
        this.textResult;
        this.firstDate;
        this.secondDate;
    }

    baseMethod(event){
        event.preventDefault();
        let { firstDate, secondDate } = event.target.elements;

        this.firstDate = firstDate.value;
        this.secondDate = secondDate.value;

        if( this.firstDate && this.secondDate ) {
            this.diffDates();
        } else {
            this.errorDate();
        };
    }

    errorDate(){
        const dataCalcResult = document.getElementById('datacalc__result');

        dataCalcResult.innerHTML = '';
        dataCalcResult.insertAdjacentText('afterbegin', this.textError)
    }

    diffDates() {
        const dataCalcResult = document.getElementById('datacalc__result');

        this.firstDate = DateTime.fromISO(this.firstDate);
        this.secondDate = DateTime.fromISO(this.secondDate);

        if(this.firstDate > this.secondDate) this.secondDate = [this.firstDate, this.firstDate = this.secondDate][0];

        this.result = this.secondDate.diff(this.firstDate, ['years', 'months', 'days']);
        this.textResult = `Разница ${this.result.years} лет ${this.result.months} месяцев ${this.result.days} дней;`

        dataCalcResult.innerHTML = '';
        dataCalcResult.insertAdjacentText('afterbegin', this.textResult);
    }
}