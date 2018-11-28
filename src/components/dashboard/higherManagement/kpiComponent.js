import React from 'react';
import KPILink from './kpiLinkComponent';
import Message from '../../message';

const kpis = (props) => {
    let returnContent;
    if(props.kpiDetail)
        returnContent = <div className="col-md-12 top-kpi-elements" style={{marginTop: 50, marginBottom: 50}}>
                            <KPILink to='totalPortfolio' clsName='toTalPortfolioKPI' linkName='Total Portfolio' val={props.kpiDetail.totalPortfolio}  />
                            <KPILink to='ytdExpenditure' clsName='ytdExpenditureKPI' linkName='YTD Expenditure' val={props.kpiDetail.ytdExpenditure} />
                            <KPILink to='deliveryRate' clsName='deliveryRateKPI' linkName='Delivery Rate' val={props.kpiDetail.deliveryRate} />
                            <KPILink to='deliveryProjection' clsName='deliveryProjectionKPI' linkName='Delivery Projection' val={props.kpiDetail.deliveryProjection} />
                            <KPILink to='expectedDelivery' clsName='expectedDeliveryKPI' linkName='Expected Delivery' val={props.kpiDetail.expectedDelivery} />
                        </div>;
    else
        returnContent = <Message msg='No Data Found' marginTop='50px' />

    return returnContent;
}

export default kpis;