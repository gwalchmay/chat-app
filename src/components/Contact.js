import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css'
const online = true;

function Contact(props) {
    return (
        <contact className="Contact">
            <img
                src= {props.avatar}
                alt={props.name}
                className="avatar"
            />
            <div>
                <h4 className="name">{props.name}</h4>
                <status className="status">
                    <div className={props.online ? "status-online" : "status-offline"}></div>
                    <p className="status-text">
                        {props.online ? "Online" : "Offline"}
                    </p>
                </status>
            </div>
        </contact>
    )
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  };


export default Contact;