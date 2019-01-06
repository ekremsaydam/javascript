// Elementleri seçme
const amount = document.getElementById('amount');
const firstCurrency = document.getElementById('firstCurrency');
const secondCurrency = document.getElementById('secondCurrency');
const currency = new Currency('USD', 'TRY');
const ui = new UI(firstCurrency, secondCurrency);

eventListeners();

function eventListeners() {
    amount.addEventListener('input', exchangeCurrency);

    firstCurrency.onchange = function(e) {
        currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
        ui.changeFirstCurrency();
    };

    secondCurrency.onchange = function(e) {
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
        ui.changeSecondCurrency();
    };
}

function exchangeCurrency() {
    currency.changeAmount(amount.value);
    currency.exchange()
        .then(result => ui.changeResult(result))
        .catch(err => alert(err));
}