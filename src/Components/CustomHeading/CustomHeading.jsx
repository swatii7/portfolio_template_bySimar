import dotImg from '../../assets/CommonImages/orangeDot.png'

export default function CustomHeading({customClass, heading, subHeading, imageClass, headingClass }){
    return(
        <div className={`${customClass}`}>
             <div className={`d-flex align-items-start ms-2 pt-0 pt-md-5 ${imageClass}`}>
                                <img src={dotImg} alt="dot image" height={18} />
                                <p className="font-jost ms-2 fs-6">{subHeading}</p>
                            </div>
                            <h2 className={`font-jost ${headingClass}`}>
                               {heading}
                            </h2>
        </div>
    )
}