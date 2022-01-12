import styles from "./styles.module.css";
interface PropsType {
    amount: number
    onAmountChange: Function
    currency: string
}

const CryptoInput: React.FC<PropsType> = ({ amount, onAmountChange,currency}) => {

  return (
    <div className={styles.group}>
      <input type="text" value={amount} onChange={ev => onAmountChange(ev.target.value)} />
      <p>{currency}</p>
    </div>
  );
}
export default CryptoInput;