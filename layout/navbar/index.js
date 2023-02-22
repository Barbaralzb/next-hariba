import styles from './navbar.module.css'

export default function Navbar({children}) {
    return (
    <div className={styles.container}>
        <div>
            <p className={styles.logo}>Hariba</p>
        </div>
        <div className={styles.nav}>
            <p className={styles.anchor}>Accueil</p>
            <p className={styles.anchor}>Boutique</p>
            <p className={styles.anchor}>Notre histoire</p>
            <p className={styles.anchor}>Nous contacter</p>
        </div>
        <div className={styles.profile}>
            <p>Mon compte</p>
            <button className={styles.button}>Panier</button>
        </div>
    </div>
    )
}