import { useFetchGif } from "../hooks/useFetchGif"
import { GifItem } from "./index"



export const GifGrid = ( {category} ) => {

	const { images, isLoading } = useFetchGif( category )

	console.log( {isLoading} )

	return (
		<>
			<h3>{category}</h3>
			{
				isLoading && (<h2>Cargando...</h2>)
			}

			<div className="card-grid">
				{
					images.map( ( imagen ) => (
						<GifItem 
							key={imagen.id} 
							{ ...imagen }/>
					))
				}
			</div>
		</>
	)
}
