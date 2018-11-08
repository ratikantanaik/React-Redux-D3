import hmReducer from '../../store/reducers/higherManagementReducer';
import Constants from '../../constants';

describe('Higher Management reducer', () => {
    it('should return initial state', () => {
        expect(
            hmReducer(undefined, {}))
            .toEqual(initialState)
        }
    ),

    it('should update initial state with api data', () => {
        expect(
            hmReducer(
                {
                    "hmData":initialState
                }, 
                { 
                    type: Constants.PROCESS_HM_DATA, 
                    payload: apiData 
                }
            )
        )
        .toEqual(
            {
                "hmData":apiData
            }
        )
    })
});


const initialState = {
    "itcDevResult": [],
    "itcFinacialMgmtData": [],
    "kpiDetail": null
};

const apiData = {
    "itcDevResult": [],
        "itcFinacialMgmtData": [],
        "kpiDetail": {
            "totalPortfolio": "$3,450,589",
            "ytdExpenditure": "$838,698",
            "deliveryRate": "24%",
            "deliveryProjection": "$3,280,070",
            "expectedDelivery": "95%"
        }
}