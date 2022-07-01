
import {ImageCard} from "./ImageCard";
import {useFetchGifs} from "../hooks/useFetchGifs";

export const GifGrid = ({category}) => {

    const {images, isLoading } = useFetchGifs(category);

    // console.log({images, isLoading})

    return (
        <div>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }

            <div className="card-grid">
                {images.map((image) => (
                    <ImageCard key={image.id} {...image} />
                ))}
            </div>
        </div>
    )
}