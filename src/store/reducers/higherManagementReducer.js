import Constants from '../../constants';

const initialState = {
        devResParams: {
            typeOfResult: 'Outcome',
            sectionID: '82',
            corporateIndicatorID: 52,
            fsclYear: 2018
        },

        financialMgmtRptParams: {
            itemsLength: 3
        }

    // hmData: {
    //     itcDevResult: [],
    //     itcFinacialMgmtData: [],
    //     kpiDetail: null
    // }
}

const higherManagementReducer = (state = initialState, { type, payload}) => {
    switch(type){
        case Constants.PROCESS_HM_DATA:
            return { 
                ...state, 
                hmData: payload.hmData, 
                devResParams: payload.hmParams
            };
        default:
            return state;
    }
}

export default higherManagementReducer;