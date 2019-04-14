import React from 'react';
import './Header.css';

const Header = props => (
    <div className="header">
        <div className="gameName">{props.children} </div>
        <div className="wins-losses">
        Current Score: {props.currentScore} High Score {props.highScore}
    </div>
    </div >
);

export default Header;