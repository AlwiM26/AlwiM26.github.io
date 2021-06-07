import './Content.css';
import ava from '../images/ava.jpg'
import covercikpuan from '../images/CikPuanCover.jpg';

function Content(props) {
    return (
        <div>

            <div className="hero" id="about">
                <div className="introsection">
                    <p className="personalname">
                        Hello👋, <br /> I'm Alwi Muhammad
                    <a href="https://www.linkedin.com/in/alwimhd/" target="_blank"><i className="fab fa-linkedin btnsocial"></i></a>
                        <a href="https://github.com/AlwiM26" target="_blank"><i className="fab fa-github btnsocial"></i></a>
                        {/* <a href="https://medium.com/@AlwiM" target="_blank"><i className="fab fa-medium-m btnsocial"></i></a> */}
                    </p>
                    <p className="job">
                        Software engineer | Fresh graduate
                </p>
                </div>
                <img src={ava} alt="Profile Picture" className="avatar" />
            </div>

            <div className="section">
                <p className="sectiontitle">aboutMe()</p>
                <p className="sectionparagraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ea quia a quas. Ut ipsum nam consectetur, nesciunt facilis dolorem nostrum non similique cupiditate, saepe voluptas dolor exercitationem repudiandae voluptatem!
                    Dignissimos iste qui impedit rerum nam, temporibus quos sed recusandae voluptas sit dicta culpa provident, voluptatem fugiat, commodi exercitationem. Facere perferendis maxime illum sint eius expedita ut voluptatem sit ipsam.
                    Pariatur dolores exercitationem nostrum excepturi voluptatum error molestiae reiciendis! Fugiat ipsa tempore asperiores atque earum aspernatur autem voluptas excepturi ipsum similique eos, debitis error dolore quae velit modi, placeat soluta?
                </p>
                <a href="#" className="btnresume">
                    Download Resume
                </a>
            </div>

            <div className="section" id="project">
                <p className="sectiontitle">projects()</p>
                <a href="#">
                    <div className="containerproject">
                        <img src={covercikpuan} alt="Project Cover" className="projectcover" />
                        <div className="projectdesc">
                            <p className="projectName">CikPuan</p>
                            <p className="sectionparagraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor sit nisi tenetur eius, natus aspernatur, earum saepe voluptatum cupiditate quae fugit pariatur dolorum assumenda consequatur repellendus. Repudiandae, harum quam.
                                Laborum explicabo nam, officia modi autem eos mollitia temporibus dolore vel maiores. Fugit reprehenderit dicta quaerat. Nihil aliquam, atque eum vero tenetur, autem cupiditate, modi officia quo fugiat impedit odio.
                                Sequi provident esse accusantium distinctio, sit earum omnis. Nihil architecto laudantium necessitatibus corporis, voluptatum laborum dolor asperiores rerum, dicta cumque nesciunt incidunt repudiandae tempore deserunt ut quam unde, ducimus iure.
                            </p>
                            <p className="techtitle">Technologies :</p>
                            <div className="projectbottom">
                                <ul>
                                    <li className="projecttech">Dart</li>
                                    <li className="projecttech">Flutter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>

                <a href="#">
                    <div className="containerproject">
                        <img src={covercikpuan} alt="Project Cover" className="projectcover" />
                        <div className="projectdesc">
                            <p className="projectName">CikPuan</p>
                            <p className="sectionparagraph">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor sit nisi tenetur eius, natus aspernatur, earum saepe voluptatum cupiditate quae fugit pariatur dolorum assumenda consequatur repellendus. Repudiandae, harum quam.
                                Laborum explicabo nam, officia modi autem eos mollitia temporibus dolore vel maiores. Fugit reprehenderit dicta quaerat. Nihil aliquam, atque eum vero tenetur, autem cupiditate, modi officia quo fugiat impedit odio.
                                Sequi provident esse accusantium distinctio, sit earum omnis. Nihil architecto laudantium necessitatibus corporis, voluptatum laborum dolor asperiores rerum, dicta cumque nesciunt incidunt repudiandae tempore deserunt ut quam unde, ducimus iure.
                            </p>
                            <p className="techtitle">Technologies :</p>
                            <div className="projectbottom">
                                <ul>
                                    <li className="projecttech">Dart</li>
                                    <li className="projecttech">Flutter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

            <div className="section" id="contact">
                <p className="sectiontitle">contact()</p>
                <p className="emailtitle">
                    Let's get in touch! <br /> feel free to reach out to me.
                </p>
                <h2>Email address :</h2>
                <a href="mailto:alwimhd01@gmail.com" className="emailbtn">alwimhd01@gmail.com</a>
                <h2>Phone :</h2>
                <p className="emailbtn">+62 - 823 85726160</p>
            </div>

        </div>
    );
}

export default Content;