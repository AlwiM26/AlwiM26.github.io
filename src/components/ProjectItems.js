import coverCikPuan from "../images/CikPuanCover.jpg";
import coverMIC from "../images/MICCover.jpg";
import cp1 from "../images/CikPuan/CikPuan1.png";
import cp2 from "../images/CikPuan/CikPuan2.png";
import cp3 from "../images/CikPuan/CikPuan3.png";
import cp4 from "../images/CikPuan/CikPuan4.png";
import cp5 from "../images/CikPuan/CikPuan5.png";
import cp6 from "../images/CikPuan/CikPuan6.png";
import cp7 from "../images/CikPuan/CikPuan7.png";
import mic1 from "../images/MIC/MIC1.png";
import mic2 from "../images/MIC/MIC2.png";
import mic3 from "../images/MIC/MIC3.png";
import mic4 from "../images/MIC/MIC4.png";
import mic5 from "../images/MIC/MIC5.png";
import mic6 from "../images/MIC/MIC6.png";
import mic7 from "../images/MIC/MIC7.png";


const ProjectItems = [
  {
    pid: "cikpuan",
    projectName: "CikPuan",
    ProjectCover: coverCikPuan,
    projectDesc:
      "Cik Puan is an android-based application developed by Politeknik Caltex Riau in collaboration with the Pekanbaru City Government to check and trace Covid 19 cases in Pekanbaru. This application also has other features, including: Covid-19 Check, Early Warning Destination, Covid-19 Education and Hospital Information.",
    projectRole: "I build the Early warning destination page that have 3 main feature, the first one is to check Covid-19 case based on the sub-district name, the second one is a function to automatically check and notify the user if the user is in 100 meters range from the Red Zone (Sub district that have more than 2 case of Covid-19), the last feature is a realtime maps that show all the sub district and show all the Covid-19 case.",
    projectTech: ["Dart", "Flutter"],
    projectSSMain: cp1,
    projectSS: [cp2, cp3, cp4, cp5, cp6, cp7],
    projectLink: [
      { name: "PPC Covid 19", url: "https://ppc-19.pekanbaru.go.id/" },
    ],
  },
  {
    pid: "MIC",
    projectName: "Musical Instrument Classifier",
    ProjectCover: coverMIC,
    projectDesc: "Musical Instrument Classifier is an Android-based apps to classify Indonesia traditional musical instrument using the sound of the musicla instrument, I build this apps for my final year project using Android (Java) as the client apps, Python Flask for the backend to convert the audio sent from the client apps into an image called Spectrogram, classify the image using Machine Learning algorithm called Convolutional Neural Network.",
    projectRole: "",
    projectTech: ["Java", "Python", "Tensorflow", "FFMPEG"],
    projectSSMain: mic1,
    projectSS: [mic2, mic3, mic4, mic5, mic6, mic7],
    projectLink: [
      { name: "Github", url: "https://github.com/AlwiM26/MusicalInstrumentClassifier" },
      { name: "Medium", url: "https://medium.com/@AlwiM" },
    ],
  },
];

export default ProjectItems;
