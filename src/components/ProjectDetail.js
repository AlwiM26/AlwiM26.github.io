import React, { useState } from "react";

import "./ProjectDetail.css";
import cp1 from "../images/CikPuan/CikPuan1.png";
import cp2 from "../images/CikPuan/CikPuan2.png";
import cp3 from "../images/CikPuan/CikPuan3.png";
import cp4 from "../images/CikPuan/CikPuan4.png";
import cp5 from "../images/CikPuan/CikPuan5.png";
import cp6 from "../images/CikPuan/CikPuan6.png";
import cp7 from "../images/CikPuan/CikPuan7.png";

function ProjectDetail(props) {
  const [openedModal, setOpenedModal] = useState(false);
  const [whichModal, setWhichModal] = useState(null);

  const handleModal = (val = cp1) => {
    setOpenedModal(!openedModal);
    setWhichModal(val);
  };

  return (
    <div>
      <div className="portfoliocontainer">
        <p className="projecttitle">CikPuan</p>
        <div className="linkcontainer">
          <a
            href="https://github.com/AlwiM26"
            target="_blank"
            rel="noreferrer"
            className="projectlink"
          >
            Github
          </a>
        </div>
        <p className="techtitledetail">Technologies :</p>
        <p className="techcontent">Dart, Flutter</p>
        <div className="containerss">
          <img
            src={cp1}
            alt="Homescreen"
            className="imgappsf"
            onClick={() => handleModal(cp1)}
          />
          <div className="containerssinner">
            <img
              src={cp2}
              alt="Homescreen"
              className="imgapps"
              onClick={() => handleModal(cp2)}
            />
            <img
              src={cp3}
              alt="Homescreen"
              className="imgapps"
              onClick={() => handleModal(cp3)}
            />
            <img
              src={cp4}
              alt="Homescreen"
              className="imgapps"
              onClick={() => handleModal(cp4)}
            />
            <img
              src={cp5}
              alt="Homescreen"
              className="imgapps"
              onClick={() => handleModal(cp5)}
            />
            <img
              src={cp6}
              alt="Homescreen"
              className="imgapps"
              onClick={() => handleModal(cp6)}
            />
            <img
              src={cp7}
              alt="Homescreen"
              className="imgapps"
              onClick={() => handleModal(cp7)}
            />
          </div>
        </div>
        <p className="projectbio">
          Cik Puan is an android-based application developed by Politeknik
          Caltex Riau in collaboration with the Pekanbaru City Government to
          check and trace covid 19 cases in Pekanbaru. This application also has
          other features, including: Covid-19 Check, Early Warning Destination,
          Covid-19 Education and Hospital Information.
        </p>
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
