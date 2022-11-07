import axios from "axios"
import { useEffect, useState } from "react"


export default function Home () {

    // const [image,setImage] = useState({})

    // useEffect(() => {

    //     const getImages = async () => {
    //         const imagesJSON = await axios.get('https://api.serpwow.com/search?api_key=85CFA47E3D544035AC46562E93904CFE&engine=google&search_type=images&q=bosque+brewing+co'
    //         )

    //         console.log(imagesJSON)
    //         setImage(imagesJSON.data.image_results[0].image)
    //     }
    //     console.log(image)
    //     getImages()
    // }, [])


    return (
        <div className="home">
            <h2>Find Craft Breweries In Your City</h2>
            <img src='https://images.squarespace-cdn.com/content/v1/5a6401f47131a5ca2455b41d/1650850323362-EXOCDA0OXQGM7SCSNVWE/160A8833.jpeg' alt='brewery image' />
        </div>
    )
}