import styles from "@/styles/MyButton.module.css";

export default function MyButton({ isConnected, handleClick }) {
  return (
    <div>
      <button
        className={isConnected ? styles.buttonLogout : styles.buttonLogin}
        onClick={handleClick}
      >
        {isConnected ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}
