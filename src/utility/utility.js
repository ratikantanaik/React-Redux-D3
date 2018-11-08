import Constants from "../constants";
import * as d3 from "d3";

const utility = {
    activateLeftMenuItem: (leftNavList, menuItemName) => {
        console.log(leftNavList);
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
    },

    removeChartContentFromId: (id) => {
        d3.select(`#${id}`).select('svg').remove()
    }
}

export default utility;