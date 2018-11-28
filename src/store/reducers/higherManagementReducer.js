import Constants from '../../constants';

const initialState = {
        hmParams: {
            typeOfResult: 'Outcome',
            sectionID: '82',
            corporateIndicatorID: 52,
            fsclYear: 2018,
            fnMgmtItemCnt: 3,
            wantDevResData: true,
            wantFnMgmtData: true,
            wantKpiData: true,
            selectedTypeOfResult: 'Type of result',
            selectedFiscalYear: 'Fiscal Year'
        }
}

const higherManagementReducer = (state = initialState, { type, payload}) => {
    switch(type){
        case Constants.PROCESS_HM_DATA:
            return { 
                ...state, 
                hmData: payload.hmData, 
                hmParams: payload.hmParams
            };
        default:
            return state;
    }
}

export default higherManagementReducer;