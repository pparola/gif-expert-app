import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGif = ( category ) => {

	const [Images, setImages] = useState([])
	const [IsLoading, setIsLoading] = useState(true)

	const getImages = async () => {
		const newImages = await getGifs(category)
		setImages(newImages)
        setIsLoading(false)
	}
	
	useEffect( () => {
		getImages(category)
	},[])


    return { 
        images : Images,
        isLoading : IsLoading
    }
    
}
