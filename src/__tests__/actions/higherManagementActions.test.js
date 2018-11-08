import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import hmActions from '../../store/actions/higherManagementActions';
import Constants from '../../constants';
//import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const dummyApiData = {
    "itcDevResult": [
        {
            "name": "1st",
            "values": {
                "T": 29,
                "A": 32
            }
        },
        {
            "name": "2nd",
            "values": {
                "T": 50,
                "A": 45
            }
        },
        {
            "name": "3rd",
            "values": {
                "T": 15,
                "A": 32
            }
        }
    ],
    "itcFinacialMgmtData": [
        {
            "series1": 10,
            "series2": 40,
            "name": "DMD"
        },
        {
            "series1": 30,
            "series2": 5,
            "name": "DEI"
        },
        {
            "series1": 60,
            "series2": 20,
            "name": "DCP"
        }
    ],
    "kpiDetail": {
        "totalPortfolio": "$3,450,589",
        "ytdExpenditure": "$838,698",
        "deliveryRate": "24%",
        "deliveryProjection": "$3,280,070",
        "expectedDelivery": "95%"
    }
}

let params = {};

describe('Higher Mgmt asyc actions', () => {
    // afterEach(() => {
    //     fetchMock.restore();
    // })
    
    it('Async call to get data', () => {
        // fetchMock.getOnce('/HigherManagement', {
        //     body: dummyApiData,
        //     headers: { 
        //         'content-type': 'application/json',
        //         'typeOfResult': 'Outcome',
        //         'sectionID': 58
        //     }
        // })
    });

    const expectedActions = [
        { type: Constants.FETCH_HM_DATA_STARTED },
        { type: Constants.PROCESS_HM_DATA },
        { type: Constants.FETCH_HM_ERROR },
    ];

    const store = mockStore(
        {
            "itcDevResult": [],
            "itcFinacialMgmtData": [],
            "kpiDetail": null
        }
    );

    return store.dispatch(hmActions.getHMDashboardData(params), () => {
        expect(store.getActions()).toEqual(expectedActions);
    });
});