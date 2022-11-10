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
            <a href='https://en.wikipedia.org/wiki/Samuel_Johnson' target='_blank' className="link"> <h2 className="home-header">“There is nothing which has yet been contrived by man by which so much happiness is produced as by a good tavern or inn.” -Samuel Johnson</h2></a>
        </div>
    )
}