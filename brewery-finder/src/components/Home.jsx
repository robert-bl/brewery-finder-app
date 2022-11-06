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
            <h2>Home</h2>
            <img src='https://images.axios.com/i4KQgT8WwpbWXWVCNX560y1DXiE=/328x0:1768x1080/1920x1440/2022/09/19/1663608635539.jpg' alt='brewery image' width='500' />
        </div>
    )
}