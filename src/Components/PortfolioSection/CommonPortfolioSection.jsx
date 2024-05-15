import CustomHeading from "../CustomHeading/CustomHeading";
import './Portfolio.css'
import { portfolioArr } from "../../Data/Data";

export default function CommonPortfolio(){
    return(
        <>
        <CustomHeading subHeading='My Portfolio' heading='visit my portfolio' customClass='text-center' imageClass='text-center justify-content-center' headingClass='text-uppercase' />
        <div className="row projectDetailWrapper">
            {
                portfolioArr.map((item, index)=>
            <div className={item.className} key={index}>
                <img src={item.image} className="img-fluid projectImg w-100" alt="portfolio-image" />
                <div className="portfolioOverlayContainer position-absolute"></div>
                <div className="position-absolute projectContent">
                    <p className="text-white fw-normal font-jost">{item.name}</p>
                        <a href={item.pageLink} className="text-decoration-none text-white fw-semibold font-jost projectDesc">{item.desc}</a>
                </div>
            </div>
                )
            }
        </div>
        </>
    )
}