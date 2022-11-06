import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export default function BreweryDetail (props) {

    let { id } = useParams()

    const [brewery, setBrewery] = useState()
    const [image, setImage] = useState('')

    useEffect(() => {

        console.log(props.breweries)

        console.log(id)
        let selectedBrewery = props.breweries.find(
            (brew) => brew.id === id
        )
        console.log(selectedBrewery)
        setBrewery(selectedBrewery)

        setImage('https://images.axios.com/i4KQgT8WwpbWXWVCNX560y1DXiE=/328x0:1768x1080/1920x1440/2022/09/19/1663608635539.jpg')


    }, [props.breweries, id])

    useEffect(() => {
        console.log(brewery)
    }, [brewery])



    return !brewery ? (
            <h1>error</h1>
        ) : (
        <div className="brewery-card">
            <img src={`${image}`} width='400' />
            <h2>{brewery.name}</h2>
            <p>{brewery.street} {brewery.city}, {brewery.state} {brewery.postal_code}</p>
            <p>{brewery.brewery_type} brewery</p>
            <a href={brewery.website_url} target='_blank'>Website</a>
        </div>
        )
}