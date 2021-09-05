import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';


const ContactMe = () => {


    return (
        <div id="contacts" className="contact">
            <div className="text-center">
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="hirebox">
                            <h2>Email</h2>
                            <div className="emailbox">
                             <SocialIcon url="mailto:mansurmsaleem@gmail.com" style={{ height: 65, width: 65 }} />
                            </div>
                        </div>
                    </div>

                    {/* - */}

                    <div className="col sm-6">
                        <div className="mediabox">
                            <div>
                                <h3>Social Media</h3>
                            </div>
                            <ul className="socialmedia">
                                <li><SocialIcon url="https://www.linkedin.com/in/mansur-saleem/" target="_blank" style={{ height: 65, width: 65 }} /></li>
                                <li><SocialIcon url="https://twitter.com/IamMansurSaleem" target="_blank" style={{ height: 65, width: 65 }} /></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>



    )
}

export default ContactMe
