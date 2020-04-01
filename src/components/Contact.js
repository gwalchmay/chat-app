import React from 'react';
import './Contact.css'
const online = true;

function Contact() {
    return (
        <contact className="Contact">
            <img
                src="https://www.disneyphile.fr/wp-content/uploads/2020/02/american-horror-story-macaulay-culkin-1920x1080.jpg"
                alt='Macaulay Culkin'
                className="avatar"
            />
            <div>
                <h4 className="name">Kevin McAllister</h4>

                <status className="status">
                    <div className="status-online"></div>
                    <p className="status-text">
                        {online ? "Online" : "Offline"}
                    </p>
                </status>
            </div>
        </contact>
    )
}

export default Contact;