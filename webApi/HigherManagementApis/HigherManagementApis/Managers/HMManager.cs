using HigherManagementApis.EF;
using HigherManagementApis.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace HigherManagementApis.Managers
{
    public class HMManager
    {
        public static HigherManagement getHigherManagementData(string resultType, string sid, int coid, int fsclYr)
        {
            HigherManagement hm = new HigherManagement();
            int corporateOutcomeIndicatorID = 0;
            int corporateOutputIndicatorID = 0;
            int corporateImpactIndicatorID = 0;
            switch (resultType)
            {
                case "Outcome":
                    corporateOutcomeIndicatorID = coid;
                    break;
                case "Output":
                    corporateOutputIndicatorID = coid;
                    break;
                case "Impact":
                    corporateImpactIndicatorID = coid;
                    break;
            }

            using (ITC_Conn itcDBContext = new ITC_Conn())
            {
                #region #Development Result Data
                var snapshotDetail = from sci in itcDBContext.snapshotCorporateIndicators
                                     where sci.TypeOfResult == resultType &&
                                           sci.SectionID == sid &&
                                           sci.FsclYear == fsclYr &&
                                           (sci.CorporateOutcomeIndicatorID == corporateOutcomeIndicatorID ||
                                           sci.CorporateOutputIndicatorID == corporateOutputIndicatorID ||
                                           sci.CorporateImpactIndicatorID == corporateImpactIndicatorID)
                                     group sci by new
                                     {
                                         sci.TypeOfResult,
                                         sci.SectionID,
                                         sci.FsclYear
                                     }
                                     into sciRes
                                     select new
                                     {
                                         T1 = sciRes.Sum(s => s.Target_Q1),
                                         A1 = sciRes.Sum(s => s.Actual_Q1),
                                         T2 = sciRes.Sum(s => s.Target_Q2),
                                         A2 = sciRes.Sum(s => s.Actual_Q2),
                                         T3 = sciRes.Sum(s => s.Target_Q3),
                                         A3 = sciRes.Sum(s => s.Actual_Q3),
                                         T4 = sciRes.Sum(s => s.Target_Q4),
                                         A4 = sciRes.Sum(s => s.Actual_Q4),
                                     };

                if (snapshotDetail.Count() > 0)
                {
                    DevResItem Q1 = new DevResItem("1st", snapshotDetail.First().T1, snapshotDetail.First().A1);
                    DevResItem Q2 = new DevResItem("2nd", snapshotDetail.First().T2, snapshotDetail.First().A2);
                    DevResItem Q3 = new DevResItem("3rd", snapshotDetail.First().T3, snapshotDetail.First().A3);
                    DevResItem Q4 = new DevResItem("4th", snapshotDetail.First().T4, snapshotDetail.First().A4);

                    hm.itcDevResult = new List<DevResItem>()
                    {
                        Q1, Q2, Q3, Q4
                    };
                }

                #endregion

                #region Financial Management Data
                // Hardcoded forthe time being
                List<FinancialMgmtItem> fnMgmtItems = new List<FinancialMgmtItem>()
                {
                    new FinancialMgmtItem(10, 40, "DMD"),
                    new FinancialMgmtItem(30, 5, "DEI"),
                    new FinancialMgmtItem(60, 20, "DCP"),
                };

                hm.itcFinacialMgmtData = fnMgmtItems.ToArray();

                #endregion
            }

            // KPI details

            hm.kpiDetail = new KPI();
            hm.kpiDetail.totalPortfolio = "$3,450,589";
            hm.kpiDetail.ytdExpenditure = "$838,698";
            hm.kpiDetail.deliveryRate = "24%";
            hm.kpiDetail.deliveryProjection = "$3,280,070";
            hm.kpiDetail.expectedDelivery = "95%";

            return hm;
        }
    }
}