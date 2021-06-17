import { useState } from "react";
import "./ProjectDetail.css";

function ProjectDetail(props) {
  const [openedModal, setOpenedModal] = useState(false);
  const [whichModal, setWhichModal] = useState(null);

  const handleModal = (val = null) => {
    setOpenedModal(!openedModal);
    setWhichModal(val);
  };

  const projectData = props.location.state;
  console.log(projectData);

  const { projectName, projectLink, projectDesc, projectTech, projectSSMain, projectSS } = projectData.project;

  return (
    <div>
      <div className="portfoliocontainer">
        <p className="projecttitle">{projectName}</p>
        <div className="linkcontainer">
          {projectLink.map((link, linkId) => {
            return (
              <a
                key={linkId}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="projectlink"
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <p className="techtitledetail">Technologies :</p>
        <div className="techContainer">
          {projectTech.map((tech, techId) => {
            return (
              <p className="techcontent" key={techId}>{tech}</p>
            );
          })}
        </div>
        <div className="containerss">
          <img
            src={projectSSMain}
            alt="Homescreen"
            className="imgappsf"
            onClick={() => handleModal(projectSSMain)}
          />
          <div className="containerssinner">
            {projectSS.map((ss, ssId) => {
              return (
                <img
                  src={ss}
                  key={ssId}
                  alt="ScreenShot"
                  className="imgapps"
                  onClick={() => handleModal(ss)}
                />
              );
            })}
          </div>
        </div>
        <p className="projectbio">{projectDesc}</p>
      </div>

      <div
        className={openedModal ? "ssmodalcontainer active" : "ssmodalcontainer"}
        onClick={() => handleModal()}
      >
        <img src={whichModal} alt="Homescreen" className="ssmodal" />
      </div>
    </div>
  );
}

export default ProjectDetail;
