import Constants from '../../constants';
import axios from 'axios';

const leftNavActions = {
    loadNav: (userInfo) => {
        return (dispatch, getState) => {
            dispatch(loadLeftNavStarted);

            axios.get(Constants.WEB_API_URL + 'LeftNav',  
            {
                headers: 
                {
                    'Access-Control-Allow-Origin' : '*',
                    'userId' : userInfo.userId
                },
                responseType: 'json'
            })
            .then((result) => {
                let data = [];

                if(result.status === 200){
                    data = result.data.navs;
                }

                dispatch(loadLeftNavSuccess(data));
            })
            .catch((err) => {
                dispatch(loadLeftNavErr(err));
            })

            dispatch(loadLeftNavEnded());
        }
    },

    navSelect: (payload) => {
        return {
            type: Constants.SELECT_NAV,
            payload
        }
    }
}

const loadLeftNavStarted = () => {
    return {
        type: Constants.LOAD_LEFT_NAV_STARTED
    }
}

const loadLeftNavSuccess = (data) => {
    return {
        type: Constants.LOAD_LEFT_NAV_SUCCESS,
        payload: data
    }
}

const loadLeftNavEnded = () => {
    return {
        type: Constants.LOAD_LEFT_NAV_ENDED
    }
}

const loadLeftNavErr = (err) => {
    return {
        type: Constants.LOAD_LEFT_NAV_FAILURE,
        payload: err
    }
}

export default leftNavActions;