import React from 'react'
import cu from '../images/cu.jpg'
import ucsd from '../images/ucsd.jpg'

const Education = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center'}}>

            <div style={{ display: "grid",  gridTemplateRows: "1fr 1fr" }}> 

                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}} className="first_edu">
                    <div className="cu_photo_div" style={{display: 'flex',  justifyContent:'center'}}><img src={cu} className="cu_photo"></img></div>


                    <div className="cu_text_div" style={{display: 'flex',  justifyContent:'center'}}>
                        <ul className="cu_text">
                            <li><b>Columbia University</b> (Aug 2020 - Present)</li>
                            <li><b>Master of Science in Data Science</b></li>
                            <li><b>GPA:</b> 4.0 / 4.0</li>
                            <li><b>Coursework:</b> Exploratory Data Analysis and Visualization, Introduction to Databases, Algorithms for Data Science, Applied Deep Learning, Personalization Theory, Reinforcement Learning</li>
                        </ul>
                    </div>
                </div>

                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}} className="second_edu">

                    <div className="ucsd_text_div" style={{display: 'flex',  justifyContent:'center'}}>
                        <ul className="ucsd_text">
                            <li><b>UC San Diego</b> (Sep 2016 - Jun 2020)</li>
                            <li><b>Bachelor of Science in Applied Mathematics</b></li>
                            <li><b>GPA:</b> 3.87 / 4.00</li>
                            <li><b>Honors:</b> Cum Laude, Provost’s Honors, Japanese National Honor Society</li>
                            <li><b>Coursework:</b> Machine Learning, Data Structures, Programming in Java, Probability and Statistics, Stochastic Processes, Linear Algebra, Data Science in Practice, Data Analysis and Inference, Computational Statistics, Combinatorics</li>
                        </ul>
                    </div>


                    <div className="ucsd_photo_div" style={{display: 'flex',  justifyContent:'center'}}><img src={ucsd} className="ucsd_photo"></img></div>
                </div>
 
            </div> 
            
        </div>
    )
}

export default Education
