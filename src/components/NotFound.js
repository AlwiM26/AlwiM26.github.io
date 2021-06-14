import { Link } from 'react-router-dom';
import "./NotFound.css"

function NotFound() {
    return (
        <div className="containernotfound">
            <p className="notfoundtitle">404</p>
            <div className="containernotfounddetail">
                <p className="notfounddesc">Page Not Found <br /> The page you are looking for doesn't exist or has been moved</p>
                <Link to="/" className="btnhome">Go back to home</Link>
            </div>
        </div>
    );
}

export default NotFound;