import React from 'react';
import './Contact.css'

const users = [
    {
        name: 'Robert Reyes',
        avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
        online: false
    },
    {
        name: 'Nellie Caldwell',
        avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
        online: true
    },
    {
        name: 'Vernon Mason',
        avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
        online: true
    },
    {
        name: 'Erica Hunt',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: false
    },
    {
        name: 'Juanita Phillips',
        avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
        online: true
    }
];

const ContactList = () => (
    users.map(element =>
        <div className="Contact">
            <img
                src={element.avatar}
                alt={element.name}
                className="avatar"
            />
            <div>
                <h4 className="name">{element.name}</h4>
                <div className="status">
                    <div className={element.online ? "status-online" : "status-offline"}></div>
                    <p className="status-text">
                        {element.online ? "Online" : "Offline"}
                    </p>
                </div>
            </div>
        </div>
    )
);

export default ContactList;