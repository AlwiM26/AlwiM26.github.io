import { Link } from "react-router-dom";
import "./Home.css";
import ava from "../images/ava.jpg";
import resume from "../Resume_AlwiMuhammad.pdf";
import ProjectItems from "./ProjectItems";

function Home(props) {
  return (
    <div>
      <div className="hero" id="about">
        <div className="introsection">
          <p className="personalname">
            Hi👋, <br /> I'm Alwi Muhammad
            <a
              href="https://www.linkedin.com/in/alwimhd/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin btnsocial"></i>
            </a>
            <a
              href="https://github.com/AlwiM26"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github btnsocial"></i>
            </a>
            {/* <a href="https://medium.com/@AlwiM" target="_blank" rel="noreferrer"><i className="fab fa-medium-m btnsocial"></i></a> */}
          </p>
          <p className="job">Fresh graduate</p>
        </div>
        <img src={ava} alt="Profile" className="avatar" />
      </div>

      <div className="section">
        <p className="sectiontitle">aboutMe()</p>
        <p className="sectionparagraph">
          Hi! My name is Alwi Muhammad. I'm a fresh graduate with a bachelor
          degree in Information Technology. Skilled in computer science, Java,
          Javascript, Python, Flutter, and React native. I have high passion in
          mobile apps development and machine learning, and very interested in
          learning a new thing. Ability to work independently or as part of a
          team.
        </p>
        <a
          href={resume}
          download="Resume_AlwiMuhammad.pdf"
          className="btnresume"
        >
          Download Resume
        </a>
      </div>

      <div className="section" id="project">
        <p className="sectiontitle">projects()</p>

        {ProjectItems.map((project, projectId) => {
          return (
            <Link
              to={`/projectDetail/${project.pid}`}
              key={projectId}>
              <div className="containerproject">
                <img
                  src={project.projectCover}
                  alt="Project Cover"
                  className="projectcover"
                />
                <div className="projectdesc">
                  <p className="projectname">{project.projectName}</p>
                  <p className="sectionparagraph">{project.projectDesc}</p>
                  <p className="techtitle">Technologies :</p>
                  <div className="projectbottom">
                    <ul>
                      {project.projectTech.map((tech, techId) => {
                        return <li className="projecttech" key={techId}>{tech}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="section" id="contact">
        <p className="sectiontitle">contact()</p>
        <p className="emailtitle">
          Let's get in touch! <br /> feel free to reach out to me.
        </p>
        <h2>Email address :</h2>
        <a href="mailto:alwimhd01@gmail.com" className="emailbtn">
          alwimhd01@gmail.com
        </a>
        <h2>Phone :</h2>
        <p className="emailbtn">+62 - 823 85726160</p>
      </div>
    </div>
  );
}

export default Home;
