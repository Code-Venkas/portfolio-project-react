import React from 'react'
import bookApp from '../images/Ionic Book App.png'
import portfolio from '../images/portfolio.png'
import githublogo from '../images/PNG/GitHubLargeBlack.png'
const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">GitHub Repo</h1>
                <div className="github">
                    <a href="https://github.com/Code-Venkas" rel="noreferrer" target="_blank"><img src={githublogo} /></a>
                </div>

                <div className="github">
                   
                </div>
            </div>
        </div>



    )
}

export default Portfolio
