import React from 'react';
import KPIRouter from './kpiRouter';
import DashboardRouter from './dashboardRouter';
import { Switch } from 'react-router-dom';

const appRouter = () => {
    return(
        <div className='container-fluid'>
            <Switch>
                <KPIRouter />
            </Switch>
            <Switch>
                <DashboardRouter />
            </Switch>
        </div>
    )
}

export default appRouter;