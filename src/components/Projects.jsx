import React from 'react'

const Projects = () => {
    return (
        <div style={{display: 'flex',  justifyContent:'center'}}>

            <div className="projects">

                <div className="project_div">
                    <ul className="single_project">
                        <li className="project_point"> <a href="https://github.com/r3qin/CommonLit_Readability/tree/main/notebooks" target="_blank"><h1>Kaggle CommonLit Readability Competition</h1></a> </li>
                        <li className="project_point"> Cooperated with one teammate and created models to predict text readability </li>
                        <li className="project_point"> Attempted different approaches to preprocess natural language text data for higher accuracy </li>
                        <li className="project_point"> Used both self-defined RNN models and pretrained models such as Bert and RoBerta for text regression </li>
                        <li className="project_point"> Fine-tuned hyperparameters using k-fold cross validation </li>
                        <li className="project_point"> Accomplished competition with 0.463 root-mean-square error and ranked at 732 of 3682 teams </li>
                    </ul>
                </div>

                <div className="project_div">
                    <ul className="single_project">
                        <li className="project_point"> <a href="https://github.com/r3qin/Recommendation-System" target="_blank"><h1>Recommendation System (Columbia University)</h1></a> </li>
                        <li className="project_point"> Collaborated with two teammates and created a recommendation system for film audiences </li>
                        <li className="project_point"> Designed a hybrid system with collaborative filtering models, factorization machines, and deep learning models </li>
                        <li className="project_point"> Utilized tools: NumPy, PySpark, PyTorch, and Matplotlib </li>
                    </ul>
                </div>

                <div className="project_div">
                    <ul className="single_project">
                        <li className="project_point"> <a href="https://github.com/r3qin/bikesharing" target="_blank"><h1>Bike Sharing Analysis (Columbia Universtiy)</h1></a> </li>
                        <li className="project_point"> Led a group of three and conducted exploratory data analysis </li>
                        <li className="project_point"> Collected and transformed data for further analysis by R and packages such as dplyr </li>
                        <li className="project_point"> Created static and interactive statistical graphs with ggplot2 and D3.js </li>
                        <li className="project_point"> Fined-tuned hyperparameters using k-fold cross validation </li>
                        <li className="project_point"> Showcased analysis report using R markdown and bookdown </li>
                    </ul>
                </div>

                <div className="project_div">
                    <ul className="single_project">
                        <li className="project_point"> <a href="https://github.com/r3qin/Titanic-Challenge/blob/main/Titanic.ipynb" target="_blank"><h1>Kaggle Titanic Challenge</h1></a> </li>
                        <li className="project_point"> Analyzed data by creating statistical graphs to show relationship between variables and the target </li>
                        <li className="project_point"> Implemented machine learning algorithms: Logistic Regression, SVM, KNN, Random Forests, and MLP </li>
                        <li className="project_point"> Fine-tuned hyperparameters to achieve a higher accuracy </li>
                        <li className="project_point"> Achieved 78.7% test accuracy and ranked in top 13% </li>
                        <li className="project_point"> Python libraries utilized: NumPy, pandas, seaborn, and sikit-learn </li>
                    </ul>
                </div>

                <div className="project_div">
                    <ul className="single_project">
                        <li className="project_point"> <a href="https://github.com/r3qin/Digit-Recognizer/blob/main/Digit%20Recognizer.ipynb" target="_blank"><h1>Kaggle Digit Recognizer Challenge</h1></a> </li>
                        <li className="project_point"> Used convolutional neural network to identify digits in pictures </li>
                        <li className="project_point"> Fine-tuned hyperparameters to achieve a higher accuracy </li>
                        <li className="project_point"> Achieved 98.989% test accuracy </li>
                        <li className="project_point"> Tool utilized: NumPy, pandas, matplotlib, PyTorch </li>
                    </ul>
                </div>

                <div className="project_div">
                    <ul className="single_project">
                        <li className="project_point"> <a href="https://r3qin.github.io/Community_Contribution/A-brief-introduction-to-seaborn.html" target="_blank"><h1>A brief Introduction to Seaborn (Columbia University)</h1></a> </li>
                        <li className="project_point"> In the class, multiple statistical graphs were studied including histogram, scatterplot, box plot, and bar chart </li>
                        <li className="project_point"> Created examples so that students who are not familiar with seaborn can create graphs mentioned above </li>
                        <li className="project_point"> Used three languages: English, Chinese, and Japanese </li>
                    </ul>
                </div>

                <div className="project_div">
                    <ul className="single_project">
                        <li className="project_point"> <h1>DOTA 2 Game Prediction (UC San Diego)</h1> </li>
                        <li className="project_point"> Implemented machine learning algorithms: KNN, Logistic Regression, Random Forest, MLP, and Naïve Bayes </li>
                        <li className="project_point"> Proposed and adopted use of methods: data preprocessing, data visualization, and hypothesis testing </li>
                        <li className="project_point"> Managed fine-tuning parameters in Random Forest for higher testing accuracy</li>
                        <li className="project_point"> Cooperated with five team members and improved best testing accuracy of 0.599 using Bernoulli Naïve Bayes </li>
                        <li className="project_point"> Utilized tools such as NumPy, Pandas, Scikit-Learn, Seaborn </li>
                    </ul>
                </div>

                <div className="project_div">
                    <ul className="single_project">
                        <li className="project_point"> <a href="https://github.com/r3qin/Influence-of-Holidays-on-Crime-Rates/blob/master/FinalProject.ipynb" target="_blank"><h1>Influence of Holidays on Crime-Rates (UC San Diego)</h1></a> </li>
                        <li className="project_point"> Proposed and adopted use of methods: data preprocessing, data visualization, and hypothesis testing </li>
                        <li className="project_point"> Illustrated crime rates over past five years with bar charts created by Matplotlib</li>
                        <li className="project_point"> Led a team of six and trained team to conduct hypothesis testing by multiple methods </li>
                        <li className="project_point"> Concluded crime rates do not increase during holidays with Wilcoxon signed rank test </li>
                    </ul>
                </div>

            </div>
            
        </div>
    )
}

export default Projects
