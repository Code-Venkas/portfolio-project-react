import React from "react"
import Typed from "react-typed"


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Junior Web Developer and Reuben connisouer</h1>
                <Typed 
                className="typed-text"
                strings={[
                    'React',
                    'Bootstrap',
                    'JavaScript',
                    'Express',
                ]}
                typeSpeed={85}
                backDelay={70}
                backSpeed={90}
               
                loop />
                <a href ="#" className="btn-main-offer">Contact Me</a>
                

            
            </div>
        </div>
    )
}

export default Header
