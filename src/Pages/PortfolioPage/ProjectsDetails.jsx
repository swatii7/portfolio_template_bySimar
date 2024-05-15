import CustomHeading from "../../Components/CustomHeading/CustomHeading";
import { useParams } from 'react-router-dom';
import {projectDetailsArr } from '../../Data/Data'

export default function ProjectsDetails() {
    const { type } = useParams();

    return (
        <>
            <section className="sectionWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CustomHeading subHeading='Portfolio' heading='Portfolio details' customClass='text-center' imageClass='text-center justify-content-center' headingClass='text-uppercase' />
                        </div>
                    </div>
                </div>
            </section>
            {projectDetailsArr.map((details, idx) => (
                type === details.type && (
                    <section key={idx} className="portfolio_details_wrapper">
                        <div className="container">
                            <div className="row flex-column-reverse flex-lg-row align-items-center">
                                <div className="col-12 col-lg-6">
                                    <h3 className="portfolioDetailHeading font-jost fw-bold">{details.heading}</h3>
                                    <p className="font-jost mt-50 portfolioDetailDesc fw-medium">{details.firstPara}</p>
                                    <p className="font-jost portfolioDetailDesc fw-medium">{details.secondPara}</p>
                                </div>
                                <div className="col-12 col-lg-6 text-center text-lg-end">
                                    <img src={details.image} alt="project image" className="img-fluid mb-5 mb-lg-0 w-75" />
                                </div>
                            </div>
                            <div className="row modalImgContainer">
                                <div className="col-12 col-md-6 mb-4 mb-md-0">
                                    <div className="projectimageOverlay position-relative">
                                    <img src={details.projectImgOne} alt="image one" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                <div className="projectimageOverlay position-relative w-100">
                                    <img src={details.projectImgSecond} alt="image one" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            ))}

        </>

    )
}