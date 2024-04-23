import { Button } from "react-bootstrap";
import './CustomButton.css'

export default function CustomButton({title, customClass, href}){
    return(
        <a className={`commonButton headerStyle position-relative overflow-hidden text-decoration-none text-white fw-medium font-jost ${`customClass`}`} href={href}>
            <span className="position-relative">
            {title}
            </span>
        </a>
    )
}