import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false
        };
    }
    render() {
        return (
            <div className="Contact">
                <img
                    src={this.props.avatar}
                    alt={this.props.name}
                    className="avatar"
                />
                <div className='status'>
                    <h4 className="name">{this.props.name}</h4>
                    <span className={this.state.online ? 'status-online' : 'status-offline'}>
                        </span>
                        <span onClick={event => {
                            const newFavorite = !this.state.online;
                            this.setState({ online: newFavorite })
                        }}>
                            {this.state.online ? 'online' : 'offline'}
                    </span>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};


export default Contact;