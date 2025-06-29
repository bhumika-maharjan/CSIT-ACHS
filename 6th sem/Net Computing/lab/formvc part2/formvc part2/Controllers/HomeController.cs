using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using formvc_part2.Models;


namespace formvc_part2.Controllers;

public class HomeController : Controller
{
    //private readonly ILogger<HomeController> _logger;

    //public HomeController(ILogger<HomeController> logger)
    //{
    //    _logger = logger;
    //}

    //dependency injection code:
    public readonly Services.ILog _ILog;
    public HomeController(Services.ILog iLog)
    {
        _ILog = iLog;
    }

    public IActionResult Index()
    {
        _ILog.info("hello");
        return View();
    }

    //public string Privacy(int id, string name)//stores
    //{
    //    return id + name;//prints in controller
    //}
    ////index and prvacy are action

    public IActionResult Privacy()
    {
        return View();
    }
    [HttpPost]
    //displaying the data that user has entered . Form is an instance
    public IActionResult Privacy(form Form)
    {
        if (ModelState.IsValid)
        {
            return Content("Done");
        }
        else
        {
            return View(Form);
        }

    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
