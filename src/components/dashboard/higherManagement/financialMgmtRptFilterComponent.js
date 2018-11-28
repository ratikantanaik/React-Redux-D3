import React from 'react';

const financialMgmtRptFilter = (props) => {

    let styleCursor = {
        cursor: 'pointer'
    }

    return (
        <div className="col-md-12 padding-right-0" style={{ textAlign: "left", marginLeft: "-30px"}}>
            <div className="col-md-3 dropdown">
                <button type = "button" className = "btn dropdown-toggle" id = "dropdownMenu1" data-toggle = "dropdown">
                    No of items
                    <span className = "caret"></span>
                </button>
                <ul className = "dropdown-menu" role = "menu" aria-labelledby = "dropdownMenu1" style={{minWidth: "107px", marginLeft: "15px"}} onClick={props.onChangeOfFnMgmtRptItemCnt}>
                    <li role = "presentation">
                        <a role = "menuitem" name="1" style={styleCursor}>One</a>
                    </li>
                    
                    <li role = "presentation">
                        <a role = "menuitem" name="2" style={styleCursor}>Two</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="3" style={styleCursor}>Three</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="4" style={styleCursor}>Four</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="5" style={styleCursor}>Five</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="6" style={styleCursor}>Six</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default financialMgmtRptFilter;