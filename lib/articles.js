import { URL } from './constants'


export async function getArticlesData(){
    const query = `
        query {
            listArticles {
                data {
                attributes {
                    Title
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

    const response = await fetch(URL, 
        options
    )   
    const responseJson = await response.json()

    return (
        console.log(responseJson.data.listArticles.data),
        responseJson.data.listArticles.data
    )
}