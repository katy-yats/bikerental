/* async function convertCurrency() {
    const startCurrency = 'USD';
    const targetCurrency = document.querySelector('.currency-switch').value;
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
    const rates = await response.json();
    const rate = rates.rates[targetCurrency];
    for (const product of products) {
        product.convertedPrice1 = product.price1 * rate;
        product.convertedPrice2 = product.price2 * rate;
        product.convertedPrice3 = product.price3 * rate;
        product.convertedPrice4 = product.price4 * rate;
        products.convertedCurrency = targetCurrency;
    }
}

document.querySelector('.currency-switch')
    .addEventListener('onchange', async () => {
        await convertCurrency();
        renderProducts();
    }); */