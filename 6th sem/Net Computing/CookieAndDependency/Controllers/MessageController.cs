using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CookieAndDependency.Services;
using Microsoft.AspNetCore.Mvc;

namespace CookieAndDependency.Controllers
{
    public class MessageController : Controller
    {
        private readonly IMyService _myService;

        // DI via constructor
        public MessageController(IMyService myService)
        {
            _myService = myService;
        }

        public IActionResult Show()
        {
            var message = _myService.GetMessage();
            return Content(message); // returns plain text response
        }
    }
}