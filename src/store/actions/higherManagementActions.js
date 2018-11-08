import Constants from '../../constants';
import ApiCallUtility from '../../utility/apiCallUtility';

const higherManagementActions = {
    
    getHMDashboardData: (params) => {
        
        return (dispatch) => {
            
            processHMAPICall(dispatch, params)
        } 
    },

    changeTypeOfResult: (event) => {
            return (dispatch, getState) => {
                
                // Delete this hack to test
                let coid = 0;
                if(event.target.name === 'Impact'){
                    coid = 71;
                } else if(event.target.name === 'Outcome'){
                    coid = 52;
                } else if(event.target.name === 'Output'){
                    coid = 60;
                }

                // End of Delete this hack to test

                let newParams = {...getState().hmDetails.devResParams, typeOfResult: event.target.name, corporateIndicatorID: coid };
                processHMAPICall(dispatch, newParams)
            } 
    },

    changeFiscalYear: (event) => {
        return (dispatch, getState) => {
            let newParams = {...getState().hmDetails.devResParams, fsclYear: event.target.name };
            processHMAPICall(dispatch, newParams)
        }
    }
}

const processHMAPICall = (dispatch, params) => {
    
    dispatch(hmFetchDataStarted());

    ApiCallUtility.getHMDashboadDataFromApi(params)
    .then(result => {
        if(result.status === 200)
            dispatch(processHMData({ hmData: result.data, hmParams: params }));   
    })
    .catch(err => {
        dispatch(hmFetchError(err));
    });

    dispatch(hmFetchDataEnded());
}

const processHMData = (data) => {
    return {
        type: Constants.PROCESS_HM_DATA,
        payload: data
    }
}

const hmFetchDataStarted = () => {
    return {
        type: Constants.FETCH_HM_DATA_STARTED,
    }
}

const hmFetchDataEnded = () => {
    return {
        type: Constants.FETCH_HM_DATA_ENDED,
    }
}

const hmFetchError = (err) => {
    return {
        type: Constants.FETCH_HM_ERROR,
        payload: err
    }
}

export default higherManagementActions;