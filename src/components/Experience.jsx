import React from 'react'
import tencent from '../images/Tencent-Logo.png'
import cu_logo from '../images/cu_logo.png'
import unilever from '../images/unilever.png'

const Experience = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center'}}>

            <div className="Experience">

                <div className="Intern">

                    <div><img src={tencent} className="tencent_logo" /> </div>
                    <div className="intern_text">
                        {/* <div><h1>Work Experience</h1></div> */}
                        <div><h1>Tencent America LLC</h1></div>
                        <div><h3>Data Scientist Intern</h3></div>
                        <div>
                            <ul>
                                <li>Built machine learning models and utilized data analysis to deliver scalable solutions to business problems</li>
                                <li>Gathered data, performed statistical analysis, and conducted A/B experiments</li>
                                <li>Established scalable, efficient, automated processes for large-scale data analysis and machine learning model development</li>
                                <li>Researched new machine learning approaches</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="research">

                    <div className="research_text">
                        <div><h1>Columbia University</h1></div>
                        <div><h3>Research Assistant</h3></div>
                        <div>
                            <ul>
                                <li>Analyzed traffic volume data of over 1000 segments of streets in New York City from 2015 to 2019</li>
                                <li>Utilized Bokeh and Dash to create data visualization including interactive statistical graphs and web applications</li>
                                <li>Built a generative adversarial network for data augmentation to handle 20% missing data</li>
                                <li>Trained a graph convolutional network to predict traffic volume of certain segments of streets in New York City</li>
                            </ul>
                        </div>
                    </div>
                    <div style={{marginTop: "100px", marginLeft: "100px"}}><img src={cu_logo} className="cu_logo" /> </div>

                </div>

                <div className="industry">

                    <div style={{marginLeft: "50px"}}><img src={unilever} className="unilever_logo" /> </div>
                    <div className="industry_text">
                        {/* <div><h1>Work Experience</h1></div> */}
                        <div><h1>Unilever</h1></div>
                        <div><h3>Industry Project Team Member</h3></div>
                        <div>
                            <ul>
                                <li>Managed to clean data over 500 thousand observations</li>
                                <li>Researched different approaches to make predictions on unknown data including deep learning and reinforcement learning models</li>
                                <li>Illustrated model performance by data visualization with RShiny</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default Experience
