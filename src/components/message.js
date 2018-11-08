import React from 'react';

const message = (props) => {
    return(
        <div className="oaerror warning" style={{marginTop: props.marginTop}}>
            <strong>{props.msg}</strong>
          </div>
    )
}

export default message;