import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="containernotfound">
            <h1>404 ERR</h1>
            <h2>Sorry you've lost</h2>
            <Link to="/">Go back to home</Link>
        </div>
    );
}

export default NotFound;