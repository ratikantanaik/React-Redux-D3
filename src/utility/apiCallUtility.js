import Constants from '../constants';
import axios from 'axios';

const apiCallUtility = {
    getHMDashboadDataFromApi: (params) => {
        return axios.get(Constants.WEB_API_URL + 'HigherManagement', 
            {
                headers: 
                {
                    'Access-Control-Allow-Origin' : '*',
                    'typeOfResult' : params.typeOfResult,
                    'sectionID' : params.sectionID,
                    'corporateIndicatorID' : params.corporateIndicatorID,
                    'fsclYear' : params.fsclYear,
                    'fnMgmtItemCnt': params.fnMgmtItemCnt,
                    'wantKpiData': params.wantKpiData,
                    'wantDevResData': params.wantDevResData,
                    'wantFnMgmtData': params.wantFnMgmtData
                },
                responseType: 'json'
            }
        )
    }
}

export default apiCallUtility;