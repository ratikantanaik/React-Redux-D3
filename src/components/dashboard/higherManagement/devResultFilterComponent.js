import React from 'react';

const devResultFilter = (props) => {
        let styleCursor = {
            cursor: 'pointer'
        }

        return(
            <div className="col-md-12 padding-right-0 padding-left-0">
            <div className="col-md-6" style={{ textAlign: "left", marginLeft: "-15px"}}>
                <div className = "dropdown">
                    <button type = "button" className = "btn dropdown-toggle" style={{width: "122px"}} data-toggle = "dropdown">
                        {props.selectedTypeOfResult}
                        <span className = "caret"></span>
                    </button>
                    <ul className = "dropdown-menu" role = "menu" style={{minWidth: '122px'}}>
                        <li role = "presentation">
                            <a role = "menuitem" name="Outcome" onClick={props.onChangeTypeOfResult} style={styleCursor} >Outcome</a>
                        </li>
                        <li role = "presentation">
                            <a role = "menuitem" name="Output" onClick={props.onChangeTypeOfResult} style={styleCursor}>Output</a>
                        </li>
                    
                        <li role = "presentation">
                           <a role = "menuitem" name="Impact" onClick={props.onChangeTypeOfResult} style={styleCursor}>
                               Impact
                           </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-2 padding-left-0">
                <div className = "dropdown" style={{ textAlign: "right", minWidth: "120px", marginLeft: "-20px"}}>
                    <button type = "button" className = "btn dropdown-toggle" style={{width: "120px"}} data-toggle = "dropdown">
                        {props.selectedFiscalYear}
                        <span className = "caret"></span>
                    </button>
                    <ul className = "dropdown-menu" role = "menu" style={{minWidth: "120px"}}>
                     <li role = "presentation">
                         <a role = "menuitem" name="2012" onClick={props.onChangeFiscalYear} style={styleCursor}>2012</a>
                     </li>

                     <li role = "presentation">
                         <a role = "menuitem" name="2013" onClick={props.onChangeFiscalYear} style={styleCursor}>2013</a>
                     </li>

                     <li role = "presentation">
                         <a role = "menuitem" name="2014" onClick={props.onChangeFiscalYear} style={styleCursor}>2014</a>
                     </li>

                     <li role = "presentation">
                         <a role = "menuitem" name="2015" onClick={props.onChangeFiscalYear} style={styleCursor}>2015</a>
                     </li>

                     <li role = "presentation">
                         <a role = "menuitem" name="2016" onClick={props.onChangeFiscalYear} style={styleCursor}>2016</a>
                     </li>
                        <li role = "presentation">
                            <a role = "menuitem" name="2017" onClick={props.onChangeFiscalYear} style={styleCursor}>2017</a>
                        </li>

                        <li role = "presentation">
                            <a role = "menuitem" name="2018" onClick={props.onChangeFiscalYear} style={styleCursor}>2018</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        )
}

export default devResultFilter;