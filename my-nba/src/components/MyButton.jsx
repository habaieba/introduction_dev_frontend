import styles from "@/styles/MyButton.module.css";

export default function MyButton({ isConnected, handleOnClick }) {
  return (
    <div>
      <button
        className={isConnected ? styles.logoutButton : styles.loginButton}
        onClick={handleOnClick}
      >
        {isConnected ? "Se déconnecter" : "Se connecter"}
      </button>
    </div>
  );
}
