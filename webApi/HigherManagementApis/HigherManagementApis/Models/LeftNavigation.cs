using System.Collections.Generic;

namespace HigherManagementApis.Models
{
    public class LeftNavigation
    {
        public List<NavItem> navs { get; set; }
    }

    public class NavItem
    {
        public NavItem(string displayName, string url)
        {
            this.displayName = displayName;
            this.url = url;
        }
        public string displayName { get; set; }
        public string url { get; set; }
    }
}