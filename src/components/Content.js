import './Content.css';
import ava from '../images/ava.jpg'

function Content(props) {
    return (
        <div>
            <div className="hero" id="about">
                <div className="introsection">
                    <p className="personalName">
                        Hello👋, <br /> I'm Alwi Muhammad
                    <a href="https://www.linkedin.com/in/alwimhd/" target="_blank"><i className="fab fa-linkedin btnsocial"></i></a>
                        <a href="https://github.com/AlwiM26" target="_blank"><i className="fab fa-github btnsocial"></i></a>
                        <a href="https://medium.com/@AlwiM" target="_blank"><i className="fab fa-medium-m btnsocial"></i></a>
                    </p>
                    <p className="job">
                        Software engineer | Fresh graduate
                </p>
                </div>
                <img src={ava} alt="Profile Picture" className="avatar" />
            </div>

            <div className="section">
                <p className="sectionTitle">aboutMe()</p>
            </div>
        </div>
    );
}