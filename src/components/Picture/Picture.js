import React from 'react';
import './Picture.css';

const Picture = props => (
    <div className="pictures" onClick={() => props.clickedVariable(props.id)}>
        <div className="picture-holder">
            <img alt={props.character} src={props.pictureURL} />
        </div>
    </div>
);

export default Picture;