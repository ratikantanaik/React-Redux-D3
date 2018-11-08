import React from 'react';
import { Route } from 'react-router-dom';
import Constants from '../../constants';
import DeliverySummary from '../dashboard/deliverySummary/deliverySummaryComponent';
import DevelopmentResult from '../dashboard/developmentResult/developmentResultComponent';
import Project from '../dashboard/project/projectComponent';
import CountryDashboard from '../dashboard/countryDashboard/countryDashboardComponent';
import ContributionInKind from '../dashboard/contributionInKind/contributionInKindComponent';
import PostManagement from '../dashboard/postManagement/postManagementComponent';
import MarketPlace from '../dashboard/marketPlace/marketPlaceComponent';
import HigherManagement  from '../dashboard/higherManagement/higherManagementComponent';
import Home from '../dashboard/home/homeComponent';

const dashboardRouter = () => {
    return(
        <React.Fragment>
            <Route path='/' exact component={Home} />
            <Route path={'/' + Constants.DELIVERY_SUMMARY} exact component={DeliverySummary} />
            <Route path={'/' + Constants.DEVELOPMENT_RESULT} exact component={DevelopmentResult} />
            <Route path={'/' + Constants.PROJECT} exact component={Project} />
            <Route path={'/' + Constants.COUNTRY_DASHBOARD} exact component={CountryDashboard} />
            <Route path={'/' + Constants.CONTRIBUTION_IN_KIND} exact component={ContributionInKind} />
            <Route path={'/' + Constants.POST_MANAGEMENT} exact component={PostManagement} />
            <Route path={'/' + Constants.MARKET_PLACE} exact component={MarketPlace} />
            <Route path={'/' + Constants.HIGHER_MANAGEMENT} exact component={HigherManagement} />
        </React.Fragment>
    )
}

export default dashboardRouter;