import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="py-5">Skills And Education</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon="laptop-code" size="3x" /></div>
                                <h3>Web Development</h3>
                                <div className="firstRow">
                                    <FontAwesomeIcon icon={["fab", "html5"]} size="3x" />
                                    <FontAwesomeIcon icon={["fab", "css3"]} size="3x"/>
                                    <FontAwesomeIcon icon={["fab", "js"]} size="3x"/>
                                </div>

                                <div className="secondRow">
                                    <FontAwesomeIcon icon={["fab", "bootstrap"]} size="3x"/>
                                    <FontAwesomeIcon icon={["fab", "react"]} size="3x"/>
                                    <FontAwesomeIcon icon={["fab", "node"]} size="3x"/>
                                </div>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col sm-6">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={["fas", "cogs"]} size="3x" /></div>
                                <h3>Problem Solving</h3>
                                <p>I find joy in solving various issues both in my professional and personal life.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-md-3 col sm-5">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={["fas", "hands-helping"]} size="3x" /></div>
                                <h3>Interpersonal</h3>
                                <p>I pride myself on being able to work with a variety of personalities and I owe that to my customer service background.</p>
                            </div>
                        </div>
                        {/*- */}
                        <div className="col-md-3 col sm-5">
                            <div className="box">
                                <div className="circle">
                                    <FontAwesomeIcon className="icon" icon={["fas", "book-reader"]} size="3x"/></div>
                                <h3>Education</h3>
                                <p>
                               Graduated Woz-U in August 2021
                               
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Skills
