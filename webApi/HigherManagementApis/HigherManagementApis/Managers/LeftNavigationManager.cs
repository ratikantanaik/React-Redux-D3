using HigherManagementApis.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HigherManagementApis.Managers
{
    public class LeftNavigationManager
    {
        public static LeftNavigation getNavigationList(int userId)
        {
            LeftNavigation leftNavigation = new LeftNavigation();
            leftNavigation.navs = new List<NavItem>();

            leftNavigation.navs.Add(new NavItem("Delivery Summary", "deliverySummary"));
            leftNavigation.navs.Add(new NavItem("Development Result", "developmentResult"));
            leftNavigation.navs.Add(new NavItem("Projects", "project"));

            if (userId == 2000)
            {
                leftNavigation.navs.Add(new NavItem("Country Dashboard", "countryDashboard"));
                leftNavigation.navs.Add(new NavItem("Contribution in kind", "contributionInKind"));
                leftNavigation.navs.Add(new NavItem("Post Management", "postManagement"));
            }

            leftNavigation.navs.Add(new NavItem("Market Place", "marketPlace"));
            leftNavigation.navs.Add(new NavItem("Higher Management", "higherManagement"));

            return leftNavigation;
        }
    }
}