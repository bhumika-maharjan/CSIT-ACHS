﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        [NonAction]
        public string Contact()
        {
            return "This is a non-action method.";
        }

        //public ContentResult Shop()
        //{
        //    return Content("Shop with us");
        //}
    }
}
