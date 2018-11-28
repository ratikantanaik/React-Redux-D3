import React from 'react';
import { Link } from 'react-router-dom';

const KPILink = (props) => {
    return(
        <div className="col-md-2">
            <Link to={props.to}>
                <div className={props.clsName}>
                    <p className="main-val">{props.val? props.val : 'N/A'}</p>
                    <p className="main-head">{props.linkName}</p>
                </div>
            </Link>
        </div>
    )
}

export default KPILink;