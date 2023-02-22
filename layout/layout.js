import Footer from './footer'
import Hero from './hero'
import styles from './layout.module.css'

export default function Layout({children}) {
    return (
    <div className={styles.container}>
        <Hero />
        {children}
        <Footer />
    </div>
    )
}