export default class Base {
    constructor (html, idForm, ) {
        this.html = html;
        this.idForm = idForm;
    }
    render(){
        const container = document.getElementById('container')

        container.innerHTML = '';
        
        container.insertAdjacentHTML('afterbegin', this.html);

        const form = document.getElementById(this.idForm);

        form.addEventListener('submit', this.baseMethod.bind(this));
        form.addEventListener('reset', this.additionalMethod.bind(this));
    }
}