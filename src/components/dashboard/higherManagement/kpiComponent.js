import React from 'react';
import KPILink from './kpiLinkComponent';

const kpis = (props) => {
    return(
        <div className="col-md-12 top-kpi-elements" style={{marginTop: 50, marginBottom: 50}}>
            <KPILink to='totalPortfolio' clsName='toTalPortfolioKPI' linkName='Total Portfolio' {...props}  />
            <KPILink to='ytdExpenditure' clsName='ytdExpenditureKPI' linkName='YTD Expenditure' {...props}  />
            <KPILink to='deliveryRate' clsName='deliveryRateKPI' linkName='Delivery Rate' {...props}  />
            <KPILink to='deliveryProjection' clsName='deliveryProjectionKPI' linkName='Delivery Projection' {...props}  />
            <KPILink to='expectedDelivery' clsName='expectedDeliveryKPI' linkName='Expected Delivery' {...props}  />
        </div>
    )
}

export default kpis;