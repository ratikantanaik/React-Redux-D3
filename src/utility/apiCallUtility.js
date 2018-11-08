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
                    'fsclYear' : params.fsclYear
                },
                responseType: 'json'
            }
        )
    }
}

export default apiCallUtility;