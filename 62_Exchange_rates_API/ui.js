class UI {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;

        this.outputFirst = document.getElementById('outputFirst');
        this.outputSecond = document.getElementById('outputSecond');
        this.outputResult = document.getElementById('outputResult');
    }

    changeFirstCurrency() {
        this.outputFirst.textContent = firstCurrency.options[firstCurrency.selectedIndex].textContent;
    }

    changeSecondCurrency() {
        this.outputSecond.textContent = secondCurrency.options[secondCurrency.selectedIndex].textContent;
    }

    changeResult(data) {
        this.outputResult.value = data;
    }
}