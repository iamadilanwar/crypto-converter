import styles from "./styles.module.css";
interface PropsType {
  amount: number;
  onAmountChange: Function;
  currency: string;
}

const CryptoInput: React.FC<PropsType> = ({
  amount,
  onAmountChange,
  currency,
}) => {
  return (
    <div className={styles.group}>
      <input
        value={amount}
        onChange={(e) => {
          const re = /^[0-9\b]+$/;
          if (e.target.value === '' || re.test(e.target.value)) {
            onAmountChange(e.target.value);
          }
       }}
      />
      <p>{currency}</p>
    </div>
  );
};
export default CryptoInput;
