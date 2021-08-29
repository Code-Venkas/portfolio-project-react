import React from "react"
import Author from "../images/cartoonme.png"
const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
<div className="col-lg-6 col-xm-12">
    <div className="photo-wrap mb-5">
    <img className="author" src={Author} alt="author" />
    </div>
</div>
<div className="col-lg-6 col-xm-12">
    <h1 className="about-heading"> About Me </h1>
    <p>
        Salutations, my name is Mansur and I am a junior web developer. I graduate from Woz-U on August 8th 2021. My program length was 9 months with a focus on Full-Stack web development. In a previous life, I was a IT technician for six years where I was very customer focused and always triaged issues with a smile. I bring the same level of problem solving to the development field, whether working on a website or a business application. I do not plan on sticking to just Web Applications, as I want to become a good Programmer, no matter what language I find myself working in.
    </p>
    
</div>
            </div>
        </div>
    )
}

export default AboutMe


