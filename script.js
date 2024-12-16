
async function fetchCryptoTicker() {
    const tickerContent = document.getElementById("ticker-content");
    if(!tickerContent) return; // Jos sivulla ei ole tickeriä
    try {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,cardano,ripple,solana,polkadot,binancecoin,dogecoin,shiba-inu,uniswap,litecoin&vs_currencies=usd");
        const data = await response.json();
        tickerContent.innerHTML = `
            <img src="https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png" width="16"/> Bitcoin: $${data.bitcoin.usd} |
            <img src="https://assets.coingecko.com/coins/images/279/thumb/ethereum.png" width="16"/> Ethereum: $${data.ethereum.usd} |
            <img src="https://assets.coingecko.com/coins/images/975/thumb/cardano.png" width="16"/> Cardano: $${data.cardano.usd} |
            <img src="https://assets.coingecko.com/coins/images/44/thumb/xrp.png" width="16"/> XRP: $${data.ripple.usd} |
            <img src="https://assets.coingecko.com/coins/images/4128/thumb/solana.png" width="16"/> Solana: $${data.solana.usd} |
            <img src="https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png" width="16"/> Polkadot: $${data.polkadot.usd} |
            <img src="https://assets.coingecko.com/coins/images/825/thumb/binance-coin-logo.png" width="16"/> Binance Coin: $${data.binancecoin.usd} |
            <img src="https://assets.coingecko.com/coins/images/5/thumb/dogecoin.png" width="16"/> Dogecoin: $${data.dogecoin.usd} |
            <img src="https://assets.coingecko.com/coins/images/11939/thumb/shiba.png" width="16"/> Shiba Inu: $${data["shiba-inu"].usd} |
            <img src="https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png" width="16"/> Uniswap: $${data.uniswap.usd} |
            <img src="https://assets.coingecko.com/coins/images/2/thumb/litecoin.png" width="16"/> Litecoin: $${data.litecoin.usd}
        `;
    } catch (error) {
        tickerContent.innerText = "Unable to fetch cryptocurrency data.";
    }
}

function fetchExchangeRates() {
    const exchangeContainer = document.getElementById('exchange-rates');
    const fromCurrencySelect = document.getElementById("from-currency");
    const toCurrencySelect = document.getElementById("to-currency");
    const convertButton = document.getElementById("convert-button");
    if(!fromCurrencySelect || !toCurrencySelect || !convertButton) return; // Ei valuutanvaihtoa tällä sivulla

    const sampleRates = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.0,
        CAD: 1.25,
        AUD: 1.35,
        CHF: 0.92,
        CNY: 6.45,
        SEK: 8.70,
        NZD: 1.43,
        INR: 74.10,
        RUB: 75.20,
        ZAR: 15.25,
        BRL: 5.2,
        SGD: 1.35,
        HKD: 7.8,
        NOK: 8.6,
        MXN: 20.3
    };

    for (const currency in sampleRates) {
        const optionFrom = document.createElement("option");
        optionFrom.value = currency;
        optionFrom.text = currency;
        fromCurrencySelect.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = currency;
        optionTo.text = currency;
        toCurrencySelect.appendChild(optionTo);
    }

    convertButton.addEventListener("click", () => {
        const amount = parseFloat(document.getElementById("amount").value);
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;
        const resultContainer = document.getElementById("conversion-results");

        if (isNaN(amount) || !fromCurrency || !toCurrency) {
            resultContainer.innerHTML = "<p>Please enter a valid amount and select both currencies.</p>";
            return;
        }

        const fromRate = sampleRates[fromCurrency];
        const toRate = sampleRates[toCurrency];
        const convertedAmount = (amount / fromRate) * toRate;

        resultContainer.innerHTML = `<p>${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}</p>`;
    });
}

function setupClocks() {
    function initializeClock(clockId, offset) {
        const clock = document.getElementById(clockId);
        if(!clock) return;
        const hourHand = clock.querySelector('.hour');
        const minuteHand = clock.querySelector('.minute');
        const secondHand = clock.querySelector('.second');

        function updateClock() {
            const now = new Date();
            const utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
            const localTime = new Date(utc.getTime() + offset * 3600000);

            const hours = localTime.getHours() % 12;
            const minutes = localTime.getMinutes();
            const seconds = localTime.getSeconds();

            hourHand.style.transform = `rotate(${(hours + minutes / 60) * 30}deg)`;
            minuteHand.style.transform = `rotate(${(minutes + seconds / 60) * 6}deg)`;
            secondHand.style.transform = `rotate(${seconds * 6}deg)`;
        }

        setInterval(updateClock, 1000);
        updateClock();
    }

    initializeClock('clock1', 0);   
    initializeClock('clock2', -5);  
    initializeClock('clock3', 1);  
    initializeClock('clock4', 9);  
}


function calculate(value) {
    const display = document.getElementById("calc-display");
    if(!display) return;
    if (value === "=") {
        try {
            display.value = eval(display.value) || "";
        } catch {
            display.value = "Error";
        }
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    const display = document.getElementById("calc-display");
    if(display) display.value = "";
}

window.onload = function() {
    setupClocks();
    fetchExchangeRates();
    fetchCryptoTicker();
    setInterval(fetchCryptoTicker, 60000); 
};
