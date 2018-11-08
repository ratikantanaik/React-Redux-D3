import React from 'react';
import { connect } from 'react-redux';
import DevelopmentResultChart from '../../charts/DevResChart';
import FinancialManagementReportChart from '../../charts/FnMgmtRptChart';
import hmActions from '../../../store/actions/higherManagementActions';
import Kpis from './kpiComponent'; 
import Message from '../../message';
import DevResultFilter from '../higherManagement/devResultFilterComponent';
import FinancialMgmtRptFilter from '../higherManagement/financialMgmtRptFilterComponent';

class HigherManagement extends React.Component {
    
    componentDidMount(){
        this.props.getHMData(this.props.devResParams);
    }

    render(){
        const chartWidth = 520, 
              chartHeight = 420;
              
        return(
            <div className="container-fluid padding-left-0">
                <div className="panel panel-default padding-left-0" style={{height: '700px', textAlign: 'center'}}>
                    { 
                        (this.props.hmData && this.props.hmData.kpiDetail)? 
                            <Kpis kpiData={this.props.hmData.kpiDetail} />
                            :
                            <Message msg="KPI data is missing" marginTop="100px" />
                    }
                    <div className="col-md-12">
                        <div className="col-md-6" id="fmrChart">
                            <FinancialMgmtRptFilter />
                            <FinancialManagementReportChart 
                                data={ this.props.hmData } 
                                width={ chartWidth } 
                                height={ chartHeight }/>
                        </div>
                        <div className="col-md-6" id="devResChart">
                            <DevResultFilter 
                                onChangeTypeOfResult={ this.props.changeTypeOfResult } 
                                onChangeFiscalYear={ this.props.changeFiscalYear } />
                            <DevelopmentResultChart 
                                data={this.props.hmData} 
                                width={chartWidth} 
                                height={chartHeight} /> 
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
        devResParams: state.hmDetails.devResParams
    }
}

const mapDispatchToProps = {
    getHMData: hmActions.getHMDashboardData,
    changeTypeOfResult: hmActions.changeTypeOfResult,
    changeFiscalYear: hmActions.changeFiscalYear
}

export default connect(mapStateToProps, mapDispatchToProps)(HigherManagement);