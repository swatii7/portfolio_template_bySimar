import './style.css'
import { Breadcrumb } from 'react-bootstrap'

export default function CommonHeroSection({activePage, heading}){
    return(
        <section className="sectionWrapper position-relative">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center breadcrumbWrapper">
                            <Breadcrumb className='text-center d-flex justify-content-center'>
                                <Breadcrumb.Item href="/" className='itemOne'>Home</Breadcrumb.Item>
                                <Breadcrumb.Item active>{activePage}</Breadcrumb.Item>
                            </Breadcrumb>
                            <h2 className='font-jost'>{heading}</h2>
                        </div>
                    </div>
                </div>
            </section>
    )
}