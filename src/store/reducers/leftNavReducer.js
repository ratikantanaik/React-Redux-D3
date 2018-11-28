import Constants from '../../constants';
import Utility from '../../utility/utility';

const initialState = {
    leftNavList: []
}

const letNavReducer = (state = initialState, action) => {
    switch(action.type){
        case Constants.LOAD_LEFT_NAV_SUCCESS: 
            return {
                ...state,
                leftNavList: Utility.activateLeftMenuItem(
                    action.payload, 
                    Utility.getModuleNameFromUrl()) 
            }

        case Constants.SELECT_NAV:
            return { 
                ...state, 
                leftNavList: 
                    Utility.activateLeftMenuItem(
                        state.leftNavList, 
                        action.payload? action.payload : Utility.getModuleNameFromUrl()) 
            }

        default:
            return state;
    }
}

export default letNavReducer;