using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SessionLab.Controllers
{
    public class SessionController : Controller
    {
        public IActionResult SetSession()
        {
            HttpContext.Session.SetString("name", "bhumika");
            HttpContext.Session.SetInt32("id", 1);

            return Content("Session values set!");
        }

        public IActionResult GetSession()
        {
            var name = HttpContext.Session.GetString("name");
            var id = HttpContext.Session.GetInt32("id");

            return Content($"Name: {name}, ID: {id}");
        }
    }
}