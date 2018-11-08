using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HigherManagementApis.Models
{
    public class HigherManagement
    {
        public List<DevResItem> itcDevResult { get; set; }

        public FinancialMgmtItem[] itcFinacialMgmtData { get; set; }

        public KPI kpiDetail { get; set; }
    }

    public class DevResItem
    {
        public DevResItem(string name, decimal? T, decimal? A)
        {
            this.name = name;
            values = new Val(T, A);
        }

        public string name { get; set; }

        public Val values { get; set; }
    }

    public class Val
    {
        public Val(decimal? T, decimal? A)
        {
            this.T = T;
            this.A = A;
        }

        public decimal? T { get; set; }
        public decimal? A { get; set; }
    }

    public class FinancialMgmtItem
    {
        public int series1 { get; set; }
        public int series2 { get; set; }
        public string name { get; set; }

        public FinancialMgmtItem(int series1, int series2, string name)
        {
            this.series1 = series1;
            this.series2 = series2;
            this.name = name;
        }
    }

    public class KPI
    {
        public string totalPortfolio { get; set; }
        public string ytdExpenditure { get; set; }
        public string deliveryRate { get; set; }
        public string deliveryProjection { get; set; }
        public string expectedDelivery { get; set; }
    }
}

