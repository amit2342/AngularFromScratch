using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;

namespace AngularFromScratch.Controllers
{
    [Route("api/{Controller}")]
    public class testController : Controller
    {
        [HttpGet("/api/values")]
        public IEnumerable<string> Index()
        {
            return new string[] { "a", "b", "c", "d" };
        }
    }
}