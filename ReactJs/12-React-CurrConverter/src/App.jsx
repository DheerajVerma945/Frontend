import { useState } from 'react';
import './App.css';
import InputBox from './Components/InputBox';
import SelectContainer from './SelectContainer';
import countryList from './Components/country';

// Define conversion rates
const conversionRates = {
    AFN: 0.012, // Afghanistan
    ALL: 0.0096, // Albania
    DZD: 0.0074, // Algeria
    USD: 1.0, // United States
    EUR: 1.1, // Euro
    // Add other currencies as needed
};

function App() {
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [countedAmount, setCountedAmount] = useState(0);

    const handleAmountChange = (evt) => {
        const value = parseFloat(evt.target.value);
        if (!isNaN(value)) {
            setAmount(value);
        }
    };

    const handleCurrencyChange = (evt, type) => {
        const value = evt.target.value;
        if (type === 'from') {
            setFromCurrency(value);
        } else {
            setToCurrency(value);
        }
    };

    const swapValues = () => {
        setAmount(countedAmount);
        setCountedAmount(amount)
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const calculateConversion = () => {
        const fromRate = conversionRates[fromCurrency];
        const toRate = conversionRates[toCurrency];
        if (fromRate && toRate) {
            const convertedAmount = (amount / fromRate) * toRate;
            setCountedAmount(convertedAmount || 0);
        } else {
            setCountedAmount(0);
        }
    };

    return (
        <div className='container'>
            <h1>Currency Converter</h1>
            <InputBox
                type="from"
                label="Enter amount"
                change={handleAmountChange}
                value={amount}
            />

            <div className="select-container">
                <SelectContainer
                    selected={fromCurrency}
                    onChange={(e) => handleCurrencyChange(e, 'from')}
                />
                <button onClick={swapValues}>Swap</button>
                <SelectContainer
                    selected={toCurrency}
                    onChange={(e) => handleCurrencyChange(e, 'to')}
                />
            </div>
            <InputBox
                type="to"
                label="Calculated Amount"
                change={() => {}}
                disabled
                value={countedAmount}
            />
            <br />
            <button onClick={calculateConversion}>Calculate</button>
        </div>
    );
}

export default App;
