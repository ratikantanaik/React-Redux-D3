import Constants from "../constants";

const utility = {
    activateLeftMenuItem: (leftNavList, menuItemName) => {
        
        let leftNavListNew = [...leftNavList];

        leftNavListNew.forEach((item) => {
            if(item.url === menuItemName){
                item.css = Constants.LIST_GROUP_ITEM_ACTIVE
            }
            else{
                item.css = Constants.LIST_GROUP_ITEM
            }
        })

        return leftNavListNew;
    },

    getModuleNameFromUrl: () => {
        let urlSplit = window.location.href.split('/');
        let moduleName = urlSplit[urlSplit.length - 1];

        if(moduleName.indexOf(':') === 1)
            return undefined;
        else
            return moduleName;
    }
}

export default utility;