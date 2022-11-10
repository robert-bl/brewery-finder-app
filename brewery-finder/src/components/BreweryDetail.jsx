import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export default function BreweryDetail (props) {

    let navigate = useNavigate()
    let { id } = useParams()

    const [brewery, setBrewery] = useState()
    const [image, setImage] = useState('')

    useEffect(() => {

        let selectedBrewery = props.breweries.find(
            (brew) => brew.id === id
        )
        setBrewery(selectedBrewery)

        //pull first imagae from google search of brewery

        const getImages = async () => {
            const plusAdder = (inpt) => {
                let brewName = inpt
                while (brewName.includes(' ')) {brewName = brewName.replace(' ','+')}
                return brewName
                }
                let imageSearch = plusAdder(selectedBrewery.name)

            const imagesJSON = await axios.get(`https://api.serpwow.com/search?api_key=${process.env.REACT_APP_SERPWOW_KEY}&engine=google&search_type=images&q=${imageSearch}`)

            setImage(imagesJSON.data.image_results[0].image)
        }
        console.log(image)
        getImages()

    }, [id])




    return !brewery ? (
            <h1>error</h1>
        ) : (
        <div className="detail-wrapper">
            <div className="brewery-card">
                <div>
                    {
                    <img src={`${image}`} width='300' className="detail-image" alt='brewery image'/>
                    }
                </div>
                <div className="detail">
                    <h2>{brewery.name}</h2>
                    <p className="address">{brewery.street}</p>
                    <p className="address">{brewery.city}, {brewery.state}</p>
                    <p>{brewery.brewery_type} brewery</p>
                    <a href={brewery.website_url} target='_blank' className="website">Website</a>
                </div>
                <div className="button-wrapper">
                    <button className="back-button" onClick={() => navigate('/breweries')}>Back to List</button>
                </div>
            </div>
        </div>
        )
}