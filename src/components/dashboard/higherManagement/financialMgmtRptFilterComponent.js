import React from 'react';

const financialMgmtRptFilter = () => {
    return (
        <div className="col-md-12 padding-right-0" style={{ textAlign: "left"}}>
            <div className="col-md-3 dropdown">
                <button type = "button" className = "btn dropdown-toggle" id = "dropdownMenu1" data-toggle = "dropdown">
                    No of items
                    <span className = "caret"></span>
                </button>
                <ul className = "dropdown-menu" role = "menu" aria-labelledby = "dropdownMenu1">
                    <li role = "presentation">
                        <a role = "menuitem" name="One" tabindex = "-1" href = "#">One</a>
                    </li>
                    
                    <li role = "presentation">
                        <a role = "menuitem" name="Two" tabindex = "-1" href = "#">Two</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="Three" tabindex = "-1" href = "#">Three</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="Four" tabindex = "-1" href = "#">Four</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="Five" tabindex = "-1" href = "#">Five</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="Six" tabindex = "-1" href = "#">Six</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default financialMgmtRptFilter;