using HigherManagementApis.Managers;
using HigherManagementApis.Models;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HigherManagementApis.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class HigherManagementController : ApiController
    {
        // GET: HigherManagement
        public HttpResponseMessage Get()
        {
            var headers = Request.Headers;
            int fsclYear = 0;
            int corporateOutcomeIndicatorID = 0;

            // Get typeOfResult value from header
            string typeOfResult = headers.Contains("typeOfResult") ? ((string[])headers.GetValues("typeOfResult")).GetValue(0).ToString() : null;
            // Get sectionID value from header
            string sectionID = headers.Contains("sectionID") ? ((string[])headers.GetValues("sectionID")).GetValue(0).ToString() : null;;
            // Get corporateOutcomeIndicatorID from header
            if (headers.Contains("corporateIndicatorID"))
                int.TryParse(((string[])headers.GetValues("corporateIndicatorID")).GetValue(0).ToString(), out corporateOutcomeIndicatorID);
            // Get fsclYear value from header
            if (headers.Contains("fsclYear"))
                int.TryParse(((string[])headers.GetValues("fsclYear")).GetValue(0).ToString(), out fsclYear);

            HigherManagement hm = HMManager.getHigherManagementData(typeOfResult, sectionID, corporateOutcomeIndicatorID, fsclYear); //"Outcome", "82", 52, 2018

            return Request.CreateResponse(HttpStatusCode.OK, hm);
        }
    }
}