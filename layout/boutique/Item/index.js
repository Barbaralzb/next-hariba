import styles from './item.module.css'
import Image from 'next/image'
import { URL } from 'lib/constants'

export default function Item({srcImage, title, price}) {
    console.log('srcImage', srcImage)
    return (
    <div className={styles.container}>
        <div className={styles.containerImage}>
            <Image
            //src='https://images.unsplash.com/photo-1604762525953-2c80447cc4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80'
            src={`${URL}/${srcImage}`}
            alt="Picture of the author"
            fill
            className={styles.image}
            />
        </div>
        <div className={styles.text}>
            <p>{title}</p>
            <p>{price}</p>
        </div>
    </div>
    )
}