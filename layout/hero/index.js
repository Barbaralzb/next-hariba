import Navbar from 'layout/navbar'
import styles from './hero.module.css'

export default function Hero({children}) {
    return (
    <div className={styles.container}>
        <Navbar />
        <div className={styles.hero}>
            <p>Hariba</p>
            <p>Artisans depuis 2020</p>
        </div>
    </div>
    )
}