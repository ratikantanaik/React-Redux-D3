import React from 'react';
import { Route } from 'react-router-dom';
import Constants from '../../constants';
import TotalPortfolio from '../dashboard/higherManagement/kpi/totalPortfolioComponent';
import YTDExpenditure from '../dashboard/higherManagement/kpi/ytdExpenditureComponent';
import DeliveryRate from '../dashboard/higherManagement/kpi/deliveryRateComponent';
import DeliveryProjection from '../dashboard/higherManagement/kpi/deliveryProjectionComponent';
import ExpectedDelivery from '../dashboard/higherManagement/kpi/expectedDeliveryComponent';

const kpiRouter = () => {
    return(
        <React.Fragment>
            <Route path={'/' + Constants.TOTAL_PORTFOLIO} exact component={TotalPortfolio} />
            <Route path={'/' + Constants.YTD_EXPENDITURE} exact component={YTDExpenditure} />
            <Route path={'/' + Constants.DELIVERY_RATE} exact component={DeliveryRate} />
            <Route path={'/' + Constants.DELIVERY_PROJECTION} exact component={DeliveryProjection} />
            <Route path={'/' + Constants.EXPECTED_DELIVERY} exact component={ExpectedDelivery} />
        </React.Fragment>
    )
}

export default kpiRouter;