import CommonHeroSection from "../../Components/CommonHeroSection/CommonHeroSection";
import CustomButton from "../../Components/CustomButton/CustomButton";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import { ServiceCardArr } from "../../Data/Data";
import './Services.css'

export default function Service(){
    return(
        <>
        <CommonHeroSection activePage='Services' heading='Services' />
        <section className="servicesWrapper">
                <div className="container">
                    <div className="row">
                        {ServiceCardArr.map((card, index) =>
                            <div className={card.columnClass} key={index}>
                                <ServiceCard image={card.imageSrc} alt={card.alt} heading={card.heading} description={card.description} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <section className='contactWrapper'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='contactContainer text-center'>
                                <p className='font-jost fw-normal text-white text-center'>Get Started</p>
                                <h2 className='text-white text-center fw-semibold'>Let’s do something new with me!</h2>
                                <div className="d-inline-block btnWrapper position-relative">
                                    <CustomButton title='Contact' href='/contactUs' />
                                </div>
                            </div>
                        </div>
                        </div>    
                </div>
            </section>
        </>
    )
}