import { useWeb3React } from "@web3-react/core";
import { injected } from "../../components/Wallet";
import styles from "./styles.module.css";

function WalletLayout() {
  const { active, account, chainId, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div>
      {active ? (
        <div className={styles.container}>
          <p>Wallet Connected ✅ </p>
          <div className={styles.containerDetails}>
            <p>
              <b>Chain Id:</b> {chainId}
            </p>
            <p>
              <b>Wallet:</b> {account}
            </p>
          </div>
          <button onClick={disconnect} className={styles.connected}>
            Disconnect
          </button>
        </div>
      ) : (
        <button onClick={connect} className={styles.disconnected}>
          Connect to MetaMask
        </button>
      )}
    </div>
  );
}
export default WalletLayout;
