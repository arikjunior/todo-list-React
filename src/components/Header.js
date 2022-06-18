import React from 'react';
import moment from 'moment'
const dateTime = new Date();



const Header = () => {
    return (
        <div className="header">
            <h1>Daftar Belanja</h1>
            <p>{moment(dateTime).format('ll')}</p>
        </div>
    );
};

export default Header;