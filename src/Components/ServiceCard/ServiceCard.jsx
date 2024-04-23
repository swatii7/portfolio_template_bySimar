import './ServiceCard.css'

export default function ServiceCard({image, alt, heading, description}){
    return(
        <div className='text-center cardWrapper h-100'>
            <img src={image} alt={alt} className="img-fluid" />
            <div>
            <h3 className="fw-medium fs-4">{heading}</h3>
            <p className="fw-normal text-center font-jost">{description}</p>
            </div>
        </div>
    )
}