import Constants from '../../constants';
import Utility from '../../utility/utility';

const initialState = {
    leftNavList: []
}

const letNavReducer = (state = initialState, action) => {
    
    switch(action.type){
        case Constants.LOAD_LEFT_NAV_SUCCESS: 

            let moduleName = Utility.getModuleNameFromUrl();
            let navList = action.payload;

            let navWithCss = navList.map((nav) => {
                
                nav.css = (nav.url === moduleName)? 
                Constants.LIST_GROUP_ITEM_ACTIVE : 
                Constants.LIST_GROUP_ITEM; 

                return nav;
            });

            return {
                ...state,
                leftNavList: navWithCss
            }

        case Constants.SELECT_NAV:
            return { 
                ...state, 
                leftNavList: 
                    Utility.activateLeftMenuItem(
                        state.leftNavList, 
                        action.payload) 
            }
        default:
            return state;
    }
}

export default letNavReducer;