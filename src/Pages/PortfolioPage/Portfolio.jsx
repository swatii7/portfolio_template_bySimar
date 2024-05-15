import './Portfolio.css'
import CommonPortfolio from '../../Components/PortfolioSection/CommonPortfolioSection'

export default function Portfolio(){
    return(
        <section className="pageWrapper">
            <div className="container">
                <div className="row">
                    <CommonPortfolio />
                </div>
            </div>
        </section>
    )
}