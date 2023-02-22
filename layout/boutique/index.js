import styles from './boutique.module.css'
import Item from './Item'

export default function Boutique({listArticles}) {

    console.log('aca ya paso en el componente', listArticles[0].attributes)

    return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>Boutique</h2>
        </div>
        <div className={styles.cards}> 
         {listArticles.map((article) => {
                return (
                    <Item 
                        key={article.id}
                        srcImage={article.attributes.Image.data[0].attributes.url}
                        title={article.attributes.Title}
                        description={article.attributes.Description}
                        price={article.attributes.Price.PriceProduct}
                    />
                )
            })}
        </div>
    </div>
    )
}