var user = 'Matthew';
var salutation = 'Hello, ';
var greeting = salutation + user + '! Here are some customer reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

var price = 100,
    renewals = 75,
    priceEl = document.getElementById('price'),
    renewalsEl = document.getElementById('renewals');

    priceEl.textContent = price.toFixed(2);
    renewalsEl.textContent = renewals.toFixed(2);