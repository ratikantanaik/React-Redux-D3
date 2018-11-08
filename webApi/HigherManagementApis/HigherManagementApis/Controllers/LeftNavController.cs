using HigherManagementApis.Managers;
using HigherManagementApis.Models;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HigherManagementApis.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class LeftNavController : ApiController
    {
        // GET: Left Navigation
        public HttpResponseMessage Get()
        {
            var headers = Request.Headers;
            int userId = 0;

            if (headers.Contains("userId"))
                int.TryParse(((string[])headers.GetValues("userId")).GetValue(0).ToString(), out userId);

            LeftNavigation leftNav = LeftNavigationManager.getNavigationList(userId);

            return Request.CreateResponse(HttpStatusCode.OK, leftNav);
        }
    }
}