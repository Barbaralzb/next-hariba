import Layout from '../../layout/layout'
import Boutique from 'layout/boutique'
import { URL } from 'lib/constants';

export default function Home({data}) {
    
    return (
        <Layout>
            <Boutique listArticles={data}/>
        </Layout>
    )
}

export async function getStaticProps(){

    const query = `
        query {
            listArticles {
                data {
                id,
                attributes {
                    Title,
                    Description,
                    Price {
                    PriceKilo,
                    PriceProduct
                    },
                    ExtraInformation {
                    PreferencesAlimentaires,
                    Flavor,
                    Color
                    }
                    Image {
                    data {
                        attributes {
                        url
                        }
                    }
                    }
                }
                }
            }
        }
    `

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query})  
    }

    const response = await fetch(`${URL}graphql`, 
        options
    )   
    const responseJson = await response.json()

    return {
        props : {
            data : responseJson.data.listArticles.data
        }
    }
}
