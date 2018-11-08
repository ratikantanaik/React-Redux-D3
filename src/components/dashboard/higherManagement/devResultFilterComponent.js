import React from 'react';

const devResultFilter = (props) => {
    return (
        <div className="col-md-12 padding-right-0" style={{ textAlign: "left"}}>
            <div className="col-md-3 padding-left-0">
                <div className = "dropdown">
                    <button type = "button" className = "btn dropdown-toggle" data-toggle = "dropdown">
                        Type of Result
                        <span className = "caret"></span>
                    </button>
                    <ul className = "dropdown-menu" role = "menu">
                        <li role = "presentation">
                            <a role = "menuitem" name="Outcome" onClick={props.onChangeTypeOfResult} tabindex = "-1" href = "#">Outcome</a>
                        </li>
                        
                        <li role = "presentation">
                            <a role = "menuitem" name="Output" onClick={props.onChangeTypeOfResult} tabindex = "-1" href = "#">Output</a>
                        </li>
                        
                        <li role = "presentation">
                            <a role = "menuitem" name="Impact" onClick={props.onChangeTypeOfResult} tabindex = "-1" href = "#">
                                Impact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"></span>
                    </div>
                    <input type="text" className="form-control" placeholder="Section ID"/>
                </div>
            </div>
            <div className="col-md-3">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"></span>
                    </div>
                    <input type="text" className="form-control" placeholder="COI ID"/>
                </div>
            </div>
            <div className="col-md-3 dropdown">
                <button type = "button" className = "btn dropdown-toggle" data-toggle = "dropdown">
                    Fiscal Year
                    <span className = "caret"></span>
                </button>
                <ul className = "dropdown-menu" role = "menu">
                    <li role = "presentation">
                        <a role = "menuitem" name="2010" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2010</a>
                    </li>
                    
                    <li role = "presentation">
                        <a role = "menuitem" name="2011" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2011</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="2012" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2012</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="2013" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2013</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="2014" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2014</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="2015" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2015</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="2016" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2016</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="2017" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2017</a>
                    </li>

                    <li role = "presentation">
                        <a role = "menuitem" name="2018" onClick={props.onChangeFiscalYear} tabindex = "-1" href = "#">2018</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default devResultFilter;