import React from 'react';


const backdrop = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.75)'
}

const Backdrop = props => <div style={backdrop}></div>;

