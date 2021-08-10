import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaPython } from "react-icons/fa";
import { IoMdCloudOutline } from "react-icons/io";
import { FiDatabase } from "react-icons/fi";
import { FaRegChartBar } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";

const Skills = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center'}}>

            <div className="all_skills">
                <div>
                    <ul className="programming_skills_points">
                        <li className="programming_skills"><h1>Programming Skills</h1></li>
                        <li className="programming_skills"><HiOutlineDesktopComputer /> <b> Programming Languages:</b> Python, R, Java, JavaScript, C++, MATLAB</li>
                        <li className="programming_skills"><FaPython /> <b>Python libraries:</b> NumPy, Pandas, Scikit-Learn, TensorFlow, PyTorch, PySpark, BeautifulSoup</li>
                        <li className="programming_skills"><IoMdCloudOutline /> <b>Cloud Services:</b> Google Cloud Platform, Amazon AWS, Tencent Cloud</li>
                        <li className="programming_skills"><FiDatabase /> <b>Databases:</b> MySQL, Google Bigquery, MongoDB, Neo4j</li>
                        <li className="programming_skills"><FaRegChartBar /> <b>Data Visualization:</b> Matplotlib, ggplot2, Seaborn, D3.js, Bokeh, Dash</li>
                        <li className="programming_skills"><VscTools /> <b>Other tools:</b> Docker, Apache Airflow, Reactjs, LaTex</li>
                    </ul>
                </div>

                <div style={{marginTop: "30px"}}>
                    <ul className="language_skills">
                        <li className="languages"> <h1>Languages Speaking</h1> </li>
                        <li className="languages"> <b>Chinese</b> (Native): 欢迎来到我的个人网站！</li>
                        <li className="languages"> <b>English</b> (Proficient): Welcom to my personal website!</li>
                        <li className="languages"> <b>Japanese</b> (Advanced): こんにちは!　僕のウェブサイトへようこそ！</li>
                        <li className="languages"> <b>Korean</b> (Beginner): 안...녕...하...세...요...</li>
                    </ul>

                </div>

                <div style={{marginTop: "30px"}}>

                    <ul className="other_skills">
                        <li className="other_skills_point"> <h1>Other Skills</h1> </li>
                        <li className="other_skills_point"> I can collaberate with teammates as well as work independently to make accomplishments </li>
                        <li className="other_skills_point"> I am a fast learner who frequently learn and polish new skills</li>
                        <li className="other_skills_point"> I am willing to accept opinions and feedbacks from others</li>
                        <li className="other_skills_point"> I work hard for the goal that my team or I set</li>
                    </ul>

                </div>

            </div>
            
        </div>
    )
}

export default Skills