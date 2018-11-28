import React from 'react';
import { connect } from 'react-redux';
import DevelopmentResultChart from '../../charts/DevResChart';
import FinancialManagementReportChart from '../../charts/FnMgmtRptChart';
import hmActions from '../../../store/actions/higherManagementActions';
import Kpis from './kpiComponent'; 
import DevResultFilter from '../higherManagement/devResultFilterComponent';
import FinancialMgmtRptFilter from '../higherManagement/financialMgmtRptFilterComponent';
import Constants from '../../../constants';

class HigherManagement extends React.Component {
    
    componentDidMount(){
        this.props.getHMData(this.props.hmParams);
    }

    render(){
        return(
            <div className="container-fluid padding-left-0">
                <div className="panel panel-default padding-left-0" style={{height: '700px', textAlign: 'center'}}>
                    <Kpis {...this.props.hmData} />
                    <div className="col-md-12">
                        <div className="col-md-6" id="fmrChart">
                            <FinancialMgmtRptFilter onChangeOfFnMgmtRptItemCnt={this.props.changeOfFnMgmtRptItemCnt} />
                            <FinancialManagementReportChart 
                                data={ this.props.hmData } 
                                width={ Constants.CHART_WIDTH } 
                                height={ Constants.CHART_HEIGHT }/>
                        </div>
                        <div className="col-md-6" id="devResChart">
                            <DevResultFilter 
                                selectedTypeOfResult={this.props.hmParams.selectedTypeOfResult} 
                                selectedFiscalYear={this.props.hmParams.selectedFiscalYear}
                                onChangeTypeOfResult={ this.props.changeTypeOfResult } 
                                onChangeFiscalYear={ this.props.changeFiscalYear } />
                            <DevelopmentResultChart 
                                data={this.props.hmData} 
                                width={ Constants.CHART_WIDTH } 
                                height={ Constants.CHART_HEIGHT } /> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hmData: state.hmDetails.hmData,
        hmParams: state.hmDetails.hmParams
    }
}

const mapDispatchToProps = {
    getHMData: hmActions.getHMDashboardData,
    changeTypeOfResult: hmActions.changeTypeOfResult,
    changeFiscalYear: hmActions.changeFiscalYear,
    changeOfFnMgmtRptItemCnt: hmActions.changeOfFnMgmtRptItemCnt
}

export default connect(mapStateToProps, mapDispatchToProps)(HigherManagement);