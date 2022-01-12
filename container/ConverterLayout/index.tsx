import { useState, useEffect } from "react";
import CryptoInput from "../../components/CryptoInput";
import { currencyData, Rates } from "../../type";
import WalletLayout from "../WalletLayout";
import styles from "./styles.module.css";

const mockData : currencyData = {
  success: true,
  timestamp: 1619432343,
  base: "NEP",
  date: "2021-04-26",
  rates: {
    NEP: 1,
    BUSD: 3,
  },
};

function App() {
  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(1);
  const [currency1, setCurrency1] = useState<string>("NEP");
  const [currency2, setCurrency2] = useState<string>("BUSD");
  const [colorSwipe, setColorSwipe] = useState<boolean>(true)
  const [rates, setRates] = useState<string[] | Rates>([]);

  useEffect(() => {
    setRates(mockData.rates);
  }, []);

  useEffect(() => {
    if (!!rates) {
      const amountChange = () => {
        handleAmount1Change(1);
      };
      amountChange();
    }
  }, [rates]);

  function format(number: any) {
    return  parseFloat(number.toFixed(2)) ;
  }

  function handleAmount1Change(amount1: number) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1: string) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2: number) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2 : string) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setCurrency2(currency2);
  }
  function handleSwipe() {
    setColorSwipe(!colorSwipe)
    handleCurrency1Change(currency2);
    handleCurrency2Change(currency1);
  }

  return (
    <div className={colorSwipe ? styles.container1 : styles.container2}>
    <div className={colorSwipe ? styles.containerNEP : styles.containerBUSD}>
      <h1>Crypto Converter</h1>
      <CryptoInput
        onAmountChange={handleAmount1Change}
        amount={amount1}
        currency={currency1}
      />
       <button onClick={handleSwipe} className={styles.swipe}>swipe</button>
      <CryptoInput
        onAmountChange={handleAmount2Change}
        amount={amount2}
        currency={currency2}
      />
     
      <WalletLayout />
    </div>
    </div>
  );
}

export default App;
